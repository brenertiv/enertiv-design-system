const STUB_FROM = /^(ducks|routes)(\/|$)/;

export const CATALOG_STUB_HELPER = `const __catalogAppStub = (() => {
  const make = () => {
    const fn = (..._args) => make();
    return new Proxy(fn, {
      get(_t, prop) {
        if (prop === "$$typeof") return undefined;
        if (prop === "prototype") return Function.prototype;
        if (prop === Symbol.toPrimitive) return () => "";
        if (prop === "then") return undefined;
        return make();
      },
      apply() { return make(); },
    });
  };
  return make();
})();
`;

function stubBindings(spec: string): string {
  const trimmed = spec.trim();
  if (trimmed.startsWith("type ")) return "";
  if (trimmed.startsWith("* as ")) {
    return `const ${trimmed.slice(5).trim()} = __catalogAppStub;`;
  }
  if (!trimmed.startsWith("{")) {
    const defaultName = trimmed.split(",")[0]?.replace(/^type\s+/, "").trim();
    return defaultName ? `const ${defaultName} = __catalogAppStub;` : "";
  }
  return trimmed
    .replace(/^\{/, "")
    .replace(/\}$/, "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => !part.startsWith("type "))
    .map((part) => {
      const [left, alias] = part.split(/\s+as\s+/);
      const local = (alias || left).trim();
      return local ? `const ${local} = __catalogAppStub;` : "";
    })
    .join("\n");
}

export function rewriteAppImports(code: string): string {
  let touched = false;
  let next = code.replace(
    /export\s+\*\s+from\s+['"]([^'"]+)['"]\s*;?/g,
    (full, mod: string) => {
      if (!STUB_FROM.test(mod)) return full;
      touched = true;
      return "";
    },
  );
  next = next.replace(
    /export\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]\s*;?/g,
    (full, spec: string, mod: string) => {
      if (!STUB_FROM.test(mod)) return full;
      touched = true;
      return stubBindings(`{${spec}}`);
    },
  );
  next = next.replace(
    /import\s+(type\s+)?([\w*{}\s,]+)\s+from\s+['"]([^'"]+)['"]\s*;?/g,
    (full, typeKw: string | undefined, spec: string, mod: string) => {
      if (typeKw) return full;
      if (!STUB_FROM.test(mod)) return full;
      touched = true;
      return stubBindings(spec);
    },
  );
  if (!touched) return code;
  return CATALOG_STUB_HELPER + next;
}

export function esbuildStubAppImports() {
  return {
    name: "stub-enertiv-scan",
    setup(build: {
      onLoad: (
        opts: { filter: RegExp },
        cb: (args: { path: string }) => Promise<{ contents: string; loader: "ts" | "tsx" | "js" }>,
      ) => void;
    }) {
      build.onLoad(
        { filter: /enertiv-enertiv-web-82264615de49.*\.[cm]?[jt]sx?$/ },
        async (args) => {
          const { readFile } = await import("node:fs/promises");
          const contents = rewriteAppImports(await readFile(args.path, "utf8"));
          const loader = args.path.endsWith("tsx")
            ? "tsx"
            : args.path.endsWith("ts")
              ? "ts"
              : "js";
          return { contents, loader };
        },
      );
    },
  };
}

export function stubAppImports() {
  return {
    name: "stub-enertiv-app-imports",
    enforce: "pre" as const,
    resolveId(id: string) {
      if (STUB_FROM.test(id)) return "\0catalog-app-stub";
      return null;
    },
    load(id: string) {
      if (id !== "\0catalog-app-stub") return null;
      return `${CATALOG_STUB_HELPER}export default __catalogAppStub;\n`;
    },
    transform(code: string, id: string) {
      if (!id.includes("enertiv-enertiv-web-82264615de49")) return null;
      const next = rewriteAppImports(code);
      if (next === code) return null;
      return { code: next, map: null };
    },
  };
}

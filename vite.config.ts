import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { esbuildStubAppImports, stubAppImports } from "./vite.stub-app-imports";

const root = dirname(fileURLToPath(import.meta.url));
const web = resolve(root, "../enertiv-enertiv-web-82264615de49/src");
const shims = resolve(root, "src/shims");
const nm = (pkg: string) => resolve(root, "node_modules", pkg);

export default defineConfig({
  plugins: [stubAppImports(), react(), svgr({ include: "**/*.svg?react" })],
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
      "@tanstack/react-query",
    ],
    alias: [
      { find: "libs/mixpanel", replacement: resolve(shims, "mixpanel.ts") },
      { find: "libs/i18n", replacement: resolve(shims, "i18n.ts") },
      { find: "libs/envs", replacement: resolve(shims, "envs.ts") },
      { find: "libs/axiosex", replacement: resolve(shims, "axiosex.ts") },
      { find: "libs/hooks/useBreadCrumbs", replacement: resolve(shims, "useBreadCrumbs.ts") },
      { find: "libs/hooks/usePropertyInfo", replacement: resolve(shims, "usePropertyInfo.ts") },
      { find: "libs/hooks/usePortfolioParams", replacement: resolve(shims, "usePortfolioParams.ts") },
      { find: "libs/hooks/useTanstackQuery", replacement: resolve(shims, "useTanstackQuery.ts") },
      { find: "libs/hooks/useAppParams", replacement: resolve(shims, "useAppParams.ts") },
      { find: "react-redux", replacement: resolve(shims, "react-redux.ts") },
      { find: "redux-first-history", replacement: resolve(shims, "redux-first-history.ts") },
      { find: "react-i18next", replacement: resolve(shims, "react-i18next.ts") },
      { find: "@sentry/react", replacement: resolve(shims, "sentry.ts") },
      { find: "use-query-params", replacement: resolve(shims, "use-query-params.ts") },
      { find: /^react-dom$/, replacement: nm("react-dom") },
      { find: /^react$/, replacement: nm("react") },
      { find: "@mui/x-date-pickers", replacement: nm("@mui/x-date-pickers") },
      { find: "@mui/material", replacement: nm("@mui/material") },
      { find: "@mui/icons-material", replacement: nm("@mui/icons-material") },
      { find: "@mui/utils", replacement: nm("@mui/utils") },
      { find: "@mui/system", replacement: nm("@mui/system") },
      { find: "@tanstack/react-query", replacement: nm("@tanstack/react-query") },
      { find: "react-use-draggable-scroll", replacement: nm("react-use-draggable-scroll") },
      { find: "react-use-intercom", replacement: resolve(shims, "react-use-intercom.ts") },
      { find: "leaflet.markercluster", replacement: nm("leaflet.markercluster") },
      { find: "react-responsive-carousel", replacement: nm("react-responsive-carousel") },
      { find: "use-deep-compare-effect", replacement: nm("use-deep-compare-effect") },
      { find: "react-zoom-pan-pinch", replacement: nm("react-zoom-pan-pinch") },
      { find: "react-lazy-load-image-component", replacement: nm("react-lazy-load-image-component") },
      { find: "@emotion/react", replacement: nm("@emotion/react") },
      { find: "@emotion/styled", replacement: nm("@emotion/styled") },
      { find: "clsx", replacement: nm("clsx") },
      { find: "lodash", replacement: nm("lodash") },
      { find: "moment-timezone", replacement: nm("moment-timezone") },
      { find: "moment", replacement: nm("moment") },
      { find: "uuid", replacement: nm("uuid") },
      { find: "axios", replacement: nm("axios") },
      { find: "http-status-codes", replacement: nm("http-status-codes") },
      { find: "react-virtualized", replacement: nm("react-virtualized") },
      { find: "react-intersection-observer", replacement: nm("react-intersection-observer") },
      { find: "@amcharts/amcharts5", replacement: nm("@amcharts/amcharts5") },
      { find: "react-leaflet", replacement: nm("react-leaflet") },
      { find: "leaflet", replacement: nm("leaflet") },
      { find: "crossfilter2", replacement: nm("crossfilter2") },
      { find: "assets", replacement: resolve(web, "assets") },
      { find: "components", replacement: resolve(web, "components") },
      { find: "pages", replacement: resolve(web, "pages") },
      { find: "libs", replacement: resolve(web, "libs") },
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildStubAppImports()],
    },
  },
  server: {
    port: 5173,
    fs: {
      allow: [root, resolve(web, "..")],
    },
  },
});

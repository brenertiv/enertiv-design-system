export const push = (to?: unknown) => ({ type: "@@router/PUSH", payload: to });
export const replace = (to?: unknown) => ({ type: "@@router/REPLACE", payload: to });
export const goBack = () => ({ type: "@@router/BACK" });
export const go = (n?: number) => ({ type: "@@router/GO", payload: n });

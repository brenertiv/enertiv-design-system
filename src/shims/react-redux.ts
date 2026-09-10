import type { ReactNode } from "react";
import { createContext } from "react";

export function useDispatch() {
  return (action?: unknown) => action;
}

export function useSelector<T = unknown>(selector?: (s: unknown) => T): T {
  return selector ? selector({}) : (undefined as T);
}

export function useStore() {
  return {
    getState: () => ({}),
    dispatch: () => undefined,
    subscribe: () => () => undefined,
  };
}

export const ReactReduxContext = createContext(null);

export function Provider({ children }: { children?: ReactNode }) {
  return children;
}

export function connect() {
  return (Comp: unknown) => Comp;
}

export function batch(fn: () => void) {
  fn();
}

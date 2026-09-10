import { createContext, useContext } from "react";
import type { ColorMode } from "../theme/tokens";

export type CatalogThemeContextValue = {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
};

export const CatalogThemeContext = createContext<CatalogThemeContextValue | null>(
  null,
);

export function useCatalogTheme() {
  const ctx = useContext(CatalogThemeContext);
  if (!ctx) {
    throw new Error("useCatalogTheme must be used within CatalogThemeContext");
  }
  return ctx;
}

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogNav } from "./catalog/CatalogNav";
import { CatalogThemeContext } from "./catalog/CatalogThemeContext";
import { CompositesPage } from "./pages/CompositesPage";
import { IconsPage } from "./pages/IconsPage";
import { PatternsPage } from "./pages/PatternsPage";
import { PrimitivesPage } from "./pages/PrimitivesPage";
import { TokensPage } from "./pages/TokensPage";
import { createEnertivTheme } from "./theme/muiTheme";
import type { ColorMode } from "./theme/tokens";

export function App() {
  const [mode, setMode] = useState<ColorMode>("light");
  const theme = useMemo(() => createEnertivTheme(mode), [mode]);

  return (
    <CatalogThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CatalogNav />
        <Routes>
          <Route path="/" element={<Navigate to="/tokens" replace />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/primitives" element={<PrimitivesPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/composites" element={<CompositesPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
        </Routes>
      </ThemeProvider>
    </CatalogThemeContext.Provider>
  );
}

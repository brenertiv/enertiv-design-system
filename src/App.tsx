import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogShell } from "./catalog/CatalogShell";
import { CatalogThemeContext } from "./catalog/CatalogThemeContext";
import { OverviewPage } from "./pages/OverviewPage";
import { SandboxHost } from "./pages/SandboxHost";
import { theme as createProductionTheme } from "libs/theme";
import type { ColorMode } from "./theme/tokens";

export function App() {
  const [mode, setMode] = useState<ColorMode>("light");
  const theme = useMemo(
    () => createProductionTheme({ button: "#40B4E5", link: "#40B4E5" }, mode),
    [mode],
  );

  return (
    <CatalogThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CssBaseline />
          <CatalogShell>
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/tokens" element={<Navigate to="/colors" replace />} />
              <Route path="/common" element={<Navigate to="/inputs" replace />} />
              <Route path="/primitives" element={<Navigate to="/inputs" replace />} />
              <Route path="/composites" element={<Navigate to="/layouts" replace />} />
              <Route path="/patterns" element={<Navigate to="/charts" replace />} />
              <Route path="/colors" element={<SandboxHost page="colors" />} />
              <Route path="/typography" element={<SandboxHost page="typography" />} />
              <Route path="/spacing" element={<SandboxHost page="spacing" />} />
              <Route path="/icons" element={<SandboxHost page="icons" />} />
              <Route path="/navigation" element={<SandboxHost page="navigation" />} />
              <Route path="/layouts" element={<SandboxHost page="layouts" />} />
              <Route path="/inputs" element={<SandboxHost page="inputs" />} />
              <Route path="/cards" element={<SandboxHost page="cards" />} />
              <Route path="/data-display" element={<SandboxHost page="data-display" />} />
              <Route path="/charts" element={<SandboxHost page="charts" />} />
              <Route path="/complex" element={<SandboxHost page="complex" />} />
              <Route path="/html-blocks" element={<SandboxHost page="html-blocks" />} />
              <Route path="/page-layout" element={<SandboxHost page="page-layout" />} />
              <Route path="/map-themes" element={<SandboxHost page="map-themes" />} />
              <Route path="/cross-filter" element={<SandboxHost page="cross-filter" />} />
              <Route path="/object-hierarchy" element={<SandboxHost page="object-hierarchy" />} />
              <Route path="/cleanup" element={<SandboxHost page="cleanup" />} />
              <Route path="/simple" element={<SandboxHost page="simple" />} />
            </Routes>
          </CatalogShell>
        </LocalizationProvider>
      </ThemeProvider>
    </CatalogThemeContext.Provider>
  );
}

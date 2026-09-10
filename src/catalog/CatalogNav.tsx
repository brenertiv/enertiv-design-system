import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import { Link, useLocation } from "react-router-dom";
import { useCatalogTheme } from "./CatalogThemeContext";

const NAV = [
  { label: "Tokens", to: "/tokens" },
  { label: "Primitives", to: "/primitives" },
  { label: "Icons", to: "/icons" },
  { label: "Composites", to: "/composites" },
  { label: "Heavy patterns", to: "/patterns" },
] as const;

export function CatalogNav() {
  const location = useLocation();
  const { mode, setMode } = useCatalogTheme();
  const current = NAV.find((item) => location.pathname.startsWith(item.to))?.to ?? "/tokens";

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar sx={{ gap: 2, minHeight: 64 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>
          Enertiv catalog
        </Typography>
        <Tabs
          value={current}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ flex: 1, minHeight: 64 }}
        >
          {NAV.map((item) => (
            <Tab
              key={item.to}
              value={item.to}
              label={item.label}
              component={Link}
              to={item.to}
            />
          ))}
        </Tabs>
        <IconButton
          aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? <DarkModeOutlined /> : <LightModeOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

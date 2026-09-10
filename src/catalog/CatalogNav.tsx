import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { useCatalogTheme } from "./CatalogThemeContext";

/** Mirrors pages/Sandbox/index.tsx NAV in enertiv-web. */
export const CATALOG_NAV = [
  {
    label: "System",
    items: [{ label: "Overview", to: "/overview" }],
  },
  {
    label: "Design Tokens",
    items: [
      { label: "Colors", to: "/colors" },
      { label: "Typography", to: "/typography" },
      { label: "Spacing & Shape", to: "/spacing" },
      { label: "Icons", to: "/icons" },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Navigation", to: "/navigation" },
      { label: "Layouts", to: "/layouts" },
      { label: "Inputs", to: "/inputs" },
      { label: "Cards", to: "/cards" },
      { label: "Data Display", to: "/data-display" },
      { label: "Charts", to: "/charts" },
      { label: "Complex", to: "/complex" },
      { label: "HTML Blocks", to: "/html-blocks" },
      { label: "Page Layout", to: "/page-layout" },
      { label: "Map Themes", to: "/map-themes" },
      { label: "Cross Filter", to: "/cross-filter" },
      { label: "Object Hierarchy", to: "/object-hierarchy" },
    ],
  },
  {
    label: "Dev / Test",
    items: [
      { label: "Cleanup", to: "/cleanup" },
      { label: "Simple", to: "/simple" },
    ],
  },
] as const;

export function CatalogNav() {
  const location = useLocation();
  const { mode, setMode } = useCatalogTheme();

  return (
    <Box
      component="nav"
      sx={{
        width: 240,
        flexShrink: 0,
        borderRight: 1,
        borderColor: "divider",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflow: "auto",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 2, py: 1.5, gap: 1 }}>
        <Typography variant="subtitle2" sx={{ flex: 1, fontWeight: 600 }}>
          Enertiv catalog
        </Typography>
        <IconButton
          size="small"
          aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? <DarkModeOutlined fontSize="small" /> : <LightModeOutlined />}
        </IconButton>
      </Box>
      {CATALOG_NAV.map((group) => (
        <List
          key={group.label}
          dense
          subheader={
            <ListSubheader sx={{ bgcolor: "transparent", lineHeight: "32px" }}>
              {group.label}
            </ListSubheader>
          }
        >
          {group.items.map((item) => (
            <ListItemButton
              key={item.to}
              component={Link}
              to={item.to}
              selected={location.pathname === item.to}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      ))}
    </Box>
  );
}

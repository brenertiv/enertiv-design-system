# Component inventory

Catalog name | Source | Production surface
--- | --- | ---
Tokens (raw module) | User-supplied constants; replace from `enertiv-web` token file + `tokens/enertiv.tokens.json` | App-wide theme
MUI theme factory | Catalog `src/theme/muiTheme.ts` until `libs/theme/enertiv-mui-theme` is copied | ThemeProvider
Button | `@mui/material` Button (extract production wrapper when repo is available) | App chrome, forms
TextField | `@mui/material` TextField | Forms, filters
Select | `@mui/material` Select | Filters
Chip | `@mui/material` Chip | Status, tags
Tabs | `@mui/material` Tabs | Section switchers
Dialog | `@mui/material` Dialog | Confirmations
Tooltip | `@mui/material` Tooltip | Chart and table hints
Menu | `@mui/material` Menu | Overflow actions
Icons | Curated `@mui/icons-material` Outlined set | App chrome
App header | Catalog composite (MUI AppBar) | Top nav
Filter bar | Catalog composite | Portfolio / building filters
Data card | Catalog composite | KPI cards
Empty / error | MUI Alert | Empty lists, load errors
Heavy patterns | Stub | Tables, widgets, amCharts, Leaflet

MCP at `https://app.enertiv.com/mcp` is configured in `.cursor/mcp.json` but was not authenticated in this agent session.

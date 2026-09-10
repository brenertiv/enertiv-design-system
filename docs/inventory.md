# Component inventory

Source checkout: `/Users/enertiv/Desktop/projects/enertiv-enertiv-web-82264615de49`  
~599 `.tsx` files under `src/components`. Primary reusable layer is `src/components/common` (327 TSX).

## Tokens / theme

| Catalog name | Source | Production surface |
| --- | --- | --- |
| Raw tokens | `src/pages/Sandbox/theme/enertiv-tokens.ts` (copied) | App-wide |
| MUI theme factory | `src/pages/Sandbox/theme/enertiv-mui-theme.ts` (copied) | ThemeProvider |
| DTCG JSON | `tokens/enertiv.tokens.json` | Tokens Studio |
| Runtime palette | `src/libs/theme` (`palette.design_system`) | Most pages |

## common (`src/components/common`)

| Catalog name | Source | Notes |
| --- | --- | --- |
| Button | `common/Button` | Custom `<button>`, not MUI Button |
| Input | `common/Input` | Styled MUI TextField |
| Checkbox / RadioGroup | `common/Checkbox`, `RadioGroup` | MUI wrappers |
| Tabs | `common/Tabs`, `ResponsiveTabs` | Styled MUI Tabs |
| Tooltip | `common/Tooltip` | MUI Tooltip |
| ActionsMenu | `common/ActionsMenu` | MUI Menu |
| FormDialog | `common/FormDialog` | MUI Dialog + FooterPanel |
| Autocomplete | `common/Autocomplete` | MUI Autocomplete |
| Chip | — | No thin wrapper; FileChip is custom |

## Icons

| Catalog name | Source | Notes |
| --- | --- | --- |
| SVGIcon | `common/SVGIcon` | ~170 SVGs in `src/assets/icons` |
| Names | `common/SVGIcon/iconNames.generated.ts` | `yarn generate-icon-names` |

## Composites

| Catalog name | Source | Notes |
| --- | --- | --- |
| PageHeaderNew | `design_system/PageHeaderNew` | New page header |
| PageWrapper / PageContent / FooterPanel | `design_system/` | Page layout kit (17 TSX files) |
| Header / Drawer / MobileHeader | `common/` | App chrome |
| FilterPanel / SearchFilter | `common/` | Filters |
| ResponsiveModal | `modals/ResponsiveModal` | Shared dialog |

## Heavy patterns

| Catalog name | Source | Library |
| --- | --- | --- |
| GroupingTable | `common/GroupingTable` | material-react-table |
| MapView | `common/MapView` | Leaflet |
| Line/Column/Donut/… | `am5charts/` | amCharts 5 |
| DashboardGrid | `pages/Portfolio/Dashboard/components/DashboardGrid` | react-grid-layout |

## Sandbox

`src/pages/Sandbox` already groups Colors, Typography, Spacing, Icons, Navigation, Inputs, Cards, Data display, Charts, Complex, layouts, maps.

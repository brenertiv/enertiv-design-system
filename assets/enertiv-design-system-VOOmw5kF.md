# Enertiv design system - agent reference

This file is for agents only. Humans should use the catalog **System overview** page
and the live Sandbox groups. Do not treat this file as a substitute for reading
production source.

**Authority:** the running product (`enertiv-web`), not this catalog and not this
document. If this file and the code disagree, the code wins.

Production checkout used by this catalog (see `docs/FRONTEND_SHA.md`):
`/Users/enertiv/Desktop/projects/enertiv-enertiv-web-82264615de49`

Canonical production agent docs (read these when working in the app repo):

- `.claude/rules/ui-design.md`
- `.claude/patterns/enertiv-design-system.md`
- `.claude/skills/brand-guardian/SKILL.md`

## Stack (production)

React 18 · MUI v6 (`@mui/material`, `@mui/system`, `@mui/lab`, `@mui/icons-material`, `@mui/styles`) · `@mui/x-date-pickers` v8 · Emotion 11 · `clsx` · AmCharts 5 only · Leaflet / `react-leaflet` / `leaflet.markercluster` · `material-react-table` (GroupingTable) · `react-virtualized` · `react-grid-layout` · Moment.

Do not add Recharts, Chart.js, D3, or another component kit.


A **viewer** of production Sandbox groups (`src/pages/Sandbox`). It is not a
component library the app imports. Do not extract catalog wrappers back into
`enertiv-web`.

Nav matches production Sandbox: Design Tokens, Components, Dev / Test.

---

## Hard rules

1. **Do not invent components.** Reuse `src/components/common/` first, then
   `src/components/design_system/`, then domain `src/components/{feature}/`,
   then page-local `src/pages/{Page}/components/`. Only create a new component
   when those layers have no match.
2. **Do not invent lookalikes in this catalog.** If a production module cannot
   mount, list its path — do not draw a fake Button/TextField/chart.
3. **Match by feature, not capability.** Grep a sibling screen that already does
   the same job (download menu, row actions, filters) and copy that wiring.
   Picking “a component that can do it” is how reviews get rejected.
4. **Do not use raw MUI primitives** when a common wrapper exists:
   - Button → `components/common/Button` + `ButtonType` (not MUI `Button`)
   - Input → `components/common/Input` (not MUI `TextField`)
   - Dialog → `FormDialog` (not MUI `Dialog`)
   - Select → `FormSelect` / `FilterSelect` / `MultipleSelect` as used on the
     sibling screen
   - Table → `Table` or `GroupingTable`
   - Icon → `SVGIcon` first; MUI icons only if no SVG name exists
   - Charts → `components/am5charts/` (AmCharts 5 only)
5. **Do not invent tokens.** Colors and shadows come from
   `theme.palette.design_system.*` or documented legacy palettes. Spacing via
   `theme.spacing()` (1 = 8px). No inline hex, rgb, or px in new UI.
6. **Do not treat `UI.*` as dead.** `theme.palette.UI.*` and `Action.*` are
   live. Do not swap them to `design_system.*` unless hexes match in every mode
   in `src/libs/theme/const.ts`. A name-plausible swap can recolor dozens of
   screens.
7. **Do not fabricate data.** Empty / `—` for absent values. `0` is a real
   reading.
8. **Sandbox is a variant catalog**, not a page-layout cookbook. For list/form
   structure, copy the nearest production page (`ui-page-patterns.md` in the
   app repo). This catalog’s Sandbox groups show tokens and component variants.

---

## Where tokens actually live

| Need | Source |
| --- | --- |
| Runtime color / shadow | `src/libs/theme/const.ts` → `theme.palette.design_system` |
| Legacy color | `theme.palette.UI`, `theme.palette.Action` (still used) |
| Sandbox / DTCG / new work | `src/pages/Sandbox/theme/enertiv-tokens.ts` and `enertiv-mui-theme.ts` |
| Type variants | `src/components/common/Typography/style.ts` (`VARIANT_SX`) — **not** `theme.palette.design_system.typography` |
| Font weight on palette | misspelled key `theme.palette.design_system.typoghraphy.font_weight` |
| Icons | `src/components/common/SVGIcon` + `src/assets/icons` |

Open `const.ts` and read the group. Do not invent a token path from memory.

Top-level `design_system.colors` groups include: `page`, `card`, `action`,
`inputs`, `dropdown`, `table`, `tabs`, `chip`, `pill`, `badge`, `checkbox`,
`radio`, `toggle`, `avatar`, `side_panel`, `side_details`, `left_nav`,
`top_nav`, `calendar`, `modals`, `overlay`, `tooltip`, `toast`, `loader`,
`comments`, `drag_and_drop`, `text`, `ui_grey`, `extended`, `data`.

---

## Voice (do not generate generic SaaS)

Users are facility managers, sustainability officers, operators, and ESG
leads. Time-poor, task-oriented, need numbers they can take to a board.

- Precision, clarity, authority, operational focus.
- Not a consumer app, not a marketing site, not default MUI chrome.
- Status: green healthy, orange warning, red critical.
- Loading: skeletons, not spinners, when layout must stay stable.
- Empty: `EmptyView` with instructive copy.
- Failed loads: `WidgetErrorState` with retry — not a dead-end message.
- Charts: AmCharts 5; match type to data story; no pie/donut with >5 segments.

---

## Catalog implementation notes (this repo only)

- Vite aliases `components`, `pages`, `libs` into the sibling `enertiv-web`
  `src/`.
- `ducks/` and `routes` imports are stubbed so Sandbox can render without Redux.
- ThemeProvider uses production `libs/theme` so `palette.UI` still resolves.
- If a Sandbox group fails, show the error — do not replace it with a mock UI.

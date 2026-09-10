import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import agentGuideUrl from "../../docs/agents/enertiv-design-system.md?url";

const PRINCIPLES = [
  {
    title: "The product is the source of truth",
    body: "Tokens, components, and layout patterns live in enertiv-web. This catalog mounts production Sandbox groups. It is not a second design system.",
  },
  {
    title: "Reuse before inventing",
    body: "Check common/, then design_system/, then domain and page-local components. A new control is a last resort. Match an existing screen that already does the same job — do not pick a primitive because it “can” do the job.",
  },
  {
    title: "Tokens, not literals",
    body: "Color and shadow come from the theme. Spacing uses theme.spacing() (8px base). New work should prefer palette.design_system. The older UI and Action palettes are still live; swapping them without checking hexes recolors real screens.",
  },
  {
    title: "Summary first, depth on demand",
    body: "Operators are time-poor. Surface the answer, then the proof. Every number should be actionable or reportable. Provenance and last-updated are part of the UI, not extras.",
  },
  {
    title: "A work tool, not generic SaaS",
    body: "The product is objective and data-forward: precision, clarity, authority. Not consumer decoration, not marketing heroes, not default MUI look. If a screen could belong to any competitor after a color swap, it is too generic.",
  },
] as const;

/** Libraries the production UI actually ships. Versions from enertiv-web package.json. */
const STACK = [
  {
    name: "React",
    pkg: "react / react-dom",
    version: "18.3",
    role: "UI runtime",
  },
  {
    name: "MUI Core",
    pkg: "@mui/material, @mui/system, @mui/lab",
    version: "6.5",
    role: "Theme, layout, and many wrapped primitives. App Button/Input/Dialog are Enertiv wrappers, not raw MUI.",
  },
  {
    name: "MUI Icons",
    pkg: "@mui/icons-material",
    version: "6.5",
    role: "Fallback icons after SVGIcon",
  },
  {
    name: "MUI Styles",
    pkg: "@mui/styles",
    version: "6.5",
    role: "Legacy JSS makeStyles still used in some common components",
  },
  {
    name: "MUI X Date Pickers",
    pkg: "@mui/x-date-pickers",
    version: "8",
    role: "Calendars inside Enertiv RangePicker / DatePicker",
  },
  {
    name: "Emotion",
    pkg: "@emotion/react, @emotion/styled",
    version: "11",
    role: "CSS-in-JS for MUI and styled Enertiv components",
  },
  {
    name: "clsx",
    pkg: "clsx",
    version: "2",
    role: "Class name composition on common components",
  },
  {
    name: "AmCharts 5",
    pkg: "@amcharts/amcharts5",
    version: "5.17",
    role: "Only chart library. Components live in components/am5charts/",
  },
  {
    name: "Leaflet",
    pkg: "leaflet, react-leaflet, leaflet.markercluster",
    version: "1.9 / 5 / 1.5",
    role: "MapView and Sandbox map themes",
  },
  {
    name: "Material React Table",
    pkg: "material-react-table",
    version: "3",
    role: "GroupingTable",
  },
  {
    name: "react-virtualized",
    pkg: "react-virtualized",
    version: "9.22",
    role: "Long lists in FilterSelect and MultipleSelect",
  },
  {
    name: "react-grid-layout",
    pkg: "react-grid-layout",
    version: "1.3",
    role: "DashboardGrid",
  },
  {
    name: "Moment",
    pkg: "moment, moment-timezone",
    version: "2.29 / 0.5",
    role: "Date values in pickers and charts",
  },
] as const;

export function OverviewPage() {
  return (
    <Box sx={{ p: 3, maxWidth: 900 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
        System overview
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: 680 }}>
        Principles for Enertiv UI, taken from the production design-system
        docs in enertiv-web — not a parallel brand invented for this catalog.
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 4 }}>
        <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
          Agent reference
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
          Markdown written for coding agents: what to reuse, where tokens
          live, and what not to invent. Humans can ignore it.
        </Typography>
        <Link href={agentGuideUrl} target="_blank" rel="noreferrer">
          docs/agents/enertiv-design-system.md
        </Link>
      </Paper>

      <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 1 }}>
        Stack
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
        UI libraries from production enertiv-web. Do not add Recharts, Chart.js,
        D3, or a second component kit.
      </Typography>
      <Paper variant="outlined" sx={{ mb: 4, overflow: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Library</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Used for</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {STACK.map((row) => (
              <TableRow key={row.pkg}>
                <TableCell sx={{ whiteSpace: "nowrap" }}>{row.name}</TableCell>
                <TableCell sx={{ fontFamily: "monospace", fontSize: 12 }}>
                  {row.pkg}
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>{row.version}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Stack spacing={2.5} sx={{ mb: 4 }}>
        {PRINCIPLES.map((item) => (
          <Box key={item.title}>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 0.5 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.body}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Alert severity="info" sx={{ mb: 2 }}>
        Two token tracks exist in production and both appear in this catalog:
        Sandbox DTCG tokens (Colors, Typography, Spacing) and the runtime MUI
        theme used by most screens (`palette.design_system`, plus live
        `palette.UI`).
      </Alert>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Use the sidebar to inspect production Sandbox groups. The Sandbox
        documents variants. Page structure is copied from live app pages, not
        invented here.
      </Typography>
    </Box>
  );
}

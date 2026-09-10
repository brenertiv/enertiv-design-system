import Alert from "@mui/material/Alert";
import { PageShell } from "../catalog/PageShell";
import { TileGrid } from "../catalog/TileGrid";
import { CatalogTile } from "../catalog/CatalogTile";
import Typography from "@mui/material/Typography";

export function PatternsPage() {
  return (
    <PageShell title="Heavy patterns">
      <Alert severity="info" sx={{ mb: 3 }}>
        Stub only. Do not rewrite material-react-table, react-grid-layout, amCharts, or Leaflet.
        Document with fixtures after enertiv-web is cloned.
      </Alert>
      <TileGrid>
        <CatalogTile
          name="Data table"
          span={2}
          render={() => (
            <Typography color="text.secondary">material-react-table — fixture later</Typography>
          )}
        />
        <CatalogTile
          name="Dashboard widgets"
          span={2}
          render={() => (
            <Typography color="text.secondary">react-grid-layout — fixture later</Typography>
          )}
        />
        <CatalogTile
          name="Chart"
          render={() => <Typography color="text.secondary">amCharts 5 — fixture later</Typography>}
        />
        <CatalogTile
          name="Map"
          render={() => <Typography color="text.secondary">Leaflet — fixture later</Typography>}
        />
      </TileGrid>
    </PageShell>
  );
}

const e=`import Alert from "@mui/material/Alert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CatalogTile } from "../catalog/CatalogTile";
import { PageShell } from "../catalog/PageShell";
import { TileGrid } from "../catalog/TileGrid";

function AppHeader() {
  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ border: 1, borderColor: "divider" }}>
      <Toolbar>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>Portfolio overview</Typography>
        <Button size="small">Export</Button>
      </Toolbar>
    </AppBar>
  );
}

function FilterBar() {
  return (
    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Year</InputLabel>
        <Select label="Year" defaultValue="2026">
          <MenuItem value="2026">2026</MenuItem>
          <MenuItem value="2025">2025</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Utility</InputLabel>
        <Select label="Utility" defaultValue="all">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="electricity">Electricity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export function CompositesPage() {
  return (
    <PageShell title="Composites">
      <TileGrid>
        <CatalogTile name="App header" span={2} render={() => <AppHeader />} />
        <CatalogTile name="Filter bar" span={2} render={() => <FilterBar />} />
        <CatalogTile
          name="Data card"
          render={() => (
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography color="text.secondary" variant="caption">
                  Electricity
                </Typography>
                <Typography variant="h5">128,400 kWh</Typography>
              </CardContent>
            </Card>
          )}
        />
        <CatalogTile
          name="Empty / error"
          states={[
            { id: "empty", label: "Empty", props: { severity: "info" as const, children: "No meters in this building." } },
            { id: "error", label: "Error", props: { severity: "error" as const, children: "Could not load bills." } },
          ]}
          render={(p) => <Alert {...p} />}
        />
      </TileGrid>
    </PageShell>
  );
}
`;export{e as default};

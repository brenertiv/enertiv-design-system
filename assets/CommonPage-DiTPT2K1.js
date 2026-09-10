const n=`import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { CatalogTile } from "../catalog/CatalogTile";
import { PageShell } from "../catalog/PageShell";
import { TileGrid } from "../catalog/TileGrid";

const fieldStates = [
  { id: "default", label: "Default", props: {} },
  { id: "disabled", label: "Disabled", props: { disabled: true } },
  { id: "error", label: "Error", props: { error: true, helperText: "Required" } },
];

function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>This is the production-shaped MUI dialog.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function MenuDemo() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  return (
    <>
      <Button variant="outlined" onClick={(e) => setAnchor(e.currentTarget)}>
        Open menu
      </Button>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        <MenuItem onClick={() => setAnchor(null)}>Portfolio</MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>Building</MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>Export</MenuItem>
      </Menu>
    </>
  );
}

function TabsDemo() {
  const [value, setValue] = useState(0);
  return (
    <Tabs value={value} onChange={(_, v) => setValue(v)}>
      <Tab label="Overview" />
      <Tab label="Usage" />
      <Tab label="Bills" />
    </Tabs>
  );
}

export function CommonPage() {
  return (
    <PageShell title="common">
      <TileGrid>
        <CatalogTile
          name="Button"
          states={[
            { id: "default", label: "Default", props: {} },
            { id: "disabled", label: "Disabled", props: { disabled: true } },
          ]}
          render={(p) => (
            <Button variant="contained" {...p}>
              Save
            </Button>
          )}
        />
        <CatalogTile
          name="TextField"
          states={fieldStates}
          render={(p) => <TextField label="Building name" {...p} />}
        />
        <CatalogTile
          name="Select"
          states={[
            { id: "default", label: "Default", props: {} },
            { id: "disabled", label: "Disabled", props: { disabled: true } },
          ]}
          render={(p) => (
            <FormControl size="small" sx={{ minWidth: 160 }} {...p}>
              <InputLabel>Utility</InputLabel>
              <Select label="Utility" defaultValue="electricity" disabled={Boolean(p.disabled)}>
                <MenuItem value="electricity">Electricity</MenuItem>
                <MenuItem value="gas">Gas</MenuItem>
                <MenuItem value="water">Water</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <CatalogTile
          name="Chip"
          states={[
            { id: "default", label: "Default", props: { color: "default" as const } },
            { id: "success", label: "Success", props: { color: "success" as const } },
            { id: "error", label: "Error", props: { color: "error" as const } },
          ]}
          render={(p) => <Chip label="Open" {...p} />}
        />
        <CatalogTile name="Tabs" span={2} render={() => <TabsDemo />} />
        <CatalogTile name="Dialog" render={() => <DialogDemo />} />
        <CatalogTile
          name="Tooltip"
          render={() => (
            <Tooltip title="Demand peak">
              <Button size="small">Hover</Button>
            </Tooltip>
          )}
        />
        <CatalogTile name="Menu" render={() => <MenuDemo />} />
      </TileGrid>
    </PageShell>
  );
}
`;export{n as default};

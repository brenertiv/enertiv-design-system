import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState, type ReactNode } from "react";

export type CatalogState = {
  id: string;
  label: string;
  props?: Record<string, unknown>;
};

export type CatalogTileProps = {
  name: string;
  span?: 1 | 2;
  states?: CatalogState[];
  render: (stateProps: Record<string, unknown>) => ReactNode;
};

export function CatalogTile({ name, span = 1, states, render }: CatalogTileProps) {
  const hasStates = Boolean(states && states.length > 1);
  const [stateId, setStateId] = useState(states?.[0]?.id ?? "default");
  const current = states?.find((s) => s.id === stateId) ?? states?.[0];

  return (
    <Paper
      variant="outlined"
      sx={{
        gridColumn: span === 2 ? "1 / -1" : "auto",
        display: "flex",
        flexDirection: "column",
        minHeight: 180,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          px: 2,
          py: 1.5,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="subtitle2">{name}</Typography>
        {hasStates ? (
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel id={`${name}-state`}>State</InputLabel>
            <Select
              labelId={`${name}-state`}
              label="State"
              value={stateId}
              onChange={(e) => setStateId(e.target.value)}
            >
              {states!.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : null}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        {render((current?.props ?? {}) as Record<string, unknown>)}
      </Box>
    </Paper>
  );
}

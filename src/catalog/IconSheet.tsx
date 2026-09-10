import Search from "@mui/icons-material/Search";
import * as MuiIcons from "@mui/icons-material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMemo, useState, type ComponentType } from "react";

const CURATED = [
  "Search",
  "Check",
  "Close",
  "Lock",
  "LockOpen",
  "Settings",
  "Notifications",
  "Person",
  "Home",
  "Dashboard",
  "Apartment",
  "Bolt",
  "WaterDrop",
  "LocalFireDepartment",
  "Warning",
  "Error",
  "Info",
  "CheckCircle",
  "Add",
  "Remove",
  "Edit",
  "Delete",
  "FilterList",
  "Tune",
  "CalendarToday",
  "Download",
  "Upload",
  "MoreVert",
  "MoreHoriz",
  "ChevronLeft",
  "ChevronRight",
  "ExpandMore",
  "ArrowBack",
  "Menu",
  "HelpOutline",
  "Visibility",
  "VisibilityOff",
  "ContentCopy",
  "OpenInNew",
  "Map",
  "BarChart",
  "ShowChart",
  "TableChart",
  "Assignment",
  "Build",
  "Sensors",
] as const;

type IconComp = ComponentType<{ fontSize?: "small" | "medium" | "large" }>;

export function IconSheet() {
  const [q, setQ] = useState("");
  const icons = useMemo(() => {
    const query = q.trim().toLowerCase();
    return CURATED.filter((name) => name.toLowerCase().includes(query)).map((name) => {
      const Comp = (MuiIcons as Record<string, IconComp>)[`${name}Outlined`] ??
        (MuiIcons as Record<string, IconComp>)[name];
      return { name, Comp };
    });
  }, [q]);

  return (
    <Box>
      <TextField
        fullWidth
        size="small"
        placeholder="Search icons"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        sx={{ mb: 3, maxWidth: 360 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(104px, 1fr))",
          gap: 1,
        }}
      >
        {icons.map(({ name, Comp }) =>
          Comp ? (
            <Box
              key={name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.75,
                py: 1.5,
                px: 0.5,
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
              }}
            >
              <Comp fontSize="medium" />
              <Typography variant="caption" sx={{ textAlign: "center", wordBreak: "break-word" }}>
                {name}
              </Typography>
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
}

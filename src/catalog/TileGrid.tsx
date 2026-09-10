import Box from "@mui/material/Box";
import type { ReactNode } from "react";

export function TileGrid({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2,
        alignItems: "stretch",
      }}
    >
      {children}
    </Box>
  );
}

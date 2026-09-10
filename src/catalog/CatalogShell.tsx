import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { CatalogNav } from "./CatalogNav";

export function CatalogShell({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CatalogNav />
      <Box component="main" sx={{ flex: 1, minWidth: 0, overflow: "auto" }}>
        {children}
      </Box>
    </Box>
  );
}

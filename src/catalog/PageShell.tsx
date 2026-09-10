import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Container>
  );
}

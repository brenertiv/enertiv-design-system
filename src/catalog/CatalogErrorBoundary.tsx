import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { error: Error | null };

export class CatalogErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <Box sx={{ p: 3, maxWidth: 840 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          This production Sandbox section failed to load. No stand-in
          component was invented.
        </Alert>
        <Typography
          component="pre"
          sx={{ fontSize: 12, whiteSpace: "pre-wrap", fontFamily: "monospace" }}
        >
          {this.state.error.message}
        </Typography>
      </Box>
    );
  }
}

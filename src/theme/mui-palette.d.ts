export {};

declare module "@mui/material/styles" {
  interface Palette {
    blues: Record<string, string>;
    greys: Record<string, string>;
  }
  interface PaletteOptions {
    blues?: Record<string, string>;
    greys?: Record<string, string>;
  }
}

import { createTheme } from "@mui/material/styles";
import {
  BORDER_RADIUS,
  SEMANTIC_DARK,
  SEMANTIC_LIGHT,
  TYPOGRAPHY_TOKENS,
  type ColorMode,
} from "./tokens";

export function createEnertivTheme(mode: ColorMode) {
  const s = mode === "light" ? SEMANTIC_LIGHT : SEMANTIC_DARK;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: s.interactive.brandBg,
        dark: s.interactive.brandBgPressed,
        contrastText: s.interactive.brandText,
      },
      secondary: {
        main: s.interactive.uiBg,
        contrastText: s.interactive.uiText,
      },
      error: {
        main: s.feedback.errorText,
        light: s.feedback.errorBg,
      },
      warning: {
        main: s.feedback.warningText,
        light: s.feedback.warningBg,
      },
      success: {
        main: s.feedback.successText,
        light: s.feedback.successBg,
      },
      info: {
        main: s.feedback.infoText,
        light: s.feedback.infoBg,
      },
      background: {
        default: s.background.canvas,
        paper: s.background.raised,
      },
      text: {
        primary: s.text.primary,
        secondary: s.text.secondary,
        disabled: s.text.disabled,
      },
      divider: s.border.default,
    },
    typography: {
      fontFamily: TYPOGRAPHY_TOKENS.fontFamily.sans,
      fontSize: 14,
      button: {
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: BORDER_RADIUS.sm,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: s.background.canvas,
            color: s.text.primary,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS.sm,
          },
        },
      },
    },
  });
}

/**
 * Enertiv Design System — MUI v5 Theme Override
 *
 * Source of truth: tokens/enertiv.tokens.json (W3C DTCG format for Tokens Studio)
 * This file is the MUI-compatible runtime expression of those tokens.
 *
 * Architecture:
 *  - Token constants live in enertiv-tokens.ts (no MUI dependency — safe for sandbox/tests)
 *  - createEnertivTheme(mode): returns a fully typed MUI theme
 *
 * Usage:
 *   import { createEnertivTheme } from 'libs/theme/enertiv-mui-theme';
 *   const theme = createEnertivTheme('light'); // or 'dark'
 *
 *   // For token values only (no MUI):
 *   import { PRIMITIVES, SEMANTIC_LIGHT } from 'libs/theme/enertiv-tokens';
 */

import {createTheme, Theme, ThemeOptions} from '@mui/material/styles';
import {backdropClasses, Grow, Zoom} from '@mui/material';

// ─── TOKEN CONSTANTS (re-exported from enertiv-tokens.ts) ────────────────────
// Importing from the token-only file keeps this file's side effects isolated.
// Components that only need token values should import from enertiv-tokens.ts.
import {
  PRIMITIVES,
  SPACING_SCALE,
  BORDER_RADIUS,
  TYPOGRAPHY_TOKENS,
  SHADOWS,
  SEMANTIC_LIGHT,
  SEMANTIC_DARK,
} from './enertiv-tokens';

export {
  PRIMITIVES,
  SPACING_SCALE,
  BORDER_RADIUS,
  TYPOGRAPHY_TOKENS,
  SHADOWS,
  SEMANTIC_LIGHT,
  SEMANTIC_DARK,
};

// ─── SAFARI WEBKIT FIX ───────────────────────────────────────────────────────
// Addresses popover rendering regression in Safari 15.4+ (MUI #32304)
const isWebKit154 =
  typeof navigator !== 'undefined' &&
  /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
  /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent);

// ─── THEME FACTORY ───────────────────────────────────────────────────────────

export type EnertivMode = 'light' | 'dark';

/**
 * Creates a fully configured MUI v5 theme using Enertiv's design tokens.
 *
 * @param mode - 'light' (neutral gray UI) or 'dark' (blue-steel navy UI)
 * @returns MUI Theme object ready for ThemeProvider
 *
 * @example
 * // In ThemeWrapper.tsx
 * const theme = createEnertivTheme(mode);
 * <ThemeProvider theme={theme}>...</ThemeProvider>
 */
export const createEnertivTheme = (mode: EnertivMode = 'light'): Theme => {
  const sem = mode === 'light' ? SEMANTIC_LIGHT : SEMANTIC_DARK;

  const themeOptions: ThemeOptions = {
    // ── Palette ──────────────────────────────────────────────────────────────
    palette: {
      mode: mode === 'dark' ? 'dark' : 'light',

      // MUI standard slots — mapped to Enertiv semantic tokens
      text: {
        primary: sem.text.primary,
        secondary: sem.text.secondary,
        disabled: sem.text.disabled,
      },
      background: {
        default: sem.background.canvas,
        paper: sem.background.surface,
      },
      primary: {
        main: PRIMITIVES.brand[400],
        light: PRIMITIVES.brand[300],
        dark: PRIMITIVES.brand[600],
        contrastText: PRIMITIVES.brand[900],
      },
      secondary: {
        main: PRIMITIVES.navy[88],
        light: PRIMITIVES.navy[80],
        dark: PRIMITIVES.navy[100],
        contrastText: PRIMITIVES.navy[8],
      },
      error: {
        main: PRIMITIVES.red[700],
        light: PRIMITIVES.red[400],
        dark: PRIMITIVES.red[900],
        contrastText: PRIMITIVES.red[50],
      },
      warning: {
        main: PRIMITIVES.orange[700],
        light: PRIMITIVES.orange[400],
        dark: PRIMITIVES.orange[600],
        contrastText: PRIMITIVES.orange[50],
      },
      success: {
        main: PRIMITIVES.green[700],
        light: PRIMITIVES.green[400],
        dark: PRIMITIVES.green[600],
        contrastText: PRIMITIVES.green[50],
      },
      common: {
        white: '#FFFFFF',
        black: '#0D0F0F',
      },
      divider: sem.border.default,

      // Legacy palette keys (backward-compat) — retained from original theme
      blues: {
        main: PRIMITIVES.brand[500],
        blue0: '#071C2C',
        blue1: '#003E52',
        blue2: '#00698F',
        blue3: '#008FBE',
        blue4: '#46A8C6',
        blue5: PRIMITIVES.brand[400],
        blue6: PRIMITIVES.brand[300],
        blue7: PRIMITIVES.brand[100],
        blue8: '#BBDCE5',
        blue9: PRIMITIVES.brand[500],
        blue10: PRIMITIVES.indigo[600],
      },
      greys: {
        main: PRIMITIVES.neutral[88],
        light: PRIMITIVES.neutral[56],
        grey0: '#414042',
        grey1: '#58595B',
        grey2: '#6D6E71',
        grey3: '#808285',
        grey4: '#939598',
        grey5: '#A7A9AC',
        grey6: '#BCBEC0',
        grey7: '#D1D3D4',
        grey8: '#E6E7E8',
        grey9: '#F1F2F2',
        grey10: '#707070',
        grey11: '#3E454312',
        grey12: '#F1F2F3',
        grey13: '#F1F2F2',
        newGrey2: '#C1C3C2',
        newGrey3: '#939796',
        newGrey5: '#F0F1F0',
      },
    },

    // ── Spacing ──────────────────────────────────────────────────────────────
    // MUI's default spacing multiplier. Factor of 4 maps directly to our scale.
    spacing: 4,

    // ── Shape ────────────────────────────────────────────────────────────────
    shape: {
      borderRadius: BORDER_RADIUS.sm, // 4px default
    },

    // ── Breakpoints ──────────────────────────────────────────────────────────
    breakpoints: {
      values: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
    },

    // ── Typography ───────────────────────────────────────────────────────────
    typography: {
      fontFamily: TYPOGRAPHY_TOKENS.fontFamily.sans,
      htmlFontSize: 16,
      fontSize: 14, // md = 14px body default

      h1: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize['5xl'],
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.bold,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.tight,
        letterSpacing: '-0.01em',
      },
      h2: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize['4xl'],
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semibold,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.tight,
      },
      h3: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize['3xl'],
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semibold,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.tight,
      },
      h4: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize['2xl'],
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semibold,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
      },
      h5: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.xl,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semibold,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
      },
      h6: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.lg,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semibold,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
      },
      body1: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.md,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
      },
      body2: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
      },
      caption: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
        letterSpacing: '0.02em',
      },
      overline: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      },
      button: {
        fontSize: TYPOGRAPHY_TOKENS.fontSize.md,
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
        lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
        letterSpacing: '0em',
        textTransform: 'none', // No ALL-CAPS — enterprise standard
      },
    },

    // ── Shadows ───────────────────────────────────────────────────────────────
    // MUI expects a 25-element tuple. We fill the standard slots; others are none.
    shadows: [
      SHADOWS.none, // 0 — no elevation
      SHADOWS.sm, // 1 — card
      SHADOWS.md, // 2 — dropdown
      SHADOWS.md, // 3 — popover
      SHADOWS.lg, // 4 — modal
      SHADOWS.xl, // 5 — drawer
      SHADOWS.xl, // 6
      SHADOWS.xl, // 7
      SHADOWS.xl, // 8
      SHADOWS.xl, // 9
      SHADOWS.xl, // 10
      SHADOWS.xl, // 11
      SHADOWS.xl, // 12
      SHADOWS.xl, // 13
      SHADOWS.xl, // 14
      SHADOWS.xl, // 15
      SHADOWS.xl, // 16
      SHADOWS.xl, // 17
      SHADOWS.xl, // 18
      SHADOWS.xl, // 19
      SHADOWS.xl, // 20
      SHADOWS.xl, // 21
      SHADOWS.xl, // 22
      SHADOWS.xl, // 23
      SHADOWS.xl, // 24
    ],

    // ── Component Overrides ───────────────────────────────────────────────────
    components: {
      // Disable ripple globally — enterprise UIs favor crisp state changes
      MuiButtonBase: {
        defaultProps: {disableRipple: true},
      },

      // Buttons: map to semantic interactive tokens
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
            borderRadius: BORDER_RADIUS.sm,
            fontSize: TYPOGRAPHY_TOKENS.fontSize.md,
          },
          containedPrimary: {
            backgroundColor: sem.interactive.brandBg,
            color: sem.interactive.brandText,
            boxShadow: SHADOWS.none,
            '&:hover': {
              backgroundColor: sem.interactive.brandBgHover,
              boxShadow: SHADOWS.none,
            },
            '&:active': {
              backgroundColor: sem.interactive.brandBgPressed,
            },
          },
          containedSecondary: {
            backgroundColor: sem.interactive.uiBg,
            color: sem.interactive.uiText,
            boxShadow: SHADOWS.none,
            '&:hover': {
              backgroundColor: sem.interactive.uiBgHover,
              boxShadow: SHADOWS.none,
            },
          },
          outlined: {
            borderColor: sem.interactive.secondaryBorder,
            color: sem.interactive.secondaryText,
            '&:hover': {
              backgroundColor: sem.background.surface,
              borderColor: sem.interactive.secondaryBorder,
            },
          },
          text: {
            color: sem.interactive.tertiaryText,
            '&:hover': {backgroundColor: sem.background.surface},
          },
        },
      },

      // Inputs: remove default MUI outline, use token borders
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: TYPOGRAPHY_TOKENS.fontSize.md,
            '& .MuiOutlinedInput-notchedOutline': {border: 0},
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {border: 0},
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS.sm,
            backgroundColor: sem.input.bg,
            '& fieldset': {
              borderColor: sem.input.border,
            },
            '&:hover fieldset': {
              borderColor: sem.border.strong,
            },
            '&.Mui-focused fieldset': {
              borderColor: sem.input.borderFocus,
              borderWidth: 2,
            },
            '&.Mui-error fieldset': {
              borderColor: sem.input.borderError,
            },
            '&.Mui-disabled': {
              backgroundColor: sem.input.bgDisabled,
            },
          },
        },
      },

      // Paper: token-aligned surface + shadow
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: sem.background.surface,
            backgroundImage: 'none', // MUI dark mode adds a gradient — remove it
          },
          elevation0: {
            border: `1px solid ${sem.border.default}`,
            boxShadow: SHADOWS.none,
            borderRadius: BORDER_RADIUS.md,
          },
          elevation1: {
            boxShadow: SHADOWS.sm,
            borderRadius: BORDER_RADIUS.md,
          },
          elevation2: {
            boxShadow: SHADOWS.md,
            borderRadius: BORDER_RADIUS.md,
          },
          elevation3: {
            boxShadow: SHADOWS.lg,
            borderRadius: BORDER_RADIUS.md,
          },
        },
      },

      // Cards: elevated surface with card shadow
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: sem.background.surface,
            boxShadow: SHADOWS.sm,
            borderRadius: BORDER_RADIUS.md,
            border: `1px solid ${sem.border.default}`,
          },
        },
      },

      // Divider: use semantic border token
      MuiDivider: {
        styleOverrides: {
          root: {borderColor: sem.border.default},
        },
      },

      // Chips: rounded-sm, semantic chip colors
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS.sm,
            fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
            fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
            height: 24,
          },
        },
      },

      // Tooltips: allow multiline, dark tooltip bg
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
            lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
            whiteSpace: 'pre-wrap',
            borderRadius: BORDER_RADIUS.sm,
          },
        },
      },

      // Icon: override default MUI sizing
      MuiIcon: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            width: 'auto',
            height: 'auto',
            overflow: 'visible',
          },
        },
      },

      // IconButton: remove default hover bg (components handle their own hover)
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {backgroundColor: 'transparent'},
          },
        },
      },

      // Select: fix focus highlight bleed
      MuiSelect: {
        styleOverrides: {
          select: {
            '&:focus': {background: 'transparent !important'},
          },
          icon: {color: 'inherit'},
        },
      },

      // Autocomplete: fix selected state highlight
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '.MuiOutlinedInput-root': {padding: 0},
            '.MuiAutocomplete-option[aria-selected="true"]': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
          },
          listbox: {
            '& .MuiAutocomplete-option[aria-selected="true"], & .MuiAutocomplete-option[aria-selected="true"].Mui-focused':
              {backgroundColor: 'rgba(0, 0, 0, 0.08)'},
          },
        },
      },

      // MenuItem
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: TYPOGRAPHY_TOKENS.fontSize.md,
            '&.Mui-selected, &.Mui-selected&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
            '&.Mui-selected.Mui-focusVisible': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
          },
        },
      },

      // Modal backdrop fix (Safari WebKit 15.4+ regression)
      MuiModal: {
        styleOverrides: {
          root: {
            [`&:has(> div.${backdropClasses.root}[style*="opacity: 0"])`]: {
              pointerEvents: 'none',
            },
          },
        },
      },

      // Popover: constrain max width, Safari transition fix
      MuiPopover: {
        styleOverrides: {
          paper: {maxWidth: 700},
        },
        defaultProps: {
          TransitionComponent: isWebKit154 ? Zoom : Grow,
        },
      },

      // Alert: semantic feedback colors
      MuiAlert: {
        styleOverrides: {
          standardSuccess: {
            color: sem.feedback.successText,
            backgroundColor: sem.feedback.successBg,
            border: `1px solid ${sem.feedback.successBorder}`,
          },
          standardError: {
            color: sem.feedback.errorText,
            backgroundColor: sem.feedback.errorBg,
            border: `1px solid ${sem.feedback.errorBorder}`,
          },
          standardWarning: {
            color: sem.feedback.warningText,
            backgroundColor: sem.feedback.warningBg,
            border: `1px solid ${sem.feedback.warningBorder}`,
          },
          standardInfo: {
            color: sem.feedback.infoText,
            backgroundColor: sem.feedback.infoBg,
            border: `1px solid ${sem.feedback.infoBorder}`,
          },
        },
      },

      // Table
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: sem.table.headerBg,
            '& .MuiTableCell-head': {
              color: sem.table.headerText,
              fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
              fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
              borderBottom: `1px solid ${sem.table.headerBorder}`,
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
            color: sem.table.cellText,
            borderBottom: `1px solid ${sem.table.cellBorder}`,
            backgroundColor: sem.table.cellBg,
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};

// ─── DEFAULT EXPORT ───────────────────────────────────────────────────────────
// Convenience: pre-built light and dark theme instances
export const enertivLightTheme = createEnertivTheme('light');
export const enertivDarkTheme = createEnertivTheme('dark');

export default createEnertivTheme;

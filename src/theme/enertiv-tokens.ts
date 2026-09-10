/**
 * Enertiv Design System — Raw Token Constants
 *
 * This file is intentionally free of MUI imports and module-level side effects.
 * Import from here when you only need token values (e.g. sandbox reference pages,
 * Storybook, tests).
 *
 * For a fully-configured MUI theme, import from 'libs/theme/enertiv-mui-theme'.
 *
 * Source of truth: tokens/enertiv.tokens.json (W3C DTCG format for Tokens Studio)
 */

// ─── PRIMITIVE TOKENS ────────────────────────────────────────────────────────

export const PRIMITIVES = {
  // Neutral gray scale (light mode base)
  neutral: {
    0: '#FFFFFF',
    2: '#FAFAFA',
    4: '#F7F8F7',
    6: '#F2F2F2',
    8: '#F0F1F0',
    10: '#EAEAEA',
    12: '#E7E8E8',
    16: '#E0E1E1',
    24: '#D1D3D2',
    32: '#C1C3C2',
    40: '#B2B5B4',
    48: '#A3A6A5',
    56: '#939796',
    64: '#848887',
    72: '#747977',
    80: '#656A69',
    88: '#3E4543',
    92: '#212524',
    100: '#0D0F0F',
  },

  // Blue-steel scale (dark mode base)
  navy: {
    0: '#FFFFFF',
    8: '#ECEFF1',
    12: '#E3E6EA',
    16: '#D9DEE3',
    20: '#D0D6DC',
    24: '#C6CED5',
    32: '#B3BDC7',
    56: '#7B8C9D',
    64: '#687B8F',
    72: '#556B81',
    80: '#425B73',
    88: '#2F4A65',
    92: '#26425E',
    96: '#1C3A57',
    100: '#133150',
  },

  // Enertiv signature sky-blue — primary action color
  brand: {
    25: '#F0FBFF',
    50: '#E1F5FB',
    100: '#C2DFEE',
    200: '#86D2EF',
    300: '#5CC0E8',
    400: '#40B4E5', // Primary brand blue — default CTA
    500: '#2EA6E1',
    600: '#2899D3',
    700: '#2186C0',
    800: '#1C4F65',
    900: '#133240',
  },

  // Muted blue-gray action scale
  action: {
    2: '#F5F7F8',
    32: '#B0C5CD',
    48: '#86A6B3',
    64: '#5E7883',
    80: '#37464C',
  },

  // Feedback scales
  red: {
    50: '#FFEAF0',
    100: '#FFCCD6',
    200: '#F7989E',
    400: '#FF4457',
    500: '#FF253C',
    600: '#F6183C',
    700: '#E40235',
    800: '#D7002D',
    900: '#C0001E',
  },

  green: {
    50: '#E5F6E5',
    100: '#C1E6BE',
    200: '#98D694',
    400: '#45B944',
    500: '#02AD18',
    600: '#019E09',
    700: '#008C01',
  },

  orange: {
    50: '#FFF4E0',
    100: '#FFE0B3',
    200: '#FFCC80',
    400: '#FEA826',
    600: '#EF6D01',
    700: '#F67C01',
  },

  yellow: {
    4: '#FEFCF5',
    50: '#FDFBE5',
    100: '#FBF4BE',
    200: '#F8ED93',
    700: '#EDB210',
    800: '#EC9908',
    900: '#E76F00',
  },

  // AI and focus accent (indigo/violet)
  indigo: {
    50: '#E7E9FC',
    100: '#C2C7F6',
    200: '#98A2F0',
    300: '#697FEA',
    400: '#4061E5',
    500: '#0044DE',
    600: '#6C5AEF', // Focus ring / template accent
    700: '#0131C7',
    800: '#0025BD', // AI feature color (top nav)
    900: '#000CA5',
  },

  // Data visualization — utility type colors
  utility: {
    electricity: '#FF6BD6',
    electricitySupply: '#F21BB6',
    electricityDelivery: '#AC017C',
    water: '#3FB4E5',
    gas: '#00C371',
    gasSupply: '#02A460',
    gasDelivery: '#02854E',
    steam: '#FF9900',
    sanitation: '#B8B105',
  },

  utilityDark: {
    electricity: '#D15CC5',
    electricitySupply: '#C01FB0',
    electricityDelivery: '#B700A5',
    water: '#5CABD2',
    gas: '#5CBE7C',
    gasSupply: '#1FA64B',
    gasDelivery: '#009A33',
    steam: '#FF993A',
    sanitation: '#E8C71F',
  },

  // Chart sequential series colors (11 stops)
  chart: {
    1: '#FF6BD6',
    2: '#A73E92',
    3: '#613360',
    4: '#36CFAB',
    5: '#41FCCB',
    6: '#24F163',
    7: '#1FBE0D',
    8: '#3FB4E5',
    9: '#939598',
    10: '#58595B',
    11: '#061C2C',
  },

  // A11y chart colors — WCAG-compliant, light + dark variants per color.
  // First introduced for multi-year portfolio comparison.
  chartA11y: {
    blue: {light: '#0D6EA6', dark: '#40B4E5'},
    magenta: {light: '#A8007A', dark: '#FF6BD6'},
    purple: {light: '#4A165A', dark: '#C078D4'},
    teal: {light: '#009982', dark: '#2EC4A8'},
    green: {light: '#2D7200', dark: '#4DB832'},
  },
} as const;

// ─── SPACING SCALE ───────────────────────────────────────────────────────────
// 4px base unit. Values in px as numbers.
export const SPACING_SCALE = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

// ─── BORDER RADIUS ───────────────────────────────────────────────────────────
export const BORDER_RADIUS = {
  none: 0,
  xs: 2,
  sm: 4, // Default — buttons, inputs, chips
  md: 8, // Cards, modals, panels
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

// ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────
export const TYPOGRAPHY_TOKENS = {
  fontFamily: {
    sans: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  },
  fontSize: {
    xs: '0.6875rem', // 11px — timestamp, helper, badge
    sm: '0.75rem', // 12px — table secondary, footnote
    md: '0.875rem', // 14px — body default
    lg: '1rem', // 16px — section label, form label
    xl: '1.125rem', // 18px — card heading
    '2xl': '1.25rem', // 20px — page heading sm
    '3xl': '1.5rem', // 24px — page heading
    '4xl': '1.75rem', // 28px
    '5xl': '2rem', // 32px — hero metric / KPI display
  },
  fontWeight: {
    regular: 400,
    medium: 500, // Tab labels, button text
    semibold: 600, // Card headings, form labels
    bold: 700, // KPI values, alert headings
  },
  lineHeight: {
    tight: 1.2, // Headings, KPI numbers
    normal: 1.4, // Body text
    relaxed: 1.6, // Long-form help text
  },
} as const;

// ─── ELEVATION / SHADOW ──────────────────────────────────────────────────────
// rgba tint uses brand navy base (43, 61, 79 ≈ #2B3D4F)
export const SHADOWS = {
  none: 'none',
  sm: '0 1px 3px rgba(43, 61, 79, 0.08), 0 1px 2px rgba(43, 61, 79, 0.06)',
  md: '0 2px 8px rgba(43, 61, 79, 0.10), 0 1px 3px rgba(43, 61, 79, 0.08)',
  lg: '0 4px 16px rgba(43, 61, 79, 0.12), 0 2px 6px rgba(43, 61, 79, 0.08)',
  xl: '0 8px 24px rgba(43, 61, 79, 0.16), 0 4px 10px rgba(43, 61, 79, 0.10)',
  inner: 'inset 0 1px 3px rgba(43, 61, 79, 0.10)',
} as const;

// ─── SEMANTIC PALETTES ───────────────────────────────────────────────────────
// Resolved color values per mode. These map 1:1 to semantic/* token paths.

const {neutral, navy, brand, action, red, green, orange, indigo} = PRIMITIVES;

export const SEMANTIC_LIGHT = {
  background: {
    canvas: neutral[0],
    surface: neutral[4],
    raised: neutral[0],
    sunken: neutral[6],
    muted: neutral[4],
    overlay: 'rgba(13, 15, 15, 0.48)',
  },
  border: {
    default: neutral[16],
    subtle: neutral[10],
    strong: neutral[32],
    focus: brand[400],
    interactive: neutral[24],
  },
  text: {
    primary: neutral[88],
    secondary: neutral[64],
    tertiary: neutral[56],
    disabled: neutral[40],
    inverse: neutral[0],
    link: brand[500],
    onBrand: brand[900],
  },
  icon: {
    default: neutral[80],
    subtle: neutral[56],
    inverse: neutral[0],
    onBrand: brand[900],
    ai: indigo[800],
  },
  interactive: {
    brandBg: brand[400],
    brandBgHover: brand[500],
    brandBgPressed: brand[600],
    brandText: brand[900],
    uiBg: action[80],
    uiBgHover: navy[88],
    uiText: action[2],
    secondaryBg: neutral[0],
    secondaryBorder: action[48],
    secondaryText: action[80],
    tertiaryBg: neutral[4],
    tertiaryText: action[80],
    destructiveBg: red[700],
    destructiveText: red[50],
  },
  feedback: {
    errorBg: red[50],
    errorBorder: red[200],
    errorText: red[700],
    errorIcon: red[700],
    warningBg: orange[50],
    warningBorder: orange[200],
    warningText: orange[700],
    warningIcon: orange[600],
    successBg: green[50],
    successBorder: green[200],
    successText: green[700],
    successIcon: green[700],
    infoBg: brand[50],
    infoBorder: brand[200],
    infoText: brand[800],
    infoIcon: brand[700],
  },
  nav: {
    containerBg: neutral[2],
    containerBorder: neutral[12],
    divider: neutral[16],
    itemDefaultBg: neutral[2],
    itemHoverBg: neutral[10],
    itemActiveBg: neutral[12],
    itemText: neutral[88],
    itemIcon: neutral[80],
  },
  topnav: {
    bg: neutral[0],
    border: neutral[12],
    divider: neutral[16],
    userAvatarBg: neutral[10],
    userIcon: neutral[80],
  },
  table: {
    headerBg: neutral[4],
    headerBorder: neutral[32],
    headerText: neutral[80],
    cellBg: neutral[0],
    cellBorder: neutral[16],
    cellText: neutral[80],
    cellTextSub: neutral[64],
    cellTextNa: neutral[48],
    footerBg: neutral[4],
    footerBorder: neutral[32],
  },
  input: {
    label: neutral[80],
    placeholder: neutral[56],
    text: neutral[88],
    bg: neutral[0],
    border: neutral[24],
    bgHover: neutral[6],
    borderFocus: brand[400],
    bgDisabled: neutral[8],
    textDisabled: neutral[48],
    borderError: red[700],
    requiredAsterisk: red[700],
  },
  chip: {
    defaultBg: neutral[4],
    defaultText: neutral[72],
    successBg: green[50],
    successText: green[700],
    warningBg: orange[50],
    warningText: orange[700],
    errorBg: red[50],
    errorText: red[700],
  },
  charts: {
    comparison: {
      blue: '#0D6EA6',
      magenta: '#A8007A',
      purple: '#4A165A',
      teal: '#009982',
      green: '#2D7200',
    },
  },
} as const;

export const SEMANTIC_DARK = {
  background: {
    canvas: navy[12],
    surface: navy[8],
    raised: navy[8],
    sunken: navy[100],
    muted: navy[16],
    overlay: 'rgba(19, 49, 80, 0.72)',
  },
  border: {
    default: navy[24],
    subtle: navy[20],
    strong: navy[32],
    focus: brand[300],
    interactive: navy[32],
  },
  text: {
    primary: navy[96],
    secondary: navy[80],
    tertiary: navy[72],
    disabled: navy[56],
    inverse: navy[0],
    link: brand[300],
    onBrand: navy[100],
  },
  icon: {
    default: navy[20],
    subtle: navy[32],
    inverse: navy[96],
    onBrand: navy[0],
    ai: indigo[600],
  },
  interactive: {
    brandBg: brand[400],
    brandBgHover: brand[300],
    brandBgPressed: brand[500],
    brandText: navy[100],
    uiBg: navy[88],
    uiBgHover: navy[92],
    uiText: navy[8],
    secondaryBg: navy[8],
    secondaryBorder: navy[56],
    secondaryText: navy[96],
    tertiaryBg: navy[8],
    tertiaryText: navy[96],
    destructiveBg: '#C81F39',
    destructiveText: '#FCF5F6',
  },
  feedback: {
    errorBg: '#F7E0E4',
    errorBorder: '#CD334B',
    errorText: '#CD334B',
    errorIcon: '#C30A27',
    warningBg: '#FFF1E4',
    warningBorder: '#FFA24C',
    warningText: '#FF8B1F',
    warningIcon: '#FF9028',
    successBg: '#E0F3E7',
    successBorder: '#33AE5C',
    successText: '#1FA64B',
    successIcon: '#0A9E3B',
    infoBg: '#E0EFF7',
    infoBorder: '#3395C7',
    infoText: navy[96],
    infoIcon: navy[72],
  },
  nav: {
    containerBg: navy[100],
    containerBorder: navy[100],
    divider: navy[88],
    itemDefaultBg: navy[100],
    itemHoverBg: navy[92],
    itemActiveBg: navy[96],
    itemText: navy[20],
    itemIcon: navy[20],
  },
  topnav: {
    bg: navy[12],
    border: navy[24],
    divider: navy[20],
    userAvatarBg: navy[8],
    userIcon: navy[88],
  },
  table: {
    headerBg: navy[8],
    headerBorder: navy[32],
    headerText: navy[88],
    cellBg: navy[12],
    cellBorder: navy[24],
    cellText: navy[96],
    cellTextSub: navy[72],
    cellTextNa: navy[56],
    footerBg: navy[8],
    footerBorder: navy[32],
  },
  input: {
    label: navy[88],
    placeholder: navy[56],
    text: navy[96],
    bg: navy[8],
    border: navy[56],
    bgHover: navy[12],
    borderFocus: brand[300],
    bgDisabled: navy[16],
    textDisabled: navy[56],
    borderError: '#CD334B',
    requiredAsterisk: '#CD334B',
  },
  chip: {
    defaultBg: navy[12],
    defaultText: navy[96],
    successBg: '#E0F3E7',
    successText: '#0A9E3B',
    warningBg: '#FFF1E4',
    warningText: '#FF9028',
    errorBg: '#F7E0E4',
    errorText: '#C30A27',
  },
  charts: {
    comparison: {
      blue: '#40B4E5',
      magenta: '#FF6BD6',
      purple: '#C078D4',
      teal: '#2EC4A8',
      green: '#4DB832',
    },
  },
} as const;

import { createTheme } from '@mui/material';
import { ColorRange, ThemedColors } from './colors';

declare module '@mui/material/styles' {
  interface CustomTheme {
    borderRadius: { main: string };
    appColors: ColorRange;
    isDarkMode: boolean;
    overrides: {
      MuiCollapse: any;
      MuiAccordionDetails: any;
      MuiAccordionSummary: any;
      MuiTextField: any;
      MuiAccordion: any;
      MuiButtonBase: any;
      MuiButton: any;
      MuiTab: any;
      MuiModal: any;
    };
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    rainbow: Palette['primary'];
    loading: Palette['primary'];
  }

  interface PaletteOptions {
    rainbow: PaletteOptions['primary'];
    loading: PaletteOptions['primary'];
  }
}

export const GlobalCss = {
  styleOverrides: {
    'html, body, body > #root': {
      height: '100%',
      padding: 0,
      margin: 0,
    },
    '*': {
      boxSizing: 'border-box',
    },
    '.web3modal-modal-lightbox': { zIndex: '9999 !important' }, // On top of all other modals
  },
};

const borderRadius = { main: '8px' };

const getHeadingStyle = (fontSizeRem: number) => ({
  fontSize: `${fontSizeRem}rem`,
});

export const defaultTheme = createTheme({
  borderRadius,
  appColors: ThemedColors({ darkMode: true }),
  isDarkMode: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    fontFamily: "'IBM Plex Sans', Helvetica, Arial, sans-serif",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      ...getHeadingStyle(4),
    },
    h2: {
      ...getHeadingStyle(3),
    },
    h3: {
      ...getHeadingStyle(2.25),
    },
    h4: {
      ...getHeadingStyle(1.5),
    },
    h5: {
      ...getHeadingStyle(1.125),
    },
    h6: {
      ...getHeadingStyle(0.75),
    },
  },
  components: {
    MuiCssBaseline: GlobalCss,
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '-0.02em',
        },
      },
    },
  },
  overrides: {
    MuiCollapse: {
      borderBottomLeftRadius: borderRadius.main,
      borderBottomRightRadius: borderRadius.main,
    },
    MuiAccordionDetails: {
      borderRadius: borderRadius.main,
      borderTop: '0px',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
    },
    MuiAccordionSummary: {
      borderRadius: borderRadius.main,
      borderBottomLeftRadius: borderRadius.main,
      borderBottomRightRadius: borderRadius.main,
      borderBottomWidth: '1px',
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
    },
    MuiTextField: {},
    MuiAccordion: {},
    MuiButtonBase: {},
    MuiButton: {
      borderRadius: borderRadius.main,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    MuiTab: {
      textTransform: 'capitalize',
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    MuiModal: {
      backdropFilter: 'blur(4px)',
    },
  },
});

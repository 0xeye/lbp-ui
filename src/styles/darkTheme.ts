import { createTheme, CSSInterpolation } from '@mui/material';
import { green } from '@mui/material/colors';
import { ThemedColors } from './colors';
import { defaultTheme, GlobalCss } from './defaultTheme';

const appColors = ThemedColors({ darkMode: true });

export const darkTheme = createTheme({
  ...defaultTheme,
  appColors,
  isDarkMode: true,
  palette: {
    background: {
      default: appColors.slate[900],
      paper: appColors.slate[800],
    },
    text: {
      primary: appColors.white as string,
      secondary: appColors.slate[300],
    },
    primary: {
      main: appColors.purple[500],
    },
    secondary: {
      main: appColors.slate[700],
    },
    success: {
      main: green[400],
    },
    rainbow: {
      main: appColors.rainbow as string,
      dark: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ' + appColors.rainbow,
    },
    loading: {
      main: appColors.slate[700],
    },
    info: {
      main: appColors.sky[500],
    },
    error: {
      main: appColors.red[500],
    },
    action: {
      disabled: appColors.slate[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...GlobalCss.styleOverrides,
        a: {
          color: appColors.purple[500],
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiCollapse,
          borderColor: appColors.slate[700],
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiAccordionDetails,
          backgroundColor: appColors.slate[800],
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiAccordionSummary,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          caretColor: appColors.slate[300],

          '& :-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 30px ${appColors.slate[800]} inset`,
            WebkitTextFillColor: appColors.gray[100],
            caretColor: appColors.slate[300],
          } as CSSInterpolation,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiTextField,
          color: appColors.slate[400],
          '& label.Mui-focused': {
            color: appColors.violet[500],
          },

          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: appColors.slate[400],
            },
            '&:hover fieldset': {
              borderColor: appColors.violet[500],
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiAccordion,
          borderColor: appColors.slate[700],
          ':first-of-type': {
            boxShadow: `0 0 0 1px ${appColors.slate[700]} !important`,
            borderRadius: 8,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiButtonBase,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
        root: {
          ...defaultTheme.overrides.MuiButton,
          '&.Mui-disabled': {
            border: 'none',
            background: appColors.slate[600],
            color: appColors.slate[400],
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiTab,
          color: appColors.white as string,
          '&:hover': {
            color: appColors.slate[400],
          },
          '&.Mui-selected': {
            color: appColors.white,
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          ...defaultTheme.overrides.MuiModal,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: appColors.slate[800],
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: appColors.slate[900],
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: appColors.violet[500],
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: appColors.amber[400],
          '.MuiAlert-standardWarning': {},
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: appColors.slate[700],
        },
      },
    },
  },
});

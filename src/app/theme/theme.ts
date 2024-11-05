// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
  NexCardGradient1_1: Palette['primary'];
  NexCardGradient1_2: Palette['primary'];
  NexGradientBorder1_1: Palette['primary'];
  NexGradientBorder1_2: Palette['primary'];
  NexArbCardGradient1: Palette['primary'];
  NexArbCardGradient2: Palette['primary'];
  NexCardGradient2_1: Palette['primary'];
  NexCardGradient2_2: Palette['primary'];
  NexCardGradient3_1: Palette['primary'];
  NexCardGradient3_2: Palette['primary'];
  NexOpaqueDot: Palette['primary'];
}

interface PaletteOptions {
    NexCardGradient1_1: PaletteOptions['primary'];
  NexCardGradient1_2: PaletteOptions['primary'];
  NexGradientBorder1_1: PaletteOptions['primary'];
  NexGradientBorder1_2: PaletteOptions['primary'];
  NexArbCardGradient1: PaletteOptions['primary'];
  NexArbCardGradient2: PaletteOptions['primary'];
  NexCardGradient2_1: PaletteOptions['primary'];
  NexCardGradient2_2: PaletteOptions['primary'];
  NexCardGradient3_1: PaletteOptions['primary'];
  NexCardGradient3_2: PaletteOptions['primary'];
  NexOpaqueDot: PaletteOptions['primary'];
  }

}

export interface Theme {
    palette: {
        NexCardGradient1_1: { primary: string };
  NexCardGradient1_2: { primary: string };
  NexGradientBorder1_1: { primary: string };
  NexGradientBorder1_2: { primary: string };
  NexArbCardGradient1: { primary: string };
  NexArbCardGradient2: { primary: string };
  NexCardGradient2_1: { primary: string };
  NexCardGradient2_2: { primary: string };
  NexCardGradient3_1: { primary: string };
  NexCardGradient3_2: { primary: string };
  NexOpaqueDot: { primary: string };
    }
}

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
    primary: {
      main: "#1976D2",
      dark: "#1565C0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      contrastText: "#FFFFFF",
      main: "#9C27B0",
    },
    error: {
      contrastText: "#FFFFFF",
      main: "#D32F2F",
    },
    warning: {
      contrastText: "#FFFFFF",
      main: "#EF6C00",
      dark: "#E65100",
    },
    info: {
      contrastText: "#FFFFFF",
      main: "#FFFFFF",
    },
    success: {
      contrastText: "#FFFFFF",
      main: "#2E7D32",
    },
    background: {
      default: "#121212",
      paper: "#2C2C2C"
    },
    NexCardGradient1_1: {main: "#20544B"},
    NexCardGradient1_2: {main: "#389685"},
    NexGradientBorder1_1: {main: "#2F5844"},
    NexGradientBorder1_2: {main: "#FFFFFF"},
    NexArbCardGradient1: {main: "rgba(38, 137, 198, 0)"},
    NexArbCardGradient2: {main: "#121318"},
    NexCardGradient2_1: {main: "#1E1E1E"},
    NexCardGradient2_2: {main: "#252525"},
    NexCardGradient3_1: {main: "rgba(24, 44, 40, 0)"},
    NexCardGradient3_2: {main: "#121318"},
    NexOpaqueDot: {main: "rgba(217, 217, 217, 0.2)"},
    action: {
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    },
    h6: {
        fontWeight: 500
      }
  },
  shape: {
    borderRadius: 16
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {  
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundImage: `linear-gradient(64.63deg, #20544B 0%, #389685 100%)`,
            fontWeight: 500,
            fontSize: "1.2rem",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 1px",
            textTransform: "none",
            outline: "none",
            border: "none",
            borderRadius: "0.8rem"
          }
        }
      ],
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(64.63deg, #20544B 0%, #389685 100%)`,
          color: "#F2F2F2",
          fontWeight: 500,
          fontSize: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 1px",
          outline: "none",
          border: "none",
          borderRadius: "0.8rem",
          textTransform: "none",
        },


      }
    },
    MuiContainer: {
        styleOverrides:{
            root:{
                position: 'relative',
            }
        }
    },
    MuiCssBaseline: {
        styleOverrides: `
        *::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }
      `,
      },
      MuiChip: {
        styleOverrides: {
          root: {
            // Base style for the chip
            backgroundImage: `linear-gradient(64.63deg, #20544B 0%, #389685 100%)`,
            color: "#F2F2F2",
            fontWeight: 600,
          },
          label: {
            // Customize the label inside the chip
            fontSize: '0.875rem',
            fontWeight: 600
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
            root: {
                paddingLeft: '.75rem',
                paddingRight: '.75rem',
                paddingBottom: '.25rem',
                paddingTop: '.25rem',
                borderRadius: '2rem'
            },
        }
      }
  },
  
});

export default theme;

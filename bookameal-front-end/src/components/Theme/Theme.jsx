import { createTheme } from "@mui/material/styles";

// Define light and dark themes with customizations
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "10px 20px",
          backgroundColor: "red",
          borderRadius: "50px",
          color: "white",
          "&:hover": {
            backgroundColor: "darkred",
          },
          position: "absolute",
          right: "30px",
          top: "30px",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#303030",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "10px 20px",
          backgroundColor: "red",
          borderRadius: "50px",
          color: "white",
          "&:hover": {
            backgroundColor: "darkred",
          },
          position: "absolute",
          right: "30px",
          top: "30px",
        },
      },
    },
  },
});

// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

// Light Theme (no changes, just for reference)
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#d4af37', // Gold
    },
    secondary: {
      main: '#333333', // Dark gray
    },
    background: {
      default: '#f4f4f4', // Soft gray background
    },
    text: {
      primary: '#333333', // Dark text for light theme
    },
  },
  typography: {
    fontFamily: 'Roboto, "Segoe UI", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      fontFamily: 'Open Sans, "Segoe UI", "Arial", sans-serif',
      color: '#d4af37', // Gold headers
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      fontFamily: 'Open Sans, "Segoe UI", "Arial", sans-serif',
      color: '#d4af37',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          backgroundColor: '#d4af37',
          '&:hover': {
            backgroundColor: '#c49c35',
          },
        },
      },
    },
  },
});

// Dark Theme without gradient in background
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#d4af37', // Gold
    },
    secondary: {
      main: '#ffffff', // White text for contrast
    },
    background: {
      default: '#1a1a1a', // Solid dark color for default background
      paper: '#1a1a1a', // Dark gray paper for cards
    },
    text: {
      primary: '#ffffff', // White text for dark mode
      secondary: '#d4af37', // Gold text for emphasis
    },
  },
  typography: {
    fontFamily: 'Roboto, "Segoe UI", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      fontFamily: 'Open Sans, "Segoe UI", "Arial", sans-serif',
      color: '#d4af37', // Gold headers
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      fontFamily: 'Open Sans, "Segoe UI", "Arial", sans-serif',
      color: '#d4af37',
    },
    body1: {
      fontSize: '1rem',
      color: '#ffffff', // White text for dark mode
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          backgroundColor: '#d4af37', // Gold button background
          '&:hover': {
            backgroundColor: '#c49c35', // Slightly darker gold on hover
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };

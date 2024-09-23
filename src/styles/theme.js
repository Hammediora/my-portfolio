// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

// Helper function for animated gradient background
const animatedGradient = (mode) => ({
  background: mode === 'dark'
    ? 'linear-gradient(270deg, #333, #111, #333)' // Dark mode: darker gradient
    : 'linear-gradient(270deg, #e0eafc, #f4f7fa, #dce5f0)', // Light mode: lighter gradient
  backgroundSize: '400% 400%',
  animation: 'gradientAnimation 15s ease infinite',
  '@keyframes gradientAnimation': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
});

// Light Theme
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
      paper: '#ffffff',  // White for cards
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
    MuiPaper: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          padding: '16px', // Default padding for Paper components
          borderRadius: '12px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50px',
            right: '-100px',
            width: '200px',
            height: '200px',
            background: 'rgba(212, 175, 55, 0.4)', // Light gold floating shape
            borderRadius: '50%',
            zIndex: -1,
            animation: 'backgroundAnimation 6s ease-in-out infinite',
          },
          '@keyframes backgroundAnimation': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
            '100%': { transform: 'scale(1)' },
          },
        },
      },
    },
  },
});

// Dark Theme with the same animated background
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
      paper: '#4e4b43', // Dark gray paper for cards
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
    MuiPaper: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          padding: '16px', // Default padding for Paper components
          borderRadius: '12px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50px',
            right: '-100px',
            width: '200px',
            height: '200px',
            background: 'rgba(212, 175, 55, 0.4)', // Light gold floating shape for dark mode
            borderRadius: '50%',
            zIndex: -1,
            animation: 'backgroundAnimation 6s ease-in-out infinite',
          },
          '@keyframes backgroundAnimation': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
            '100%': { transform: 'scale(1)' },
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme, animatedGradient };

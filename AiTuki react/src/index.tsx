import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './Header';
import LandingContent from './LandingContent';
import BottomNavigation from './BottomNavigation';

// Create a custom theme to match the Figma design
const theme = createTheme({
  palette: {
    primary: {
      main: '#69f0f0',
      light: '#98ffff',
    },
    warning: {
      main: '#ef6c00',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#1f5661',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 32,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          <LandingContent />
        </Box>
        <BottomNavigation />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

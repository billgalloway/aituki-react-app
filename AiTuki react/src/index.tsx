import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import LandingContent from './LandingContent';
import GoalsContent from './GoalsContent';
import DataContent from './DataContent';
import HealthContent from './HealthContent';
import TwinContent from './TwinContent';
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

const pathForTab: Record<string, string> = {
  home: '/',
  target: '/goals',
  data: '/data',
  measure: '/health',
  tuki: '/twin'
};

const tabForPath = (pathname: string): string => {
  if (pathname.startsWith('/goals')) return 'target';
  if (pathname.startsWith('/data')) return 'data';
  if (pathname.startsWith('/health')) return 'measure';
  if (pathname.startsWith('/twin')) return 'tuki';
  return 'home';
};

const AppShell = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = useMemo(() => tabForPath(location.pathname), [location.pathname]);

  const handleTabChange = (tab: string) => {
    const path = pathForTab[tab] ?? '/';
    if (location.pathname !== path) navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" element={<LandingContent />} />
            <Route path="/goals" element={<GoalsContent />} />
            <Route path="/data" element={<DataContent />} />
            <Route path="/health" element={<HealthContent />} />
            <Route path="/twin" element={<TwinContent />} />
          </Routes>
        </Box>
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </Box>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <AppShell />
    </HashRouter>
  </React.StrictMode>
);

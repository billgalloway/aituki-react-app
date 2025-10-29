import React from 'react';
import {
  Box,
  Paper
} from '@mui/material';
import IconLibrary from './IconLibrary';


const BottomNavigation: React.FC = () => {
  const navigationItems = [
    {
      name: 'home',
      icon: 'workbench',
      isActive: true
    },
    {
      name: 'target',
      icon: 'trace',
      isActive: false
    },
    {
      name: 'data',
      icon: 'watch',
      isActive: false
    },
    {
      name: 'measure',
      icon: 'heartRate',
      isActive: false
    },
    {
      name: 'tuki',
      icon: 'jump',
      isActive: false
    }
  ];

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#69f0f0',
        borderRadius: '32px 32px 0 0',
        padding: '16px 24px 32px 24px',
        boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.15), 0px 0px 4px 0px rgba(0,0,0,0.25)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {navigationItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: item.isActive ? '#27cccc' : 'transparent',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: item.isActive ? '#27cccc' : 'rgba(39, 204, 204, 0.1)'
            }
          }}
        >
          <IconLibrary 
            iconName={item.icon === 'workbench' ? 'home' : 
                     item.icon === 'trace' ? 'target' : 
                     item.icon === 'watch' ? 'data' : 
                     item.icon === 'heartRate' ? 'heart' : 
                     item.icon === 'jump' ? 'person' : 'home'} 
            size={24} 
            color="#1f5661" 
          />
        </Box>
      ))}
    </Paper>
  );
};

export default BottomNavigation;

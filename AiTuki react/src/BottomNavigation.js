import React from 'react';
import {
  Box,
  Paper
} from '@mui/material';
import IconLibrary from './IconLibrary';


const BottomNavigation = ({ activeTab, onTabChange }) => {
  const navigationItems = [
    {
      name: 'home',
      icon: 'workbench',
      iconName: 'home'
    },
    {
      name: 'target',
      icon: 'trace',
      iconName: 'target'
    },
    {
      name: 'data',
      icon: 'watch',
      iconName: 'data'
    },
    {
      name: 'measure',
      icon: 'heartRate',
      iconName: 'heart'
    },
    {
      name: 'tuki',
      icon: 'jump',
      iconName: 'person'
    }
  ];

  const handleTabClick = (tabName) => {
    if (onTabChange && typeof onTabChange === 'function') {
      onTabChange(tabName);
    }
  };

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
      {navigationItems.map((item, index) => {
        const isActive = activeTab === item.name;
        return (
          <Box
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleTabClick(item.name);
            }}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: isActive ? '#27cccc' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              pointerEvents: 'auto',
              minWidth: '48px',
              minHeight: '48px',
              '&:hover': {
                backgroundColor: isActive ? '#27cccc' : 'rgba(39, 204, 204, 0.1)'
              },
              '&:active': {
                transform: 'scale(0.95)'
              }
            }}
          >
            <IconLibrary 
              iconName={item.iconName} 
              size={24} 
              color="#1f5661"
              sx={{ pointerEvents: 'none' }}
            />
          </Box>
        );
      })}
    </Paper>
  );
};

export default BottomNavigation;

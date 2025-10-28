import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import IconLibrary from './IconLibrary';

const IconShowcase = () => {
  // Sample of available icons from the Figma icon library
  const iconCategories = [
    {
      title: 'Navigation & UI',
      icons: ['home', 'menu', 'search', 'user', 'settings', 'notification', 'back', 'forward']
    },
    {
      title: 'Health & Wellness',
      icons: ['heart', 'star', 'target', 'data', 'chart', 'calendar', 'clock', 'bell']
    },
    {
      title: 'Actions',
      icons: ['plus', 'minus', 'edit', 'delete', 'save', 'share', 'download', 'upload']
    },
    {
      title: 'Communication',
      icons: ['message', 'phone', 'mail', 'video', 'audio', 'chat', 'send', 'receive']
    }
  ];

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#f8f9fa', overflowY: 'hidden' }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Nunito Sans, sans-serif',
          fontWeight: 700,
          color: '#1f5661',
          marginBottom: '32px',
          textAlign: 'center'
        }}
      >
        Figma Icon Library Showcase
      </Typography>
      
      {iconCategories.map((category, categoryIndex) => (
        <Box key={categoryIndex} sx={{ marginBottom: '32px' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 600,
              color: '#1f5661',
              marginBottom: '16px'
            }}
          >
            {category.title}
          </Typography>
          
          <Grid container spacing={2}>
            {category.icons.map((iconName, iconIndex) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={iconIndex}>
                <Paper
                  sx={{
                    padding: '16px',
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <IconLibrary 
                    iconName={iconName} 
                    size={32} 
                    color="#1f5661" 
                    sx={{ marginBottom: '8px' }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: 'Nunito Sans, sans-serif',
                      fontSize: '12px',
                      color: '#666',
                      display: 'block'
                    }}
                  >
                    {iconName}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      
      <Box
        sx={{
          backgroundColor: '#69f0f0',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
          marginTop: '32px'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 600,
            color: '#1f5661',
            marginBottom: '8px'
          }}
        >
          🎨 Over 2,000 Icons Available
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            color: '#1f5661',
            opacity: 0.8
          }}
        >
          This is just a small sample of the comprehensive icon library from Figma.
          You can use any icon by simply specifying its name in the IconLibrary component.
        </Typography>
      </Box>
    </Box>
  );
};

export default IconShowcase;

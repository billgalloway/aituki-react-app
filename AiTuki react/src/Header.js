import React, { useState, useMemo } from 'react';
import {
  IconButton,
  Button,
  Avatar,
  Badge,
  Box,
  Typography,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import IconLibrary from './IconLibrary';

// Image assets from Figma
const arrowIcon1 = "https://www.figma.com/api/mcp/asset/e94a93c3-d324-445c-b1d7-5ef7a70704e5";
const arrowIcon2 = "https://www.figma.com/api/mcp/asset/447139c8-306f-4dd5-af59-5aed0af4cb1d";
const arrowIcon3 = "https://www.figma.com/api/mcp/asset/ae8ed121-834c-463e-9b6a-acd75e7e27e4";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activePath = location.pathname;

  const navItems = useMemo(() => ([
    { label: 'Home', path: '/', iconName: 'home' },
    { label: 'Goals', path: '/goals', iconName: 'target' },
    { label: 'Data', path: '/data', iconName: 'data' },
    { label: 'Health', path: '/health', iconName: 'heart' },
    { label: 'Twin', path: '/twin', iconName: 'person' }
  ]), []);

  return (
    <Box
      sx={{
        backgroundColor: '#69f0f0', // Primary main color from Figma
        borderRadius: '0 0 32px 32px',
        boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.15), 0px 0px 4px 0px rgba(0,0,0,0.25)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Status Bar - iPhone */}
      <Box
        sx={{
          width: '100%',
          height: '8px',
          flexShrink: 0
        }}
      />
      
      {/* Icon Bar */}
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderRadius: '0 0 32px 32px',
          flexShrink: 0,
          width: '100%'
        }}
      >
            {/* Left side - Hamburger menu */}
            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <IconButton
                aria-label="Open menu"
                sx={{
                  width: 48,
                  height: 48,
                  padding: '12px',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={() => setMenuOpen(true)}
              >
                <IconLibrary iconName="menu" size={24} color="#1f5661" sx={{ pointerEvents: 'none' }} />
              </IconButton>
            </Box>

            {/* Right side - Avatar with badge */}
            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <Box
                    sx={{
                      backgroundColor: '#ef6c00', // Warning main color
                      color: '#ffffff',
                      borderRadius: '100px',
                      minWidth: '12px',
                      height: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 500,
                      fontFamily: 'Nunito Sans, sans-serif',
                      padding: '0 6.5px'
                    }}
                  >
                    4
                  </Box>
                }
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#98ffff', // Primary light color
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <IconLibrary iconName="user" size={24} color="#1f5661" />
                </Avatar>
              </Badge>
            </Box>
      </Container>

      {/* Prompt Bar */}
      <Box
        sx={{
          width: '100%',
          padding: '8px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flexShrink: 0
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffffff',
            color: '#1f5661', // Text primary color
            borderRadius: '32px',
            padding: '16px 22px',
            width: '100%',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0.4px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              boxShadow: 'none'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#1f5661',
              letterSpacing: '0.4px'
            }}
          >
            Get help from your digital twin
          </Typography>
          <Box sx={{ position: 'relative', width: 18, height: 24 }}>
            <img
              src={arrowIcon1}
              alt="Arrow icon part 1"
              style={{
                position: 'absolute',
                top: '20.83%',
                left: '16.67%',
                width: '25%',
                height: '70.84%'
              }}
            />
            <img
              src={arrowIcon2}
              alt="Arrow icon part 2"
              style={{
                position: 'absolute',
                top: '20.83%',
                left: '58.33%',
                width: '25%',
                height: '70.84%'
              }}
            />
            <img
              src={arrowIcon3}
              alt="Arrow icon part 3"
              style={{
                position: 'absolute',
                top: '8.33%',
                left: '41.67%',
                width: '16.66%',
                height: '83.34%'
              }}
            />
          </Box>
        </Button>
      </Box>
      {/* Side Navigation Drawer */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: { backgroundColor: 'rgba(0,0,0,0.5)' } // 50% black tint
          }
        }}
        PaperProps={{
          sx: {
            width: '80vw',
            maxWidth: 360,
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
            backgroundColor: '#ffffff',
            boxShadow: '0px 8px 24px rgba(0,0,0,0.2)'
          }
        }}
      >
        <Box sx={{ padding: '16px 16px 8px 16px' }}>
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              color: '#1f5661'
            }}
          >
            Menu
          </Typography>
        </Box>
        <Divider />
        <List sx={{ padding: 0 }}>
          {navItems.map((item) => {
            const selected = activePath === item.path || (item.path !== '/' && activePath.startsWith(item.path));
            return (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                sx={{
                  paddingY: '12px',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(105, 240, 240, 0.12)'
                  }
                }}
                selected={selected}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconLibrary iconName={item.iconName} size={22} color="#1f5661" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={{ fontFamily: 'Nunito Sans, sans-serif', color: '#1f5661', fontSize: '16px', fontWeight: 500 }}>
                      {item.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;

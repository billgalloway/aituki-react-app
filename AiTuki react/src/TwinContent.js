import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  IconButton,
  Chip,
  Avatar,
  Alert
} from '@mui/material';
import {
  Close as CloseIcon,
  Add as AddIcon,
  Language as LanguageIcon,
  Mic as MicIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  CalendarToday as CalendarIcon,
  DragIndicator as DragIndicatorIcon
} from '@mui/icons-material';

// Avatar image from Figma
const avatarImage = "https://www.figma.com/api/mcp/asset/1fbd3bc7-5a35-486b-bd9b-4307f907eb69";

const TwinContent = () => {
  const [showAlert, setShowAlert] = useState(true);

  const goalSuggestions = [
    {
      title: "Health goal",
      subtitle: "Based on my existing data",
      backgroundColor: "rgba(105, 240, 240, 0.08)"
    },
    {
      title: "Perimenopause goal",
      subtitle: "based on my personal input",
      backgroundColor: "rgba(255, 152, 0, 0.2)"
    },
    {
      title: "Create a fitness goal",
      subtitle: "Based on my body type",
      backgroundColor: "rgba(2, 136, 209, 0.08)"
    },
    {
      title: "Create a wellbeing goal",
      subtitle: "Based on my data",
      backgroundColor: "rgba(46, 125, 50, 0.08)"
    },
    {
      title: "Create a spiritual goal",
      subtitle: "based on my wishes",
      backgroundColor: "rgba(229, 255, 0, 0.2)"
    }
  ];

  // Fixed date as shown in Figma design
  const formattedDate = "July 25th 2025";

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '0',
        paddingBottom: '120px',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Profile Header Section */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '0 0 32px 32px',
          padding: '0 24px 16px 24px',
          boxShadow: '0px 2px 4px -2px rgba(0,0,0,0.2)',
          width: '100%',
          paddingTop: '16px'
        }}
      >
        {/* Date Row */}
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
          <CalendarIcon sx={{ fontSize: 24, color: '#1f5661' }} />
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: '#1f5661',
              lineHeight: 1.5,
              letterSpacing: '0.15px',
              flex: 1,
              backgroundColor: '#ffffff'
            }}
          >
            {formattedDate}
          </Typography>
        </Box>

        {/* Profile Info */}
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <Avatar
            src={avatarImage}
            sx={{
              width: 53,
              height: 53,
              border: '2px solid #98ffff'
            }}
          />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Typography
              sx={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 500,
                fontSize: '34px',
                color: '#1f5661',
                lineHeight: 1.176,
                letterSpacing: '-1.5px'
              }}
            >
              Hello, Pilar
            </Typography>
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Chip
                label="Pro member"
                sx={{
                  backgroundColor: '#1f5661',
                  color: '#ffffff',
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  height: '24px',
                  padding: '4px 6px',
                  '& .MuiChip-label': {
                    padding: '0 6px'
                  }
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#1f5661',
                  lineHeight: 1.334
                }}
              >
                Tuki Score 78%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Chat Input Card */}
      <Card
        sx={{
          borderRadius: '16px',
          border: '1px solid rgba(31,86,97,0.15)',
          backgroundColor: '#fafafa',
          padding: '16px 12px',
          height: '192px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginX: '24px'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(31,86,97,0.6)',
            lineHeight: 1.43,
            letterSpacing: '0.17px',
            opacity: 0.6
          }}
        >
          Ask me anytrhing
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '17px', alignItems: 'center' }}>
            <IconButton size="small" sx={{ opacity: 0.6 }}>
              <AddIcon sx={{ fontSize: 24, color: '#1f5661' }} />
            </IconButton>
            <IconButton size="small" sx={{ opacity: 0.6 }}>
              <LanguageIcon sx={{ fontSize: 24, color: '#1f5661' }} />
            </IconButton>
            <IconButton size="small" sx={{ opacity: 0.6 }}>
              <DragIndicatorIcon sx={{ fontSize: 24, color: '#1f5661' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <IconButton size="small" sx={{ opacity: 0.5 }}>
              <MicIcon sx={{ fontSize: 24, color: '#1f5661' }} />
            </IconButton>
            <Box
              sx={{
                backgroundColor: '#1f5661',
                borderRadius: '24px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <KeyboardVoiceIcon sx={{ fontSize: 24, color: '#ffffff' }} />
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Alert */}
      {showAlert && (
        <Box sx={{ paddingX: '24px' }}>
          <Alert
            severity="info"
            sx={{
              backgroundColor: '#e5f6fd',
              color: '#014361',
              borderRadius: '8px',
              padding: '6px 16px',
              '& .MuiAlert-icon': {
                color: '#014361'
              },
              '& .MuiAlert-message': {
                flex: 1
              }
            }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setShowAlert(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Hydration reminders
          </Alert>
        </Box>
      )}

      {/* Goal Suggestions - Horizontal Scroll */}
      <Box
        sx={{
          paddingX: '24px',
          marginTop: '10px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '12px',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '&': {
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }
          }}
        >
          {goalSuggestions.map((goal, index) => (
            <Card
              key={index}
              sx={{
                minWidth: '191px',
                borderRadius: '16px',
                backgroundColor: goal.backgroundColor,
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s'
                }
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#1f5661',
                  lineHeight: 1.43,
                  letterSpacing: '0.17px'
                }}
              >
                {goal.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: 'rgba(31,86,97,0.6)',
                  lineHeight: 1.66,
                  letterSpacing: '0.4px',
                  opacity: 0.6
                }}
              >
                {goal.subtitle}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TwinContent;


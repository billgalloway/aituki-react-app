import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton
} from '@mui/material';
import {
  MoreVert as MoreVertIcon
} from '@mui/icons-material';
import IconLibrary from './IconLibrary';

// Image assets from Figma - using same structure as LandingContent
const goalImages = {
  healthyLife: "https://www.figma.com/api/mcp/asset/fede8274-db25-4c0b-a37b-90f6cb4f8073",
  mentalHealth: "https://www.figma.com/api/mcp/asset/bc0ca800-7079-4502-9582-e4b2439bbc90",
  sleep: "https://www.figma.com/api/mcp/asset/9afa34ef-7b08-4da1-ac43-da288996b39f",
  strength: "https://www.figma.com/api/mcp/asset/773483d3-50a7-4db2-ae47-4d6dd038a529",
  relax: "https://www.figma.com/api/mcp/asset/fb035dda-a6ec-44ad-a7a0-3eda6db418bc",
  sport: "https://www.figma.com/api/mcp/asset/cf0834ac-00a7-40d0-977d-9276958d62ca",
  community: "https://www.figma.com/api/mcp/asset/cf0834ac-00a7-40d0-977d-9276958d62ca"
};

const GoalsContent = () => {
  const goals = [
    {
      title: "Life a healthier life",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.healthyLife,
      progress: 75,
      daysRemaining: 41
    },
    {
      title: "Focus on mental health",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.mentalHealth,
      progress: 60,
      daysRemaining: 22
    },
    {
      title: "Get a good nights sleep",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.sleep,
      progress: 85,
      daysRemaining: 8
    },
    {
      title: "Get stronger",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.strength,
      progress: 45,
      daysRemaining: 31
    },
    {
      title: "Find time to relax",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.relax,
      progress: 30,
      daysRemaining: 38
    },
    {
      title: "Play a sport",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.sport,
      progress: 50,
      daysRemaining: 28
    },
    {
      title: "Be part of a community",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: goalImages.community,
      progress: 90,
      daysRemaining: 4
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        paddingBottom: '120px', // Extra padding for bottom navigation
        width: '100%'
      }}
    >
      {/* Set New Goal Button */}
      <Box sx={{ padding: '4px 0' }}>
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            borderRadius: '32px',
            borderColor: '#69f0f0',
            backgroundColor: '#ffffff',
            color: '#1f5661',
            padding: '16px 22px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#f5f5f5',
              borderColor: '#69f0f0'
            }
          }}
        >
          Set a new goal
          <IconLibrary iconName="plus" size={20} color="#1f5661" sx={{ marginLeft: '8px' }} />
        </Button>
      </Box>

      {/* Goals Info Card */}
      <Card
        sx={{
          borderRadius: '16px',
          border: '1px solid rgba(31,86,97,0.15)',
          backgroundColor: '#ffffff',
          padding: '24px',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            color: '#1f5661',
            marginBottom: '8px'
          }}
        >
          Set achievable goals
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(31,86,97,0.6)',
            lineHeight: 1.43
          }}
        >
          Tuki can help you to create any type of personal goal. We can create bespoke digital twin functionality for almost any health objective.
        </Typography>
      </Card>

      {/* Goal Cards */}
      {goals.map((goal, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: '8px',
            border: '1px solid rgba(31,86,97,0.15)',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }
          }}
        >
          <CardMedia
            component="img"
            height="170"
            image={goal.image}
            alt={goal.title}
            sx={{
              objectFit: 'cover'
            }}
          />
          <CardContent sx={{ padding: '16px 24px 20px 24px' }}>
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: 1.235,
                    color: '#1f5661',
                    letterSpacing: '0.25px',
                    marginBottom: '4px'
                  }}
                >
                  {goal.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: 1.57,
                    color: 'rgba(31,86,97,0.6)',
                    letterSpacing: '0.1px'
                  }}
                >
                  {goal.duration}
                </Typography>
              </Box>
              <IconButton size="small">
                <MoreVertIcon sx={{ color: '#1f5661' }} />
              </IconButton>
            </Box>
            
            {/* Progress Bar */}
            <Box sx={{ marginBottom: '8px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '4px'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    color: 'rgba(31,86,97,0.6)'
                  }}
                >
                  Progress
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    color: '#1f5661'
                  }}
                >
                  {goal.progress}%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'rgba(31,86,97,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    width: `${goal.progress}%`,
                    height: '100%',
                    backgroundColor: '#27cccc',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }}
                />
              </Box>
            </Box>
            
            {/* Days Remaining */}
            <Typography
              sx={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: 'rgba(31,86,97,0.6)'
              }}
            >
              {goal.daysRemaining} days remaining
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default GoalsContent;

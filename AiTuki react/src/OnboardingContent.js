import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
} from '@mui/material';
import IconLibrary from './IconLibrary';

// Icon images from Figma
const iconImages = {
  health: "https://www.figma.com/api/mcp/asset/7178b1df-6401-4387-a145-51fb74d43be9",
  health2: "https://www.figma.com/api/mcp/asset/38128faf-34b0-419d-b1ce-a9241aa0e463",
  addDevice: "https://www.figma.com/api/mcp/asset/e64f8b97-bc62-4e76-9ab4-9ec424988343",
  addDevice2: "https://www.figma.com/api/mcp/asset/d4f61ef8-7973-4d75-b491-d5eba717bd03",
};

const goalOptions = [
  { id: 'healthier', label: 'Live a healthier life', icon: 'health', useImage: true },
  { id: 'mental', label: 'Focus on mental health', icon: 'psychology', useImage: false },
  { id: 'sleep', label: 'Get a good nights sleep', icon: 'sleep', useImage: false },
  { id: 'stronger', label: 'Get stronger', icon: 'fitness_center', useImage: false },
  { id: 'relax', label: 'Find time to relax', icon: 'wb_sunny', useImage: false },
  { id: 'sport', label: 'Play a sport', icon: 'sports_basketball', useImage: false },
  { id: 'community', label: 'Be part of a community', icon: 'group', useImage: false },
];

const communitySuggestions = [
  {
    title: 'Health goal',
    description: 'Based on my existing data',
    bgColor: 'rgba(105, 240, 240, 0.08)',
  },
  {
    title: 'Perimenopause goal',
    description: 'based on my personal input',
    bgColor: 'rgba(255, 152, 0, 0.2)',
  },
  {
    title: 'Create a fitness goal',
    description: 'Based on my body type',
    bgColor: 'rgba(2, 136, 209, 0.08)',
  },
  {
    title: 'Create a wellbeing goal',
    description: 'Based on my data',
    bgColor: 'rgba(46, 125, 50, 0.08)',
  },
  {
    title: 'Create a spiritual goal',
    description: 'based on my wishes',
    bgColor: 'rgba(229, 255, 0, 0.2)',
  },
];

const OnboardingContent = ({ onComplete }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalSelect = (goalId) => {
    setSelectedGoal(goalId);
  };

  const handleAddDevice = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const handleManualData = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
        paddingBottom: '120px',
        width: '100%',
        maxWidth: '393px',
        margin: '0 auto',
        opacity: 0.9,
      }}
    >
      {/* Welcome Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: '8px' }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: 1.167,
            color: '#1f5661',
            marginBottom: '17px',
          }}
        >
          Welcome to aiTuki
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: 1.235,
            color: '#1f5661',
            letterSpacing: '0.25px',
            marginBottom: '8px',
          }}
        >
          What is your main goal for the next three months?
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: 1.43,
            color: '#1f5661',
          }}
        >
          You can always ask me to update later
        </Typography>
      </Box>

      {/* Goal Options */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {goalOptions.map((goal) => (
          <Card
            key={goal.id}
            sx={{
              borderRadius: '12px',
              border: '1px solid rgba(31,86,97,0.15)',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
            onClick={() => handleGoalSelect(goal.id)}
          >
            <ListItemButton
              sx={{
                padding: '12px 16px',
              }}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {goal.useImage && goal.id === 'healthier' ? (
                    <Box sx={{ width: '24px', height: '24px', position: 'relative' }}>
                      <img
                        src={iconImages.health}
                        alt="Health icon"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                  ) : (
                    <IconLibrary iconName={goal.icon} size={24} color="#1f5661" />
                  )}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={goal.label}
                primaryTypographyProps={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.5,
                  color: '#1f5661',
                  letterSpacing: '0.15px',
                }}
              />
            </ListItemButton>
          </Card>
        ))}
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Nunito Sans, sans-serif',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1.334,
          color: '#1f5661',
          marginTop: '8px',
        }}
      >
        Something else then just ask
      </Typography>

      {/* Community Suggestions */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Suggestions from our community
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '12px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
            {communitySuggestions.map((suggestion, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '191px',
                  borderRadius: '16px',
                  backgroundColor: suggestion.bgColor,
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.43,
                    color: '#1f5661',
                    letterSpacing: '0.17px',
                  }}
                >
                  {suggestion.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: 1.66,
                    color: '#1f5661',
                    opacity: 0.6,
                    letterSpacing: '0.4px',
                  }}
                >
                  {suggestion.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* User Question */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', marginTop: '16px' }}>
        <Card
          sx={{
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            padding: '12px',
            boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.25)',
            maxWidth: '293px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1.43,
              color: '#1f5661',
              letterSpacing: '0.17px',
            }}
          >
            I am worried about how perimenopause will effect me over the next few years. How can I plan for this?
          </Typography>
        </Card>
      </Box>

      {/* AI Response */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Ok, I can definitely help with that.
          <br />
          Periperimenopause and perimenopause effect women between 35 and 55 and there are many ways in which you can prepare and manage the effects.
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Would you like me to prepare a plan for the next 3 months to help you understand and prepare?
        </Typography>
      </Box>

      {/* User Response */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', marginTop: '16px' }}>
        <Card
          sx={{
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            padding: '12px',
            boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.25)',
            maxWidth: '293px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1.43,
              color: '#1f5661',
              letterSpacing: '0.17px',
            }}
          >
            Yes that would be great.
          </Typography>
        </Card>
      </Box>

      {/* AI Response - Device Setup */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Connecting a wearable device will allow me to create a personalised goal for you.
          <br />
          You can add a device now or late or enter the data yourself.
        </Typography>
      </Box>

      {/* Device Setup Buttons */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', paddingBottom: '24px' }}>
        <Button
          variant="contained"
          onClick={handleAddDevice}
          endIcon={
            <Box sx={{ width: '18px', height: '24px', position: 'relative', display: 'flex', alignItems: 'center' }}>
              <IconLibrary iconName="arrow-right" size={18} color="#1f5661" />
            </Box>
          }
          sx={{
            borderRadius: '32px',
            backgroundColor: '#69f0f0',
            color: '#1f5661',
            padding: '8px 22px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.4px',
            gap: '8px',
            '&:hover': {
              backgroundColor: '#5dd5d5',
            },
          }}
        >
          Add a device
        </Button>
        <Button
          variant="outlined"
          onClick={handleManualData}
          sx={{
            borderRadius: '32px',
            borderColor: '#69f0f0',
            color: '#1f5661',
            padding: '8px 22px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.4px',
            '&:hover': {
              borderColor: '#69f0f0',
              backgroundColor: 'rgba(105, 240, 240, 0.08)',
            },
          }}
        >
          Add your data manually
        </Button>
      </Box>

      {/* Goal Created Message */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Based on the data from your apple watch I have created the goal{' '}
          <Typography
            component="span"
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#0288d1',
              textDecoration: 'underline',
            }}
          >
            Perimenopause tracking
          </Typography>
        </Typography>
      </Box>

      {/* User Confirmation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', marginTop: '16px' }}>
        <Card
          sx={{
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            padding: '12px',
            boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.25)',
            maxWidth: '293px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1.43,
              color: '#1f5661',
              letterSpacing: '0.17px',
            }}
          >
            Yes
          </Typography>
        </Card>
      </Box>

      {/* View Goal Button */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
        <Button
          variant="contained"
          onClick={handleAddDevice}
          sx={{
            borderRadius: '32px',
            backgroundColor: '#69f0f0',
            color: '#1f5661',
            padding: '8px 22px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.4px',
            '&:hover': {
              backgroundColor: '#5dd5d5',
            },
          }}
        >
          View your goal
        </Button>
      </Box>

      {/* Another Goal Question */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <Typography
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Would you like to set up another goal?
        </Typography>
      </Box>

      {/* Goal Options Again */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
        {goalOptions.slice(0, 3).map((goal) => (
          <Card
            key={goal.id}
            sx={{
              borderRadius: '12px',
              border: '1px solid rgba(31,86,97,0.15)',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
            onClick={() => handleGoalSelect(goal.id)}
          >
            <ListItemButton
              sx={{
                padding: '12px 16px',
              }}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {goal.useImage && goal.id === 'healthier' ? (
                    <Box sx={{ width: '24px', height: '24px', position: 'relative' }}>
                      <img
                        src={iconImages.health}
                        alt="Health icon"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                  ) : (
                    <IconLibrary iconName={goal.icon} size={24} color="#1f5661" />
                  )}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={goal.label}
                primaryTypographyProps={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.5,
                  color: '#1f5661',
                  letterSpacing: '0.15px',
                }}
              />
            </ListItemButton>
          </Card>
        ))}
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Nunito Sans, sans-serif',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1.334,
          color: '#1f5661',
          marginTop: '8px',
        }}
      >
        Something else then just ask.
      </Typography>

      {/* Community Suggestions Again */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.334,
            color: '#1f5661',
          }}
        >
          Suggestions from our community
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '12px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
            {communitySuggestions.map((suggestion, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '191px',
                  borderRadius: '16px',
                  backgroundColor: suggestion.bgColor,
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.43,
                    color: '#1f5661',
                    letterSpacing: '0.17px',
                  }}
                >
                  {suggestion.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: 1.66,
                    color: '#1f5661',
                    opacity: 0.6,
                    letterSpacing: '0.4px',
                  }}
                >
                  {suggestion.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingContent;

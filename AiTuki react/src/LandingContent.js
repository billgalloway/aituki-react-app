import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Chip,
  Rating,
  Container,
  Grid,
  Paper
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  Star as StarIcon,
  StarHalf as StarHalfIcon,
  StarBorder as StarBorderIcon
} from '@mui/icons-material';
import IconLibrary from './IconLibrary';

// Image assets from Figma
const heroImages = {
  perimenopause: "https://www.figma.com/api/mcp/asset/26448e25-bf4c-4dc9-9e61-450255743a81",
  yoga: "https://www.figma.com/api/mcp/asset/6bc90874-084c-45dd-9a21-0b02137248cc",
  mindfulness: "https://www.figma.com/api/mcp/asset/aea25446-6f42-42a2-84d6-12cab3a571d6",
  mealPlanning: "https://www.figma.com/api/mcp/asset/8e8e5043-4065-4193-a464-41cbff589cb1",
  sleep: "https://www.figma.com/api/mcp/asset/9afa34ef-7b08-4da1-ac43-da288996b39f",
  symptomTracking: "https://www.figma.com/api/mcp/asset/9457a270-0c16-49e1-a56b-bb6b96a72032"
};

const todayImages = {
  meditation: "https://www.figma.com/api/mcp/asset/ecc7c4d1-4ab0-4b49-b001-55217e2a0566",
  perimenopause: "https://www.figma.com/api/mcp/asset/d9c57c26-f7b5-4ef3-870b-e85504880d72",
  diet: "https://www.figma.com/api/mcp/asset/22df2773-6f34-4c49-9f26-d2716c506da6",
  therapy: "https://www.figma.com/api/mcp/asset/8d86fa28-df29-4f8a-af30-707876cc8a4e",
  exercise: "https://www.figma.com/api/mcp/asset/20c55d01-4b45-470e-b54e-ca828f5575dd"
};

const suggestionImages = {
  hormoneTherapy: "https://www.figma.com/api/mcp/asset/5f76d5b4-d410-4a34-b989-9930505ac5c4",
  weightManagement: "https://www.figma.com/api/mcp/asset/1db6815a-4bb7-44f5-943c-619c455da8fd",
  fitness: "https://www.figma.com/api/mcp/asset/bf236dc2-4b0d-418c-b320-75ba8a721449",
  stressReduction: "https://www.figma.com/api/mcp/asset/5a28cf10-a200-4093-87ff-d62bb7913651",
  conditionManagement: "https://www.figma.com/api/mcp/asset/8fd8d2cd-80f0-4fbe-8b89-31b8f18d4936"
};

const programImages = {
  healthyLife: "https://www.figma.com/api/mcp/asset/fede8274-db25-4c0b-a37b-90f6cb4f8073",
  mentalHealth: "https://www.figma.com/api/mcp/asset/bc0ca800-7079-4502-9582-e4b2439bbc90",
  sleep: "https://www.figma.com/api/mcp/asset/9afa34ef-7b08-4da1-ac43-da288996b39f",
  strength: "https://www.figma.com/api/mcp/asset/773483d3-50a7-4db2-ae47-4d6dd038a529",
  relax: "https://www.figma.com/api/mcp/asset/fb035dda-a6ec-44ad-a7a0-3eda6db418bc",
  sport: "https://www.figma.com/api/mcp/asset/cf0834ac-00a7-40d0-977d-9276958d62ca",
  community: "https://www.figma.com/api/mcp/asset/cf0834ac-00a7-40d0-977d-9276958d62ca"
};

const LandingContent = () => {
  const heroPrograms = [
    {
      title: "Perimenopause tracking",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: heroImages.perimenopause
    },
    {
      title: "Yoga and Pilates",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: heroImages.yoga
    },
    {
      title: "Mindfulness or meditation",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: heroImages.mindfulness
    },
    {
      title: "Meal planning & Mindful eating",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: heroImages.mealPlanning
    },
    {
      title: "Sleep routine",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: heroImages.sleep
    },
    {
      title: "Symptom tracking",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: heroImages.symptomTracking
    }
  ];

  const todayActivities = [
    {
      title: "Meditation",
      time: "20.30 am",
      description: "15 min relaxation",
      image: todayImages.meditation,
      status: "completed"
    },
    {
      title: "Perimenapause",
      value: "567",
      status: "High",
      description: "Check weekly levels",
      image: todayImages.perimenopause,
      isHigh: true
    },
    {
      title: "Diet",
      time: "12.30 am",
      description: "20 min cycling",
      image: todayImages.diet,
      status: "completed"
    },
    {
      title: "Adaptogen therapy",
      time: "8.30 am",
      description: "Reushi mushroom",
      image: todayImages.therapy,
      status: "completed"
    },
    {
      title: "Exercise",
      time: "12.30 am",
      description: "20 min cycling",
      image: todayImages.exercise,
      status: "completed"
    }
  ];

  const suggestions = [
    {
      title: "Hormone therapy",
      description: "Practical help and advice in transitioning through this challenging period of life",
      image: suggestionImages.hormoneTherapy,
      rating: 4.5,
      reviews: 145,
      users: 1024
    },
    {
      title: "Managing your weight",
      description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes",
      image: suggestionImages.weightManagement,
      rating: 4.5,
      reviews: 145,
      users: 1024
    },
    {
      title: "Fitness and strength",
      description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes",
      image: suggestionImages.fitness,
      rating: 4.5,
      reviews: 145,
      users: 1024
    },
    {
      title: "Reducing stress",
      description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes",
      image: suggestionImages.stressReduction,
      rating: 4.5,
      reviews: 145,
      users: 1024
    },
    {
      title: "Managing a condition",
      description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes",
      image: suggestionImages.conditionManagement,
      rating: 4.5,
      reviews: 145,
      users: 1024
    }
  ];

  const additionalPrograms = [
    {
      title: "Life a healthier life",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.healthyLife
    },
    {
      title: "Focus on mental health",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.mentalHealth
    },
    {
      title: "Get a good nights sleep",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.sleep
    },
    {
      title: "Get stronger",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.strength
    },
    {
      title: "Find time to relax",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.relax
    },
    {
      title: "Play a sport",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.sport
    },
    {
      title: "Be part of a community",
      duration: "8 weeks • Day 15 • 35-45 min pw",
      image: programImages.community
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
      {/* Hero Scroller */}
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '8px',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '&': {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }
        }}
      >
        {heroPrograms.map((program, index) => (
          <Card
            key={index}
            sx={{
              minWidth: '345px',
              borderRadius: '8px',
              border: '1px solid rgba(31,86,97,0.15)',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardMedia
              component="img"
              height="170"
              image={program.image}
              alt={program.title}
              sx={{
                objectFit: 'cover'
              }}
            />
            <CardContent sx={{ padding: '8px 24px 16px 24px' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
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
                    {program.title}
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
                    {program.duration}
                  </Typography>
                </Box>
                <IconButton size="small">
                  <MoreVertIcon sx={{ color: '#1f5661' }} />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Today Section */}
      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px 0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Box sx={{ width: 24, height: 24, backgroundColor: '#27cccc', borderRadius: '50%' }} />
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: '#1f5661'
            }}
          >
            Today
          </Typography>
        </Box>
      </Box>

      {/* Today Activities */}
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          height: '250px',
          overflowX: 'auto',
          paddingBottom: '8px',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '&': {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }
        }}
      >
        {todayActivities.map((activity, index) => (
          <Card
            key={index}
            sx={{
              minWidth: '153px',
              height: '250px',
              borderRadius: '8px',
              border: '1px solid rgba(31,86,97,0.15)',
              backgroundColor: '#ffffff',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#1f5661',
                  marginBottom: '8px'
                }}
              >
                {activity.title}
              </Typography>
              <Box sx={{ height: '1px', backgroundColor: '#27cccc', marginBottom: '8px' }} />
              <Box sx={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                <Box sx={{ width: '9.618px', height: '9.618px', backgroundColor: '#27cccc', borderRadius: '50%' }} />
                <Box sx={{ width: '9.618px', height: '9.618px', backgroundColor: '#27cccc', borderRadius: '50%' }} />
              </Box>
            </Box>
            
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activity.image}
                alt={activity.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: activity.isHigh ? '#d32f2f' : '#1f5661',
                  lineHeight: 1.235
                }}
              >
                {activity.time || activity.value}
                {activity.status && (
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: 'Nunito Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: '12.9px',
                      color: activity.isHigh ? '#d32f2f' : '#1f5661',
                      marginLeft: '4px'
                    }}
                  >
                    {activity.status}
                  </Typography>
                )}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#1f5661',
                  lineHeight: 1.43
                }}
              >
                {activity.description}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Create New Goal Button */}
      <Box sx={{ padding: '4px 0' }}>
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            borderRadius: '32px',
            borderColor: '#69f0f0',
            backgroundColor: '#ffffff',
            color: '#1f5661',
            padding: '8px 22px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            '&:hover': {
              backgroundColor: '#f5f5f5',
              borderColor: '#69f0f0'
            }
          }}
        >
          Create a new goal
          <IconLibrary iconName="plus" size={18} color="#1f5661" sx={{ marginLeft: '8px' }} />
        </Button>
      </Box>

      {/* Digital Twin Suggestions Section */}
      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px 0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Box sx={{ width: 24, height: 24, backgroundColor: '#27cccc', borderRadius: '50%' }} />
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: '#1f5661'
            }}
          >
            Digital twin suggestions
          </Typography>
        </Box>
      </Box>

      {/* Suggestion Cards */}
      {suggestions.map((suggestion, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: '8px',
            border: '1px solid rgba(31,86,97,0.15)',
            backgroundColor: '#ffffff',
            padding: '8px 16px 16px 16px'
          }}
        >
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
            <Box sx={{ width: '71.718px', height: '74.341px' }}>
              <img
                src={suggestion.image}
                alt={suggestion.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#1f5661',
                  marginBottom: '4px'
                }}
              >
                {suggestion.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                <Rating
                  value={suggestion.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#27cccc'
                    },
                    '& .MuiRating-iconEmpty': {
                      color: 'rgba(0,0,0,0.23)'
                    }
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: 'rgba(31,86,97,0.6)'
                  }}
                >
                  {suggestion.reviews} reviews
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'rgba(31,86,97,0.6)'
                }}
              >
                Used by {suggestion.users} people
              </Typography>
            </Box>
            <IconButton size="small">
              <MoreVertIcon sx={{ color: '#1f5661' }} />
            </IconButton>
          </Box>
          
          <Box sx={{ height: '1px', backgroundColor: '#27cccc', margin: '8px 0' }} />
          
          <Typography
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#1f5661',
              lineHeight: 1.43,
              paddingTop: '8px'
            }}
          >
            {suggestion.description}
          </Typography>
        </Card>
      ))}

      {/* Additional Program Cards */}
      {additionalPrograms.map((program, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: '8px',
            border: '1px solid rgba(31,86,97,0.15)',
            backgroundColor: '#ffffff',
            overflow: 'hidden'
          }}
        >
          <CardMedia
            component="img"
            height="170"
            image={program.image}
            alt={program.title}
            sx={{
              objectFit: 'cover'
            }}
          />
          <CardContent sx={{ padding: '8px 24px 16px 24px' }}>
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
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
                  {program.title}
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
                  {program.duration}
                </Typography>
              </Box>
              <IconButton size="small">
                <MoreVertIcon sx={{ color: '#1f5661' }} />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}

      {/* View All Articles Button */}
      <Box sx={{ padding: '16px 0 40px 0', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            borderRadius: '32px',
            backgroundColor: '#69f0f0',
            color: '#1f5661',
            padding: '8px 22px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            '&:hover': {
              backgroundColor: '#5dd5d5'
            }
          }}
        >
          View all articles
        </Button>
      </Box>
    </Box>
  );
};

export default LandingContent;

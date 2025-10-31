import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  Tabs,
  Tab,
  Alert,
  IconButton
} from '@mui/material';
import {
  Close as CloseIcon
} from '@mui/icons-material';

// Health metric images from Figma
const healthImages = {
  steps: "https://www.figma.com/api/mcp/asset/2826ca0a-24d3-42a8-ad7e-b97aebce9703",
  bodyMeasurements: "https://www.figma.com/api/mcp/asset/72580100-a7f1-43bb-9b2f-9d48c5324acc",
  cycling: "https://www.figma.com/api/mcp/asset/49412a5b-b279-47ae-b006-16a689201f33",
  heart: "https://www.figma.com/api/mcp/asset/0217a8f5-f897-4062-b030-288ec7656b22",
  respiratory: "https://www.figma.com/api/mcp/asset/72f42abb-73a5-4589-bb90-aaf23560816d"
};

const HealthContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const healthMetrics = [
    {
      title: "Steps",
      value: "10560",
      unit: "steps",
      status: "Above average",
      statusColor: "#4caf50",
      image: healthImages.steps
    },
    {
      title: "Body measurements",
      value: "71.8",
      unit: "kg",
      status: "-0.4kg",
      statusColor: "#4caf50",
      image: healthImages.bodyMeasurements
    },
    {
      title: "Cycling",
      value: "10.4",
      unit: "Klm",
      status: "Last 7 days",
      statusColor: "#4caf50",
      image: healthImages.cycling
    },
    {
      title: "Heart",
      value: "120/82",
      unit: "mmHg",
      value2: "75",
      unit2: "bpm",
      status: "Pre-High preasure",
      statusColor: "#ef6c00",
      image: healthImages.heart
    },
    {
      title: "Respiratory",
      value: "96%",
      unit: "CO2",
      status: "Above average",
      statusColor: "#4caf50",
      image: healthImages.respiratory
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '21px',
        padding: '24px',
        paddingBottom: '120px',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {/* Tabs Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          paddingTop: '16px',
          paddingBottom: 0,
          paddingX: 0,
          width: '100%'
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            width: '100%',
            '& .MuiTabs-indicator': {
              backgroundColor: '#69f0f0',
              height: '2px'
            }
          }}
        >
          <Tab
            label="Physical"
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: activeTab === 0 ? 400 : 400,
              fontSize: '14px',
              color: activeTab === 0 ? '#1f5661' : 'rgba(31,86,97,0.6)',
              textTransform: 'none',
              letterSpacing: '0.4px',
              flex: 1
            }}
          />
          <Tab
            label="Emotional"
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: activeTab === 1 ? '#1f5661' : 'rgba(31,86,97,0.6)',
              textTransform: 'none',
              letterSpacing: '0.4px',
              flex: 1
            }}
          />
          <Tab
            label="Cognitive"
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: activeTab === 2 ? '#1f5661' : 'rgba(31,86,97,0.6)',
              textTransform: 'none',
              letterSpacing: '0.4px',
              flex: 1
            }}
          />
          <Tab
            label="Spiritual"
            sx={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: activeTab === 3 ? '#1f5661' : 'rgba(31,86,97,0.6)',
              textTransform: 'none',
              letterSpacing: '0.4px',
              flex: 1
            }}
          />
        </Tabs>
      </Box>

      {/* Add Data Button */}
      <Button
        variant="contained"
        sx={{
          width: '345px',
          alignSelf: 'flex-start',
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
            backgroundColor: '#5dd5d5'
          }
        }}
      >
        Add data
      </Button>

      {/* Alert */}
      {showAlert && (
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
          You've been sitting for 90 mins—let's stretch
        </Alert>
      )}

      {/* Health Metrics Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '21px',
          width: '100%'
        }}
      >
        {healthMetrics.map((metric, index) => (
          <Card
            key={index}
            sx={{
              flex: '1 0 auto',
              minWidth: metric.title === 'Steps' ? '341px' : '159px',
              height: '238px',
              borderRadius: '8px',
              border: '1px solid rgba(31,86,97,0.15)',
              backgroundColor: '#ffffff',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }
            }}
          >
            {/* Background Image */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: '8px'
                }}
              />
              <img
                src={metric.image}
                alt={metric.title}
                style={{
                  position: 'absolute',
                  height: metric.title === 'Steps' ? '66.82%' : 
                          metric.title === 'Body measurements' ? '57.8%' :
                          metric.title === 'Cycling' ? '60.12%' :
                          metric.title === 'Heart' ? '40.02%' :
                          '51.46%',
                  width: metric.title === 'Steps' ? '39.66%' :
                         metric.title === 'Body measurements' ? '82.87%' :
                         metric.title === 'Cycling' ? '89.43%' :
                         metric.title === 'Heart' ? '59.53%' :
                         '76.55%',
                  left: metric.title === 'Steps' ? '43.16%' :
                        metric.title === 'Body measurements' ? '6.95%' :
                        metric.title === 'Cycling' ? '2.25%' :
                        metric.title === 'Heart' ? '15.77%' :
                        '11.72%',
                  top: metric.title === 'Steps' ? '17.36%' :
                       metric.title === 'Body measurements' ? '19.6%' :
                       metric.title === 'Cycling' ? '16.33%' :
                       metric.title === 'Heart' ? '24.2%' :
                       '24.27%',
                  objectFit: 'contain'
                }}
              />
            </Box>

            {/* Title and Divider */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#1f5661',
                  lineHeight: 1.6,
                  letterSpacing: '0.15px'
                }}
              >
                {metric.title}
              </Typography>
              <Box
                sx={{
                  height: '1px',
                  width: '100%',
                  backgroundColor: '#27cccc'
                }}
              />
            </Box>

            {/* Value and Status */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', zIndex: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#1f5661',
                  lineHeight: 1.235,
                  letterSpacing: '0.25px'
                }}
              >
                {metric.value}
                <span style={{ fontSize: '12.9px', fontWeight: 500 }}>{` ${metric.unit}`}</span>
              </Typography>
              {metric.value2 && (
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    color: '#1f5661',
                    lineHeight: 1.235,
                    letterSpacing: '0.25px'
                  }}
                >
                  {metric.value2}
                  <span style={{ fontSize: '12.9px', fontWeight: 500 }}>{` ${metric.unit2}`}</span>
                </Typography>
              )}
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: metric.statusColor,
                  lineHeight: 1.43,
                  letterSpacing: '0.17px',
                  marginTop: '4px'
                }}
              >
                {metric.status}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HealthContent;


import React from 'react';
import {
  Box,
  Typography,
  Card
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

// Device icons from Figma
const deviceImages = {
  apple: "https://www.figma.com/api/mcp/asset/5fc52ae3-1f2f-4bfe-96f0-f6e68d0d7252",
  android: "https://www.figma.com/api/mcp/asset/ee5cc8bf-90de-4b96-b967-fbbdb6d29e98",
  fitbit: "https://www.figma.com/api/mcp/asset/54154fac-eb50-481f-999a-a4b71d75ed06",
  auro: "https://www.figma.com/api/mcp/asset/8b47b476-8442-4d85-b922-0a11f713c560",
  manual: "https://www.figma.com/api/mcp/asset/e74c86aa-7398-4dda-a5ae-3e43b4281fe0",
  bupa: "https://www.figma.com/api/mcp/asset/ba72f56b-f359-4e96-91fd-9ff210a673bd",
  virgin: "https://www.figma.com/api/mcp/asset/ac2497c4-e3be-4583-b7a3-0e88d4dcfdd5",
  nhs: "https://www.figma.com/api/mcp/asset/bb6cacc9-ba08-4f71-b3aa-986092aa4df4",
  axa: "https://www.figma.com/api/mcp/asset/5fc52ae3-1f2f-4bfe-96f0-f6e68d0d7252",
  vitality: "https://www.figma.com/api/mcp/asset/5fc52ae3-1f2f-4bfe-96f0-f6e68d0d7252"
};

const DataContent = () => {
  const devices = [
    { name: 'Apple', image: deviceImages.apple },
    { name: 'Android', image: deviceImages.android },
    { name: 'fitbit', image: deviceImages.fitbit },
    { name: 'Auro', image: deviceImages.auro }
  ];

  const services = [
    { name: 'Add data manualy', image: deviceImages.manual },
    { name: 'BUPA', image: deviceImages.bupa },
    { name: 'Virgin fitness', image: deviceImages.virgin },
    { name: 'NHS', image: deviceImages.nhs },
    { name: 'AXA', image: deviceImages.axa },
    { name: 'Vitality', image: deviceImages.vitality }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
        paddingBottom: '120px', // Extra padding for bottom navigation
        width: '100%'
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '8px' }}>
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
          Add health data
        </Typography>
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
          Tuki uses your health data to understand you and your body. the easies way is to connect a device.
        </Typography>
      </Box>

      {/* Devices Section */}
      <Card
        sx={{
          borderRadius: '8px',
          border: '1px solid rgba(31,86,97,0.15)',
          backgroundColor: '#ffffff',
          padding: '0',
          overflow: 'hidden'
        }}
      >
        {devices.map((device, index) => (
          <React.Fragment key={index}>
            <Box
              component="button"
              onClick={() => {}}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px',
                border: 'none',
                borderBottom: index < devices.length - 1 ? '1px solid rgba(31,86,97,0.25)' : 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                '&:hover': {
                  backgroundColor: 'rgba(31,86,97,0.05)'
                }
              }}
            >
              <Box
                sx={{
                  width: '32.904px',
                  height: '32.904px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                <img
                  src={device.image}
                  alt={device.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#1f5661',
                  lineHeight: 1.334,
                  flex: 1
                }}
              >
                {device.name}
              </Typography>
              <ChevronRightIcon
                sx={{
                  color: 'rgba(31,86,97,0.4)',
                  fontSize: '24px'
                }}
              />
            </Box>
          </React.Fragment>
        ))}
      </Card>

      {/* Services Section */}
      <Card
        sx={{
          borderRadius: '8px',
          border: '1px solid rgba(31,86,97,0.15)',
          backgroundColor: '#ffffff',
          padding: '0',
          overflow: 'hidden'
        }}
      >
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <Box
              component="button"
              onClick={() => {}}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px',
                border: 'none',
                borderBottom: index < services.length - 1 ? '1px solid rgba(31,86,97,0.25)' : 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                '&:hover': {
                  backgroundColor: 'rgba(31,86,97,0.05)'
                }
              }}
            >
              <Box
                sx={{
                  width: '32.904px',
                  height: '32.904px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#1f5661',
                  lineHeight: 1.334,
                  flex: 1
                }}
              >
                {service.name}
              </Typography>
              <ChevronRightIcon
                sx={{
                  color: 'rgba(31,86,97,0.4)',
                  fontSize: '24px'
                }}
              />
            </Box>
          </React.Fragment>
        ))}
      </Card>
    </Box>
  );
};

export default DataContent;


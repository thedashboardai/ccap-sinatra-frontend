import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Tab,
  Tabs,
  Paper,
} from '@mui/material';
import {
  Edit,
  Share,
  LocationOn,
  Business
} from '@mui/icons-material';
import CuisinePortfolio from './CuisinePortfolio';

const ProfileView = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: '#f5f5f5',
      }}
    >
      {/* Header with background image and profile picture */}
      <Box
        sx={{
          position: 'relative',
          height: 180,
          width: '100%',
          overflow: 'visible', // Changed from 'hidden' to 'visible' to allow the avatar to extend outside
        }}
      >
        {/* Background image */}
        <Box
          component="img"
          src="/images/chef-kitchen-bg.jpg"
          alt="Kitchen Background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.9)',
          }}
        />

        {/* Profile picture - positioned to be fully visible */}
        <Box
          sx={{
            position: 'absolute',
            left: 16,
            bottom: -24,
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: 'white',
            padding: '3px', // Creates a white border effect
            zIndex: 1,
          }}
        >
          <Avatar
            src="/images/profile-placeholder.jpg"
            alt="Profile"
            sx={{
              width: '100%',
              height: '100%',
            }}
          />
        </Box>

        {/* Edit and share buttons */}
        <Box
          sx={{
            position: 'absolute',
            right: 10,
            bottom: 10,
            display: 'flex',
            gap: 1,
          }}
        >
          <IconButton
            aria-label="edit profile"
            sx={{
              bgcolor: 'rgba(255,255,255,0.7)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            <Edit sx={{ color: '#42a5f5' }} />
          </IconButton>
          <IconButton
            aria-label="share profile"
            sx={{
              bgcolor: 'rgba(255,255,255,0.7)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            <Share sx={{ color: '#42a5f5' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Profile info */}
      <Box
        sx={{
          pt: 5,
          px: 2,
          pb: 2,
          bgcolor: 'white',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: 0.5,
          }}
        >
          John Doe
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#78909c',
            mb: 2,
          }}
        >
          Manager at restaurant name
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#78909c' }}>
            <Business sx={{ fontSize: 20, mr: 1, color: '#78909c' }} />
            <Typography variant="body2" sx={{ color: '#78909c' }}>
              Restaurant Name <Typography component="span" sx={{ mx: 0.5, color: '#bdbdbd' }}>•</Typography> 3+ years
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: '#78909c' }}>
            <LocationOn sx={{ fontSize: 20, mr: 1, color: '#78909c' }} />
            <Typography variant="body2" sx={{ color: '#78909c' }}>
              Scottsdale, Arizona
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Tabs */}
      <Paper
        elevation={0}
        sx={{
          mt: 1,
          borderRadius: 0,
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#9e9e9e',
              '&.Mui-selected': {
                color: '#42a5f5',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#42a5f5',
              height: 3,
            },
          }}
        >
          <Tab label="About" />
          <Tab label="Cuisine Portfolio" />
        </Tabs>
      </Paper>

      {/* Tab content */}
      <Box
        sx={{
          flex: 1,
          bgcolor: '#f5f5f5',
          overflow: 'auto',
        }}
      >
        {tabValue === 0 && (
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: '#455a64',
                }}
              >
                About
              </Typography>
              <IconButton size="small">
                <Edit sx={{ fontSize: 18, color: '#42a5f5' }} />
              </IconButton>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'white',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#78909c',
                  lineHeight: 1.6,
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Id mauris pretium dignissim eget. Metus duis feugiat sed odio mattis maecenas curabitur. Nibh adipiscing senectus...
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#42a5f5',
                  mt: 1,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                See More
              </Typography>
            </Paper>
          </Box>
        )}

        {tabValue === 1 && <CuisinePortfolio />}
      </Box>
    </Box>
  );
};

export default ProfileView;
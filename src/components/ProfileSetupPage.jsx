import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  LinearProgress,
  InputAdornment,
  Paper,
} from '@mui/material';
import {
  ArrowBack,
  LocationOn,
  CalendarToday,
  Phone,
  KeyboardArrowDown
} from '@mui/icons-material';

const ProfileSetupPage = ({ onBack, onNext }) => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    preferredName: 'Doe',
    mailingAddress: 'Florida, USA',
    willingToRelocate: null,
    dateOfBirth: '09/18/96',
    phoneNumber: '+1 954 444 4444'
  });

  const handleChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  const handleRelocateChoice = (choice) => {
    setProfileData({
      ...profileData,
      willingToRelocate: choice
    });
  };

  const handleNext = () => {
    console.log('Profile data:', profileData);
    onNext(); // Navigate to the next page
  };

  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
        bgcolor: '#e8f4fc'
      }}
    >
      {/* Header with back button and title */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton
          edge="start"
          onClick={onBack}
          sx={{ p: 0, color: '#000' }}
          aria-label="back"
        >
          <ArrowBack />
        </IconButton>
        <Typography 
          variant="h6" 
          component="h1" 
          sx={{ 
            ml: 1.5, 
            fontWeight: '500', 
            color: '#333',
            fontSize: '1.1rem'
          }}
        >
          Complete Your Profile
        </Typography>
      </Box>

      {/* Progress bar */}
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={25} 
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#42a5f5',
                borderRadius: 4,
              }
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary">1/4</Typography>
      </Box>

      {/* Avatar with speech bubble */}
      <Box sx={{ 
        display: 'flex', 
        mb: 3,
        alignItems: 'flex-start'
      }}>
        <Box sx={{ 
          width: '80px', 
          height: '80px',
          flexShrink: 0
        }}>
          <img
            src="/images/avatar.png"
            alt="Avatar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
        <Box sx={{
          ml: 2,
          p: 2,
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#333',
              fontWeight: 400
            }}
          >
            Confirm your personal information on your profile.
          </Typography>
        </Box>
      </Box>

      {/* Form fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* First Name */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            First Name
          </Typography>
          <TextField
            fullWidth
            value={profileData.firstName}
            onChange={handleChange('firstName')}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: '#fff',
              }
            }}
          />
        </Box>

        {/* Last Name */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Last Name
          </Typography>
          <TextField
            fullWidth
            value={profileData.lastName}
            onChange={handleChange('lastName')}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: '#fff',
              }
            }}
          />
        </Box>

        {/* Preferred Name */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            What Is Your Preferred Name?
          </Typography>
          <TextField
            fullWidth
            value={profileData.preferredName}
            onChange={handleChange('preferredName')}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: '#fff',
              }
            }}
          />
        </Box>

        {/* Mailing Address */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Mailing Address
          </Typography>
          <TextField
            fullWidth
            value={profileData.mailingAddress}
            onChange={handleChange('mailingAddress')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn sx={{ color: '#6b7c93' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: '#fff',
              }
            }}
          />
        </Box>

        {/* Willing to Relocate */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Are You Willing To Relocate?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant={profileData.willingToRelocate === true ? "contained" : "outlined"}
              onClick={() => handleRelocateChoice(true)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.willingToRelocate === true ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.willingToRelocate === true ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Yes
            </Button>
            <Button
              fullWidth
              variant={profileData.willingToRelocate === false ? "contained" : "outlined"}
              onClick={() => handleRelocateChoice(false)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.willingToRelocate === false ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.willingToRelocate === false ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>

        {/* Date of Birth */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Date Of Birth
          </Typography>
          <TextField
            fullWidth
            value={profileData.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday sx={{ color: '#6b7c93' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <KeyboardArrowDown sx={{ color: '#6b7c93' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: '#fff',
              }
            }}
          />
        </Box>

        {/* Mobile Phone Number */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Mobile Phone Number
          </Typography>
          <TextField
            fullWidth
            value={profileData.phoneNumber}
            onChange={handleChange('phoneNumber')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone sx={{ color: '#6b7c93' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: '#fff',
              }
            }}
          />
        </Box>
      </Box>

      {/* Next button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleNext}
        sx={{
          mt: 'auto',
          py: 1.5,
          bgcolor: '#42a5f5',
          color: 'white',
          '&:hover': {
            bgcolor: '#2196f3',
          },
          textTransform: 'none',
          fontSize: '1.1rem',
          fontWeight: 500,
          borderRadius: 28,
          boxShadow: 'none',
          marginTop: 3
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default ProfileSetupPage;
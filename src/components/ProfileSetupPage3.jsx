import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  LinearProgress,
  InputAdornment,
  Paper,
  Divider
} from '@mui/material';
import {
  KeyboardArrowDown,
  ArrowBack,
  ArrowForward,
  Business,
  Work,
  AccessTime,
  FileCopy
} from '@mui/icons-material';

const ProfileSetupPage3 = ({ onBack, onNext }) => {
  const [profileData, setProfileData] = useState({
    hasJob: null,
    workplace: 'XYZ Restaurant',
    position: 'Line Cook',
    workHours: '40',
    hasResume: null,
    readyToWork: null,
    interests: [],
    hasFoodHandlersCard: null,
    culinarySchoolYears: '2',
    resumeFile: null,
    foodHandlersCardFile: null
  });

  const handleChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  const handleBooleanChoice = (field, choice) => {
    setProfileData({
      ...profileData,
      [field]: choice
    });
  };

  const handleInterestToggle = (interest) => {
    const currentInterests = [...profileData.interests];
    
    if (currentInterests.includes(interest)) {
      setProfileData({
        ...profileData,
        interests: currentInterests.filter(item => item !== interest)
      });
    } else {
      setProfileData({
        ...profileData,
        interests: [...currentInterests, interest]
      });
    }
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
        <Button
          startIcon={<ArrowBack />}
          onClick={onBack}
          sx={{ 
            p: 0, 
            color: '#000',
            minWidth: 'auto',
            textTransform: 'none',
            fontWeight: 'normal'
          }}
        >
          Complete Your Profile
        </Button>
      </Box>

      {/* Progress bar */}
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={75} 
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
        <Typography variant="body2" color="text.secondary">3/4</Typography>
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
            Confirm your background and work preferences.
          </Typography>
        </Box>
      </Box>

      {/* Form fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Currently have a job */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Do You Currently Have A Job?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant={profileData.hasJob === true ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('hasJob', true)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.hasJob === true ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.hasJob === true ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Yes
            </Button>
            <Button
              fullWidth
              variant={profileData.hasJob === false ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('hasJob', false)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.hasJob === false ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.hasJob === false ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>

        {/* Where do you work */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Where Do You Work?
          </Typography>
          <TextField
            fullWidth
            value={profileData.workplace}
            onChange={handleChange('workplace')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Business sx={{ color: '#6b7c93' }} />
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

        {/* Current position */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            What Is Your Current Position?
          </Typography>
          <TextField
            fullWidth
            value={profileData.position}
            onChange={handleChange('position')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work sx={{ color: '#6b7c93' }} />
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

        {/* Work hours */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            How Many Hours A Week Do You Work?
          </Typography>
          <TextField
            fullWidth
            value={profileData.workHours}
            onChange={handleChange('workHours')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccessTime sx={{ color: '#6b7c93' }} />
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

        {/* Has resume */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Do You Have A Resume?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant={profileData.hasResume === true ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('hasResume', true)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.hasResume === true ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.hasResume === true ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Yes
            </Button>
            <Button
              fullWidth
              variant={profileData.hasResume === false ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('hasResume', false)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.hasResume === false ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.hasResume === false ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>

        {/* Upload resume */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            mb: 1
          }}
        >
          <FileCopy sx={{ color: '#6b7c93', fontSize: 32 }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#333', textAlign: 'center' }}>
            Upload Your Resume
          </Typography>
          <Typography variant="caption" sx={{ color: '#6b7c93', textAlign: 'center' }}>
            pdf, doc, and jpeg are supported
          </Typography>
          <Button
            variant="contained"
            component="label"
            sx={{
              bgcolor: '#42a5f5',
              color: 'white',
              '&:hover': {
                bgcolor: '#2196f3',
              },
              borderRadius: 28,
              py: 1,
              px: 3,
              textTransform: 'none'
            }}
          >
            Choose File
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfileData({
                    ...profileData,
                    resumeFile: e.target.files[0]
                  });
                }
              }}
            />
          </Button>
        </Paper>

        {/* Ready to work */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Are You Ready To Work Now?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant={profileData.readyToWork === true ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('readyToWork', true)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.readyToWork === true ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.readyToWork === true ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Yes
            </Button>
            <Button
              fullWidth
              variant={profileData.readyToWork === false ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('readyToWork', false)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.readyToWork === false ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.readyToWork === false ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>

        {/* Interests */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Select The Options That You Are Interested In
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              fullWidth
              variant={profileData.interests.includes('culinary') ? "contained" : "outlined"}
              onClick={() => handleInterestToggle('culinary')}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.interests.includes('culinary') ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.interests.includes('culinary') ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Culinary
            </Button>
            <Button
              fullWidth
              variant={profileData.interests.includes('baking') ? "contained" : "outlined"}
              onClick={() => handleInterestToggle('baking')}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.interests.includes('baking') ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.interests.includes('baking') ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Baking & Pastry
            </Button>
          </Box>
        </Box>

        {/* Food handlers card */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            Do You Have A Food Handlers Card?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant={profileData.hasFoodHandlersCard === true ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('hasFoodHandlersCard', true)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.hasFoodHandlersCard === true ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.hasFoodHandlersCard === true ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Yes
            </Button>
            <Button
              fullWidth
              variant={profileData.hasFoodHandlersCard === false ? "contained" : "outlined"}
              onClick={() => handleBooleanChoice('hasFoodHandlersCard', false)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                color: profileData.hasFoodHandlersCard === false ? 'white' : '#42a5f5',
                borderColor: '#42a5f5',
                '&:hover': {
                  borderColor: '#42a5f5',
                  bgcolor: profileData.hasFoodHandlersCard === false ? '#2196f3' : 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>

        {/* Upload food handlers card */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            mb: 1
          }}
        >
          <FileCopy sx={{ color: '#6b7c93', fontSize: 32 }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#333', textAlign: 'center' }}>
            Upload Your Food Handlers Card
          </Typography>
          <Typography variant="caption" sx={{ color: '#6b7c93', textAlign: 'center' }}>
            pdf, doc, and jpeg are supported
          </Typography>
          <Button
            variant="contained"
            component="label"
            sx={{
              bgcolor: '#42a5f5',
              color: 'white',
              '&:hover': {
                bgcolor: '#2196f3',
              },
              borderRadius: 28,
              py: 1,
              px: 3,
              textTransform: 'none'
            }}
          >
            Choose File
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfileData({
                    ...profileData,
                    foodHandlersCardFile: e.target.files[0]
                  });
                }
              }}
            />
          </Button>
        </Paper>

        {/* Culinary school years */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5, color: '#6b7c93' }}>
            How Many Years Of Culinary School Have You Attended?
          </Typography>
          <TextField
            fullWidth
            value={profileData.culinarySchoolYears}
            onChange={handleChange('culinarySchoolYears')}
            variant="outlined"
            InputProps={{
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
      </Box>

      {/* Navigation buttons */}
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Button
          variant="outlined"
          onClick={onBack}
          startIcon={<ArrowBack />}
          sx={{
            py: 1.5,
            flex: 1,
            color: '#42a5f5',
            borderColor: '#42a5f5',
            borderRadius: 28,
            textTransform: 'none',
            '&:hover': {
              borderColor: '#42a5f5',
              bgcolor: 'rgba(33, 150, 243, 0.04)',
            },
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          endIcon={<ArrowForward />}
          sx={{
            py: 1.5,
            flex: 1,
            bgcolor: '#42a5f5',
            color: 'white',
            borderRadius: 28,
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#2196f3',
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSetupPage3;
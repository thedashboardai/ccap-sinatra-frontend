import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  TextField,
  Avatar,
  IconButton,
  Paper,
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  DeleteOutline,
} from '@mui/icons-material';

const ProfileSetupPage4 = ({ onBack, onSubmit }) => {
  const [profileData, setProfileData] = useState({
    bio: 'Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse habitant ornare nulla semper mi a diam proin. Facilisis risus interdum vulputate in. Integer quis facilisis porttitor elementum ac quam nunc.',
    profilePicture: null,
    profilePicturePreview: '/images/profile-placeholder.jpg' // This would be replaced with your actual uploaded image
  });

  const [profilePictureDetails] = useState({
    name: 'profilepicture.png',
    date: '10/06/2023',
    size: '321 KB'
  });

  const handleChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      
      setProfileData({
        ...profileData,
        profilePicture: file,
        profilePicturePreview: previewUrl
      });
    }
  };

  const handleDeletePicture = () => {
    setProfileData({
      ...profileData,
      profilePicture: null,
      profilePicturePreview: '/images/profile-placeholder.jpg'
    });
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
            value={100} 
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
        <Typography variant="body2" color="text.secondary">4/4</Typography>
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
            Well Done! Now upload a profile picture and fill in your bio.
          </Typography>
        </Box>
      </Box>

      {/* Form fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Profile Picture */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1, color: '#6b7c93' }}>
            Profile Picture
          </Typography>
          
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: '#fff',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={profileData.profilePicturePreview}
              alt="Profile"
              sx={{ 
                width: 50, 
                height: 50,
                mr: 2
              }}
            />
            
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                {profilePictureDetails.name}
              </Typography>
              <Typography variant="caption" sx={{ color: '#6b7c93' }}>
                {profilePictureDetails.date} · {profilePictureDetails.size}
              </Typography>
            </Box>
            
            <IconButton 
              size="small" 
              onClick={handleDeletePicture}
              sx={{ 
                color: '#f44336',
                bgcolor: '#ffebee',
                '&:hover': {
                  bgcolor: '#ffcdd2'
                }
              }}
            >
              <DeleteOutline />
            </IconButton>
          </Paper>
          
          {/* Hidden file input */}
          <input
            accept="image/*"
            type="file"
            id="profile-picture-upload"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </Box>

        {/* Bio */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1, color: '#6b7c93' }}>
            Bio
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={5}
            value={profileData.bio}
            onChange={handleChange('bio')}
            variant="outlined"
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
      <Box sx={{ display: 'flex', gap: 2, mt: 'auto', pt: 3 }}>
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
          onClick={onSubmit}
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
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSetupPage4;
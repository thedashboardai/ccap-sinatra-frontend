import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Avatar,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { Close, KeyboardArrowDown, AddAPhoto } from '@mui/icons-material';

const AddDishModal = ({ open, onClose, onAdd }) => {
  const [dishData, setDishData] = useState({
    name: '',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur elit leo lorem ac lobortis tellus sollicitudin.',
    image: null,
    imagePreview: null,
  });

  const handleChange = (field) => (event) => {
    setDishData({
      ...dishData,
      [field]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      
      setDishData({
        ...dishData,
        image: file,
        imagePreview: imageUrl,
      });
    }
  };

  const handleSubmit = () => {
    // In a real app, you would upload the image to a server
    // For now, we'll just use the preview URL
    onAdd({
      name: dishData.name,
      description: dishData.description,
      image: dishData.imagePreview || '/images/dishes/placeholder.jpg',
    });
    
    // Reset form
    setDishData({
      name: '',
      description: 'Lorem ipsum dolor sit amet consectetur. Consectetur elit leo lorem ac lobortis tellus sollicitudin.',
      image: null,
      imagePreview: null,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          maxWidth: 500,
          m: { xs: 2, sm: 3 },
        },
      }}
    >
      <DialogTitle sx={{ p: 2, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">
            Add Dish Photo
          </Typography>
          <IconButton onClick={onClose} edge="end">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 2, pb: 3 }}>
        {/* User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src="/images/profile-placeholder.jpg"
            alt="John Doe"
            sx={{ width: 32, height: 32, mr: 1.5 }}
          />
          <Typography variant="body1" fontWeight="medium">
            John Doe
          </Typography>
        </Box>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {dishData.description}
        </Typography>

        {/* Image Upload */}
        <Box
          sx={{
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            mb: 3,
            bgcolor: dishData.imagePreview ? 'transparent' : '#f5f5f5',
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: dishData.imagePreview ? 'none' : '1px dashed #ccc',
          }}
        >
          {dishData.imagePreview ? (
            <>
              <Box
                component="img"
                src={dishData.imagePreview}
                alt="Dish"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.7)',
                  },
                }}
                onClick={() => {
                  setDishData({
                    ...dishData,
                    image: null,
                    imagePreview: null,
                  });
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            </>
          ) : (
            <Button
              component="label"
              startIcon={<AddAPhoto />}
              sx={{ color: '#78909c' }}
            >
              Add Photos
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          )}
        </Box>

        {/* Dish Name Dropdown */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
          <TextField
            select
            label="Dish Name"
            value={dishData.name}
            onChange={handleChange('name')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <KeyboardArrowDown />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          >
            <MenuItem value="Sushi Platter">Sushi Platter</MenuItem>
            <MenuItem value="Quinoa Salad">Quinoa Salad</MenuItem>
            <MenuItem value="Grilled Salmon">Grilled Salmon</MenuItem>
            <MenuItem value="Vegetable Bowl">Vegetable Bowl</MenuItem>
          </TextField>
        </FormControl>

        {/* Add Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={!dishData.name || !dishData.imagePreview}
          sx={{
            bgcolor: '#42a5f5',
            color: 'white',
            py: 1,
            textTransform: 'none',
            borderRadius: 1.5,
            '&:hover': {
              bgcolor: '#2196f3',
            },
            '&.Mui-disabled': {
              bgcolor: '#e0e0e0',
              color: '#9e9e9e',
            },
          }}
        >
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddDishModal;
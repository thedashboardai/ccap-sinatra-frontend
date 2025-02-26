import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Avatar,
  Chip,
} from '@mui/material';
import { Close, MoreVert } from '@mui/icons-material';

const ViewDishModal = ({ open, onClose, dish }) => {
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
          p: 0,
          overflow: 'hidden'
        },
      }}
    >
      {/* Header with close button */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid #eee'
      }}>
        <Typography variant="h6" fontWeight="medium">
          Dish Photo
        </Typography>
        <IconButton onClick={onClose} edge="end" size="small">
          <Close />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {/* User info with timestamp */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center', 
          p: 2 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src="/images/profile-placeholder.jpg"
              alt="John Doe"
              sx={{ width: 40, height: 40, mr: 2 }}
            />
            <Typography variant="body1" fontWeight="medium">
              John Doe
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              20m
            </Typography>
            <IconButton size="small">
              <MoreVert fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Dish image */}
        <Box
          component="img"
          src={dish.image}
          alt={dish.name}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 400,
            objectFit: 'cover',
          }}
        />

        {/* Pagination dots */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          p: 1.5 
        }}>
          {[0, 1, 2, 3].map((dot) => (
            <Box
              key={dot}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: dot === 0 ? '#42a5f5' : '#e0e0e0',
                mx: 0.5
              }}
            />
          ))}
        </Box>

        {/* Dish name */}
        <Box sx={{ px: 2 }}>
          <Chip
            label={dish.name}
            sx={{
              bgcolor: '#e3f2fd',
              color: '#42a5f5',
              fontWeight: 500,
              borderRadius: 1,
              height: 32,
              mb: 2
            }}
          />
        </Box>

        {/* Dish description */}
        <Box sx={{ px: 2, pb: 3 }}>
          <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
            {dish.description}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDishModal;
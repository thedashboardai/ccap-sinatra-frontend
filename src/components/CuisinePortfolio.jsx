import React, { useState } from 'react';
import { Box, Grid, IconButton, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import AddDishModal from './AddDishModal';
import ViewDishModal from './ViewDishModal';

// Sample dish data
const initialDishes = [
  {
    id: 1,
    image: '/images/dishes/sushi1.jpg',
    name: 'Sushi Platter',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci. Elit ullamcorper sit sem scelerisque lectus. Hendrerit nisl ligula aenean duis elit sed tempor pretium.'
  },
  {
    id: 2,
    image: '/images/dishes/salad1.jpg',
    name: 'Quinoa Salad',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 3,
    image: '/images/dishes/dessert1.jpg',
    name: 'Pistachio Cake',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 4,
    image: '/images/dishes/seafood1.jpg',
    name: 'Grilled Seafood',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 5,
    image: '/images/dishes/sushi2.jpg',
    name: 'Maki Selection',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 6,
    image: '/images/dishes/salad2.jpg',
    name: 'Green Bowl',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 7,
    image: '/images/dishes/sushi1.jpg',
    name: 'Spicy Tuna Roll',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 8,
    image: '/images/dishes/salad1.jpg',
    name: 'Fresh Salad',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
  {
    id: 9,
    image: '/images/dishes/sushi2.jpg',
    name: 'Salmon Rolls',
    description: 'Lorem ipsum dolor sit amet consectetur. Eros in neque consequat risus elementum donec mattis mauris orci.'
  },
];

const CuisinePortfolio = () => {
  const [dishes, setDishes] = useState(initialDishes);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenViewModal = (dish) => {
    setSelectedDish(dish);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedDish(null);
  };

  const handleAddDish = (newDish) => {
    const updatedDishes = [
      ...dishes,
      {
        id: dishes.length + 1,
        ...newDish
      }
    ];
    setDishes(updatedDishes);
    setIsAddModalOpen(false);
  };

  return (
    <Box sx={{ py: 1, position: 'relative', height: '100%' }}>
      <Grid container spacing={1}>
        {dishes.map((dish) => (
          <Grid item xs={4} key={dish.id} sx={{ aspectRatio: '1/1' }}>
            <Box
              onClick={() => handleOpenViewModal(dish)}
              sx={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              <Box
                component="img"
                src={dish.image}
                alt={dish.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Floating Add Button */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpenAddModal}
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          bgcolor: '#42a5f5',
          '&:hover': {
            bgcolor: '#2196f3',
          },
        }}
      >
        <Add />
      </Fab>

      {/* Add Dish Modal */}
      <AddDishModal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAdd={handleAddDish}
      />

      {/* View Dish Modal */}
      {selectedDish && (
        <ViewDishModal
          open={isViewModalOpen}
          onClose={handleCloseViewModal}
          dish={selectedDish}
        />
      )}
    </Box>
  );
};

export default CuisinePortfolio;
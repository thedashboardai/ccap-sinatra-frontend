import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DishCard from '../components/portfolio/DishCard';
import AddDishModal from '../components/portfolio/AddDishModal';

const Portfolio = ({ 
  portfolioItems = [], 
  availableDishes = [],
  onDishClick,
  onAddDish
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="grid grid-cols-3 gap-1 p-1">
        {portfolioItems.map((item) => (
          <DishCard
            key={item.id}
            dish={item}
            onClick={() => onDishClick(item.id)}
          />
        ))}
        
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg"
          type="button"
        >
          <Plus className="w-8 h-8 text-gray-400" />
        </button>
      </div>

      <AddDishModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        dishes={availableDishes}
        onAdd={(data) => {
          onAddDish(data);
          setIsAddModalOpen(false);
        }}
      />
    </div>
  );
};

export default Portfolio;
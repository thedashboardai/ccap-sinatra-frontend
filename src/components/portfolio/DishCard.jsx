import React from 'react';

const DishCard = ({ dish, onClick }) => {
  const { imageUrl, name } = dish;
  
  return (
    <div 
      className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AddDishModal = ({ isOpen, onClose, dishes = [], onAdd }) => {
  const [selectedDish, setSelectedDish] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      setError(null);

      if (!file) return;

      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be less than 5MB');
        return;
      }

      setSelectedImage(file);
    };
    input.click();
  };

  const handleSubmit = () => {
    if (selectedDish && selectedImage) {
      onAdd({ dishId: selectedDish, image: selectedImage });
      onClose();
      setSelectedDish('');
      setSelectedImage(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Add Dish Photo</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <select
            value={selectedDish}
            onChange={(e) => setSelectedDish(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select a dish</option>
            {dishes.map((dish) => (
              <option key={dish.id} value={dish.id}>
                {dish.name}
              </option>
            ))}
          </select>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            {selectedImage ? (
              <div className="relative">
                <img 
                  src={URL.createObjectURL(selectedImage)} 
                  alt="Selected dish" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white"
                  type="button"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleFileSelect}
                className="w-full py-8 flex flex-col items-center"
                type="button"
              >
                <Camera className="w-12 h-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Click to upload photo
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  JPG or PNG, up to 5MB
                </p>
              </button>
            )}
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <button
            onClick={handleSubmit}
            disabled={!selectedDish || !selectedImage}
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDishModal;
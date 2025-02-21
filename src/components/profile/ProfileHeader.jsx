import React from 'react';
import { Camera } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ProfileHeader = ({ 
  profile = {},
  onProfileImageChange,
  onCoverImageChange 
}) => {
  const {
    coverPhoto,
    profilePic,
    name,
    title,
    restaurant,
    completionPercentage = 0
  } = profile;

  const handleFileSelect = (callback) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        callback(file);
      }
    };
    input.click();
  };

  return (
    <div className="relative w-full">
      <div className="w-full h-32 bg-gray-200 relative">
        <img 
          src={coverPhoto || "/api/placeholder/400/320"} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => handleFileSelect(onCoverImageChange)}
          className="absolute bottom-2 right-2 p-2 rounded-full bg-white bg-opacity-75 shadow-sm"
          type="button"
        >
          <Camera className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex items-start -mt-16">
          <div className="relative">
            <img 
              src={profilePic || "/api/placeholder/120/120"} 
              alt="" 
              className="w-24 h-24 rounded-full border-4 border-white bg-white object-cover"
            />
            <button
              onClick={() => handleFileSelect(onProfileImageChange)}
              className="absolute bottom-0 right-0 p-2 rounded-full bg-white bg-opacity-75 shadow-sm"
              type="button"
            >
              <Camera className="w-4 h-4 text-gray-700" />
            </button>
          </div>
          
          <div className="ml-4 mt-16">
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-gray-600">
              {title} {restaurant && `at ${restaurant}`}
            </p>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-2 bg-blue-50 mt-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600">Profile Completion</span>
          <span className="text-sm font-semibold">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-2 mt-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
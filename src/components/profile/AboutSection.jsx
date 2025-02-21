import React from 'react';
import { Edit2 } from 'lucide-react';

const AboutSection = ({ about, onEdit }) => {
  return (
    <div className="mt-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">About</h2>
        <button onClick={onEdit} className="text-blue-600" type="button">
          <Edit2 className="w-4 h-4" />
        </button>
      </div>
      <p className="text-gray-600 text-sm">{about}</p>
    </div>
  );
};

export default AboutSection;
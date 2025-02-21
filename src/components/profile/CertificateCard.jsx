import React from 'react';
import { ChevronRight } from 'lucide-react';

const CertificateCard = ({ certificate, onClick }) => {
  const { name, type, expiryDate } = certificate;
  
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer"
    >
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          type === 'food' ? 'bg-green-100' : 'bg-blue-100'
        }`} />
        <div className="ml-3">
          <h3 className="font-medium">{name}</h3>
          {expiryDate && (
            <p className="text-sm text-gray-500">
              Expires: {new Date(expiryDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  );
};

export default CertificateCard;
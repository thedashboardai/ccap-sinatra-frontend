import React from 'react';
import { Download } from 'lucide-react';
import ProfileHeader from '../components/profile/ProfileHeader';
import AboutSection from '../components/profile/AboutSection';
import CertificateCard from '../components/profile/CertificateCard';

const Profile = ({ 
  profile,
  certificates = [],
  onProfileUpdate,
  onCertificateClick,
  onDownloadProfile,
  onOpenToWork 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader 
        profile={profile}
        onProfileImageChange={(file) => onProfileUpdate('profilePic', file)}
        onCoverImageChange={(file) => onProfileUpdate('coverPhoto', file)}
      />
      
      <AboutSection 
        about={profile?.about} 
        onEdit={() => onProfileUpdate('about')} 
      />
      
      <div className="mt-6 px-4">
        <h2 className="text-lg font-semibold mb-4">Certificates</h2>
        <div className="space-y-3">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onClick={() => onCertificateClick(cert.id)}
            />
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="flex gap-3">
          <button 
            onClick={onDownloadProfile}
            className="flex-1 py-2 px-4 border rounded-lg flex items-center justify-center gap-2"
            type="button"
          >
            <Download className="w-4 h-4" />
            Download Profile
          </button>
          <button 
            onClick={onOpenToWork}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg"
            type="button"
          >
            Open to Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
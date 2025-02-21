import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { API_ENDPOINTS } from '../config/api';
import { handleError } from '../utils/helpers';

export const useProfile = () => {
  const { isAuthenticated } = useAuth();
  const [profile, setProfile] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch profile data
      const response = await fetch(API_ENDPOINTS.PROFILE, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setProfile(data.profile);
      setCertificates(data.certificates);
    } catch (err) {
      setError(handleError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (field, value) => {
    try {
      setError(null);
      
      const response = await fetch(API_ENDPOINTS.UPDATE_PROFILE, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ [field]: value })
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      
      return updatedProfile;
    } catch (err) {
      setError(handleError(err));
      throw err;
    }
  };

  const uploadProfileImage = async (type, file) => {
    try {
      setError(null);
      
      const formData = new FormData();
      formData.append('image', file);

      const endpoint = type === 'profile' 
        ? API_ENDPOINTS.UPLOAD_PROFILE_IMAGE 
        : API_ENDPOINTS.UPLOAD_COVER_IMAGE;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setProfile(prev => ({
        ...prev,
        [type === 'profile' ? 'profilePic' : 'coverPhoto']: data.imageUrl
      }));
      
      return data.imageUrl;
    } catch (err) {
      setError(handleError(err));
      throw err;
    }
  };

  return {
    profile,
    certificates,
    isLoading,
    error,
    updateProfile,
    uploadProfileImage,
    refreshProfile: fetchProfile
  };
};
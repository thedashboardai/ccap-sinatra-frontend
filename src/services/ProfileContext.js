import React, { createContext, useState, useContext, useEffect } from 'react';
import { profileService } from './api';

// Create context
const ProfileContext = createContext();

// Profile provider component
export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    // Default empty profile data structure
    first_name: '',
    last_name: '',
    preferred_name: '',
    mailing_address: '',
    address_line_2: null,
    city: '',
    state: '',
    zip_code: '',
    phone_number: '',
    high_school: '',
    graduation_year: '',
    willing_to_relocate: false,
    relocation_states: [],
    hours_per_week: 40,
    work_preference: [],
    current_job: false,
    current_employer: '',
    current_position: '',
    current_work_hours: 0,
    past_job: false,
    past_employer: '',
    past_position: '',
    past_work_hours: 0,
    has_resume: false,
    resume_url: '',
    ready_to_work: true,
    food_handlers_card: false,
    food_handlers_card_url: null,
    servsafe_credential: false,
    culinary_class_years: 0,
    job_interests: []
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isProfileFetched, setIsProfileFetched] = useState(false);

  // Fetch profile data
  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await profileService.getProfile();
      console.log("Fetched profile data:", data);
      setProfileData(prevData => ({
        ...prevData,
        ...data
      }));
      setIsProfileFetched(true);
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  // Update profile data (local state only)
  const updateProfileData = (newData) => {
    setProfileData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  // Save profile data to server
  const saveProfile = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await profileService.updateProfile(profileData);
      console.log("Profile update result:", result);
      return result;
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to save profile data");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Prepare context value
  const value = {
    profileData,
    updateProfileData,
    loading,
    error,
    fetchProfile,
    saveProfile,
    isProfileFetched
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the profile context
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export default ProfileContext;
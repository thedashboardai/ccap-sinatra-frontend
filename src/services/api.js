import axios from 'axios';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJo7W6NhDkFyMJv4vO3Hd9GaRPCBljrWw",
  authDomain: "sinatra-ccap.firebaseapp.com",
  projectId: "sinatra-ccap",
  storageBucket: "sinatra-ccap.firebasestorage.app",
  messagingSenderId: "628301408266",
  appId: "1:628301408266:web:fd46a78ab927033bc597f3",
  measurementId: "G-FHPB4FR785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const API_BASE_URL = 'http://localhost:3000/api';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth services
export const authService = {
  // Login user - completely rewritten to fix issues
  // Login user - fixed to properly send the Bearer token
  // Login user - fixed to properly send the Bearer token
  login: async (email, password) => {
    try {
      // Step 1: First authenticate with Firebase to get the ID token
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      
      console.log('Firebase token obtained:', idToken);
      
      // Step 2: Use that token to authenticate with the backend
      const response = await axios({
        method: 'post',
        url: `${API_BASE_URL}/auth/login`,
        data: { email, password },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        }
      });
      console.log("RR", response)
      // Store token and user data
      localStorage.setItem('token', idToken);
      
      if (response.data && response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Reset password with Firebase
  resetPassword: async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { message: 'Password reset email sent successfully.' };
    } catch (error) {
      console.error('Reset password error:', error);
      throw error;
    }
  },

  // Reset password directly with backend
  changePassword: async (email, newPassword) => {
    try {
      const response = await axios({
        method: 'put',
        url: `${API_BASE_URL}/auth/reset-password`,
        data: { email, newPassword },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Change password error:', error);
      throw error;
    }
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('user');
  },

  // Logout user
  logout: async () => {
    try {
      // Only sign out from Firebase if we're signed in
      if (auth.currentUser) {
        await auth.signOut();
      }
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local storage even if Firebase logout fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

// Profile services
export const profileService = {
  // Get user profile
  getProfile: async () => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await axios({
        method: 'get',
        url: `${API_BASE_URL}/profile`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  },

  // Update user profile
  updateProfile: async (profileData) => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await axios({
        method: 'put',
        url: `${API_BASE_URL}/profile/update`,
        data: profileData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  }
};

export default {
  auth: authService,
  profile: profileService
};
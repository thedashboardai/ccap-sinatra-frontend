// API endpoints
export const API_ENDPOINTS = {
    // Auth endpoints
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    
    // Profile endpoints
    PROFILE: '/api/profile',
    UPDATE_PROFILE: '/api/profile/update',
    UPLOAD_PROFILE_IMAGE: '/api/profile/upload/profile-image',
    UPLOAD_COVER_IMAGE: '/api/profile/upload/cover-image',
    
    // Certificate endpoints
    CERTIFICATES: '/api/certificates',
    UPLOAD_CERTIFICATE: '/api/certificates/upload',
    
    // Portfolio endpoints
    PORTFOLIO: '/api/portfolio',
    DISHES: '/api/dishes',
    UPLOAD_DISH_PHOTO: '/api/portfolio/upload'
  };
  
  // API configuration
  export const API_CONFIG = {
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // Request interceptor to add auth token
  export const addAuthHeader = (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };
  
  // Response interceptor to handle errors
  export const handleApiError = (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear auth and redirect to login
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden
          console.error('Access forbidden');
          break;
        case 404:
          // Not found
          console.error('Resource not found');
          break;
        default:
          // Other errors
          console.error('API Error:', error.response.data);
      }
    }
    return Promise.reject(error);
  };
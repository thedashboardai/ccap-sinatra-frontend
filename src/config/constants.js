// File upload constants
export const FILE_UPLOAD = {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ACCEPTED_IMAGE_TYPES: ['image/jpeg', 'image/png'],
    ACCEPTED_DOCUMENT_TYPES: ['application/pdf']
  };
  
  // Profile constants
  export const PROFILE = {
    MIN_ABOUT_LENGTH: 50,
    MAX_ABOUT_LENGTH: 500
  };
  
  // Certificate types
  export const CERTIFICATE_TYPES = {
    FOOD_HANDLER: 'food',
    CULINARY: 'culinary',
    SAFETY: 'safety',
    OTHER: 'other'
  };
  
  // Portfolio constants
  export const PORTFOLIO = {
    MAX_IMAGES_PER_DISH: 5,
    GRID_SIZES: {
      MOBILE: 3,
      TABLET: 4,
      DESKTOP: 6
    }
  };
  
  // Route paths
  export const ROUTES = {
    HOME: '/',
    PROFILE: '/profile',
    PORTFOLIO: '/portfolio',
    LOGIN: '/login'
  };
  
  // Local storage keys
  export const STORAGE_KEYS = {
    AUTH_TOKEN: 'token',
    USER_DATA: 'userData',
    THEME: 'theme'
  };
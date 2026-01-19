// Admin Configuration File
// Change the ADMIN_PASSWORD to your desired admin password

export const ADMIN_CONFIG = {
  // Change this password to whatever you want
  ADMIN_PASSWORD: "admin123",
  
  // Optional: Add more security settings
  MAX_LOGIN_ATTEMPTS: 3,
  LOCKOUT_TIME: 15 * 60 * 1000, // 15 minutes in milliseconds
};

// For production, consider moving this to environment variables
// Example: process.env.REACT_APP_ADMIN_PASSWORD
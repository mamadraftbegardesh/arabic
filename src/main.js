// Import Vercel Analytics
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({
  mode: 'production',
  debug: false
});

// Main application code will be imported here
import './app.js';

# Arabic Flashcard App

This is an Arabic vocabulary flashcard application with Vercel Web Analytics integration.

## Features

- Interactive flashcards for learning Arabic vocabulary
- User authentication with Supabase
- Progress tracking
- Dark/Light theme support
- Real-time online users counter
- Study timer
- **Vercel Web Analytics** - Track user interactions and page views

## Installation

Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel with Web Analytics enabled.

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel deploy
   ```

3. Analytics will automatically start tracking once deployed to Vercel.

## Analytics Configuration

The project uses `@vercel/analytics` package for tracking. The analytics are configured in `src/main.js`:

```javascript
import { inject } from '@vercel/analytics';

inject({
  mode: 'production',
  debug: false
});
```

### Configuration Options

- `mode`: Set to 'production' for production tracking, 'development' for testing
- `debug`: Enable console logging for debugging (set to `false` in production)

For more configuration options, see the [Vercel Analytics documentation](https://vercel.com/docs/analytics).

## Project Structure

```
.
├── index.html          # Main HTML file
├── src/
│   ├── main.js        # Entry point with analytics initialization
│   └── app.js         # Main application logic
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
└── dist/              # Build output (generated)
```

## Technologies Used

- **Vite** - Build tool and dev server
- **@vercel/analytics** - Web analytics
- **Supabase** - Backend and authentication
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with CSS variables for theming

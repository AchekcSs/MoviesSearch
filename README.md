# Movie Search App

A modern, responsive web application for discovering and exploring movies and TV shows. Built with React, Vite, and TMDB API, this application provides users with an intuitive interface to search, filter, and save their favorite content.

## 🚀 Live Demo
- https://movies-search-sigma-lime.vercel.app/

## 🎯 Overview

Movie Search App is a full-featured entertainment discovery platform that integrates with The Movie Database (TMDB) API. It allows users to search for movies and TV shows, apply advanced filters, view detailed information, manage favorites, and enjoy a seamless experience across all devices with a responsive design and dark/light theme support.

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **State Management:** React Context API
- **UI Components:** Radix UI (Dialog, Carousel, Select, etc.)
- **Icons:** Lucide React
- **HTTP Client:** Fetch API
- **External API:** The Movie Database (TMDB)
- **Package Manager:** npm
- **Version Control:** Git

## ✨ Features

### Search & Discovery
- **Movie & TV Show Search:** Full-text search across TMDB's extensive database
- **Advanced Filtering:**
  - Filter by genre
  - Filter by release year (range selection)
  - Filter by minimum rating
  - Sort results by various criteria (popularity, rating, release date, etc.)
- **Pagination:** Navigate through search results with intuitive pagination controls
- **Discover Content:** Browse content by genre and filters without search queries

### Content Details
- **Comprehensive Information:**
  - Title, release date, runtime
  - Vote average with visual rating indicator
  - Full overview/synopsis
  - Genre information
  - Content status
- **Media Gallery:**
  - Carousel view of backdrops
  - Expandable image dialog with zoom and navigation
  - Image counter showing current position in gallery
- **Video Trailers:** YouTube embedded trailer players
- **TV Show Specifics:**
  - Season listing with episode information
  - Detailed season pages with episode images and videos

### Favorites Management
- **Add/Remove Favorites:** Bookmark your preferred movies and TV shows
- **Persistent Storage:** Favorites are saved to localStorage
- **Favorites Page:** Dedicated page to view and manage all bookmarked content
- **Clear All Function:** Bulk remove all favorites with confirmation dialog
- **Responsive Bookmarking:** Visual feedback on bookmark status across the app

### User Interface
- **Theme Toggling:** Switch between dark and light modes
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop screens
  - Mobile-first approach with breakpoints at sm, md, lg, xl
- **Navigation:**
  - Header with logo, search input, theme toggle
  - Footer with links and information
  - Breadcrumb navigation on detail pages
- **Loading States:** Skeleton cards and spinners for better UX during data fetching
- **Accessibility:** Semantic HTML, ARIA labels, and keyboard navigation support

### Technical Highlights
- **Component-Based Architecture:** Modular, reusable components
- **Context API State Management:**
  - SearchContext for search queries and parameters
  - ContentContext for movie/show data
  - FavoritesContext for bookmark management
  - ThemeContext for dark/light mode
- **Custom Hooks:** `useFavorites()`, `useSearch()`, `useContent()`, `useTheme()`
- **Error Handling:** Try-catch blocks and fallback UI states
- **Optimized Performance:**
  - Memoized components with React.memo()
  - useMemo for expensive computations
  - useCallback for stable function references

## 📁 Project Structure

```
src/
├── api/                     # API integration
│   └── moviesAPI.js         # TMDB API calls
├── assets/                  # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/              # Reusable components
│   ├── ContentCard/         # Movie/show card
│   ├── ContentDetails*/     # Detail page components
│   ├── ContentList/         # Search results grid
│   ├── ContentSeasons*/     # TV season components
│   ├── ClearFavoritesButton/
│   ├── FavoritesList/
│   ├── FiltersPanel/        # Advanced filters UI
│   ├── Header/              # Top navigation
│   ├── Footer/
│   ├── Hero/                # Landing hero section
│   ├── SearchInput/
│   ├── Container/           # Layout wrapper
│   ├── ImageDialog/         # Fullscreen image viewer
│   ├── Skeleton*/           # Loading placeholders
│   ├── Typography/          # Text components
│   └── ui/                  # Radix UI wrapped components
├── contexts/                # React Context providers
│   ├── ContentContext.jsx
│   ├── FavoritesContext.jsx
│   ├── SearchContext.jsx
│   └── ThemeContext.jsx
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
│   └── utils.js
├── pages/                   # Page components
│   ├── HomePage/
│   ├── ContentDetailsPage/
│   ├── FavoritesPage/
│   └── NotFoundPage/
├── constants/               # Constants and config
│   └── tmdb.js
├── utils/                   # Helper functions
│   ├── getVisiblePages.js
│   ├── sortContent.js
│   └── scrollToTop.js
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

## 📖 Usage Guide

### Searching for Content
1. Enter a movie or TV show title in the search bar
2. Results will display in a responsive grid
3. Click on any card to view detailed information

### Using Filters
1. Click the "Filters" button on search results
2. Select desired filters:
   - **Genre:** Choose one or more genres
   - **Year:** Select a release year or range
   - **Rating:** Set minimum rating threshold
   - **Sort By:** Choose sorting method
3. Results update automatically as filters change

### Managing Favorites
1. Hover over a movie/show card and click the bookmark icon
2. View all favorites in the "Favorites" section (accessible from navigation)
3. Remove individual items by clicking the bookmark icon again
4. Clear all favorites using the "Clear Favorites" button with confirmation

### Viewing Content Details
1. Click on any movie/show card
2. View comprehensive information including:
   - Poster and backdrop images
   - Full description and metadata
   - Video trailers (if available)
   - Image gallery with zoom functionality
3. For TV shows, browse seasons and episodes

### Theme Toggle
Click the theme toggle button in the header to switch between dark and light modes. Your preference is maintained during the session.

## 🔑 Key Components

### ContentCard
Displays a movie/show in card format with poster, title, rating, and bookmark button.

### ContentDetailsPage
Main page for displaying comprehensive content information, videos, images, and season listings.

### FavoritesList
Grid view of all favorited movies and TV shows with management options.

### FiltersPanel
Advanced filtering UI for genre, year, rating, and sorting preferences.

### ImageDialog
Full-screen image viewer with navigation arrows and image counter for gallery browsing.

### ContentSeasonsList
Season list component for TV shows with clickable season cards.

## 🔌 API Integration

The application integrates with The Movie Database (TMDB) API v3. Key endpoints used:

- `GET /genre/movie/list` - Movie genres
- `GET /genre/tv/list` - TV genres
- `GET /search/movie` - Search movies
- `GET /search/tv` - Search TV shows
- `GET /discover/movie` - Discover movies with filters
- `GET /discover/tv` - Discover TV shows with filters
- `GET /{type}/{id}` - Content details with images and videos
- `GET /tv/{id}/season/{season_number}` - Season details

All requests include authorization via Bearer token stored in environment variables.

## 🎨 Styling

- **Tailwind CSS:** Utility-first CSS framework for rapid UI development
- **Responsive Design:** Mobile-first approach with breakpoints
- **Theme System:** CSS variables for dark/light mode switching
- **Custom Components:** Wrapper components around Radix UI primitives

## ⚡ Performance Optimizations

- **Code Splitting:** Route-based lazy loading
- **Memoization:** React.memo() for expensive component renders
- **Computed Values:** useMemo() for heavy calculations
- **Stable References:** useCallback() for function dependencies
- **Image Optimization:** TMDB image URLs with proper formatting
- **Skeleton Loading:** Placeholder UI during data fetching

## 🔐 Security Considerations

- **API Token:** TMDB token stored in `.env` file (not committed to repo)
- **No Backend:** Client-side application with direct API integration
- **CORS:** Requests made to TMDB API which handles CORS
- **Data Validation:** Input validation on search and filter parameters

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Anton**

- GitHub: [@AchekcSs](https://github.com/AchekcSs)
- Email: achekcss@gmail.com

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the comprehensive movie/TV data
- [React](https://react.dev/) for the powerful UI library
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI components

---

**Last Updated:** June 2026

Made with ❤️ for movie enthusiasts
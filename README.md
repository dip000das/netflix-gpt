# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign Up User, displayName and profile picture update
- BugFix: If user is not logged in, Redirect/ Browse to Login Page and vice-versa
- Ubsubscribed to the onAuthStateChange callBack
- Not adding const bcz last time it messed up with npm build on netlify
- Register on TMDB API
- Create an app & get Access token
- Get Data from TMDB now playing movies list REST API
- Custom Hook for Now Playing Movies
- Updated the Store with Movies Data
- Create a movie Slice
- Planning for Main Conatiner and Sec Container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the YT Vide
- Autoplay with mute, remove mute later
- Build Secondary Component
- Build Movie List
- Build Movie Card
- Added Movies and TV Shows
- GPT Search Feature
- FEATURE : Multi-lingual Support
- Integrate GPT API
- Get Call
- fetched gptMovie Suggestions from TMDB
- created gptSlice and added data
- Reused Movie List Component to reduce Calls
- Memoization
- Added .env file (not use bcz of github to netlify deploy)

# Personal Features

- Made posters path for Horizontal Poster for TMDB REST APi
- Changed icons using font-awesome icons library
- added Tv categories and Movie 2 more categories
- used poster pasth for TV category instead of backdrop path
- Added Recommended/ Similar List on Sub-Movie Page
- Added 2 movielist to it to make it look more Dynamic
- Working on Linking Ability to open there sub-pages also

# Browse Page

- Main Container
  - Video Background
  - VideoTitle
- Secondary Container
  - MovieList
  - cards

# Secondary Container

- MovieList - Popular, Trending, Now Playing, Horor, Genre etc
  - Cards

# Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions
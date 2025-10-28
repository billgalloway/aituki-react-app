# AiTuki React App

A React application built with Material-UI (MUI) components, recreated from Figma designs. This app features a complete digital twin assistant interface with modern UI components.

## Features

- **Modern Header Design**: Sticky header with hamburger menu and user avatar
- **Landing Content**: Hero scroller and today's activities sections
- **Bottom Navigation**: Fixed bottom navigation with Material Symbols icons
- **Material-UI Components**: Built using MUI's component library
- **Material Symbols Icons**: Light rounded icons throughout the app
- **Custom Theme**: Matches the Figma design colors and typography
- **Responsive Design**: Mobile-first approach with proper spacing and sizing
- **Horizontal Scrolling**: Hidden scroll bars for clean UI experience
- **Viewport Layout**: Proper height constraints preventing unwanted scrolling

## Design Details

The app includes:
- **Primary Color**: `#69f0f0` (cyan/turquoise)
- **Typography**: Nunito Sans font family
- **Icons**: Material Symbols Light Rounded
- **Layout**: Sticky header and bottom navigation with scrollable content
- **Components**: Header, LandingContent, BottomNavigation, IconLibrary

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd "AiTuki react"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
AiTuki react/
├── public/
│   ├── index.html          # Main HTML with Material Symbols font
│   └── manifest.json       # PWA manifest
├── src/
│   ├── index.tsx          # Main app entry point
│   ├── Header.js          # Sticky header component
│   ├── LandingContent.js  # Main content with hero scroller
│   ├── BottomNavigation.js # Bottom navigation component
│   ├── IconLibrary.js     # Reusable Material Symbols icons
│   └── IconShowcase.js    # Demo component (not used in main app)
├── package.json
├── package-lock.json
└── README.md
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Material-UI (MUI)**: Component library
- **Material Symbols**: Google's icon font
- **Emotion**: CSS-in-JS styling
- **Create React App**: Build tooling

## Components

### Header Component
- Sticky positioning at the top
- Hamburger menu with Material Symbols icon
- User avatar with notification badge
- Brand name "aiTuki"

### LandingContent Component
- Hero scroller with horizontal scrolling (hidden scroll bars)
- Today's activities section
- Program cards with images and ratings
- Floating action button for creating new goals

### BottomNavigation Component
- Fixed at bottom of viewport
- Five navigation items: Home, Target, Data, Heart, Profile
- Material Symbols icons
- Active state highlighting

### IconLibrary Component
- Centralized icon management
- Uses Material Symbols Light Rounded
- Cross-browser scroll bar hiding
- Comprehensive icon mapping

## Customization

The app uses MUI's `sx` prop for styling:
- Colors are defined in the theme
- Typography uses Nunito Sans font
- Spacing follows consistent patterns
- Border radius uses 32px for rounded corners
- Viewport height constraints prevent unwanted scrolling

## Figma Integration

This app was created from Figma designs:
- Header: `https://www.figma.com/design/DajMfwAJVdLDj6vjKbWudq/aiTuki-prototype-V01?node-id=668-21605&m=dev`
- Landing Content: `https://www.figma.com/design/DajMfwAJVdLDj6vjKbWudq/aiTuki-prototype-V01?node-id=668-22995&m=dev`
- Bottom Navigation: `https://www.figma.com/design/DajMfwAJVdLDj6vjKbWudq/aiTuki-prototype-V01?node-id=668-21625&m=dev`
- Icons: `https://www.figma.com/design/lRvQkozCtMKYOiz5Z5ZQZ9/-2.650-Outlined-and-Rounded-Icons--Community-?node-id=0-1&m=dev`

All components match the original design specifications with Material-UI implementations.

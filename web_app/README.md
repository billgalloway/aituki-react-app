# Aituki iOS App

A SwiftUI iOS application built from Figma designs, featuring a health and wellness platform with digital twin functionality.

## 🚀 Features

- **Figma-Matched Design**: Complete UI implementation matching Figma specifications
- **SwiftUI Architecture**: Modern iOS development with SwiftUI
- **Custom Design System**: Nunito Sans fonts and custom color tokens
- **Tab Navigation**: Home and Goals screens with bottom navigation
- **Component Library**: Reusable UI components with preview providers
- **Image Assets**: Properly configured Assets.xcassets with all required images

## 📱 Screens

### Home Screen
- **Header**: Fixed header with hamburger menu and avatar
- **Hero Scroller**: Horizontal scrollable cards for main programs
- **Today Scroller**: Daily activity tiles with time and details
- **Suggestion List**: Digital twin recommendations with ratings
- **Create Goal Button**: Call-to-action for new goal creation

### Goals Screen
- **Goal Cards**: Visual goal tracking with progress indicators
- **Navigation**: Seamless tab-based navigation

## 🎨 Design System

### Colors
- **Primary**: `#69f0f0` (Teal)
- **Primary Dark**: `#27cccc` (Dark Teal)
- **Text Primary**: `#1f5661` (Dark Blue-Green)
- **Background**: `#ffffff` (White)

### Typography
- **Font Family**: Nunito Sans
- **Weights**: Regular (400), Medium (500), Bold (700)
- **Sizes**: 14px, 16px, 20px with proper line heights

### Components
- **HeaderView**: Fixed header with status bar and navigation
- **HeroScroller**: Horizontal scrolling hero cards
- **TodayScroller**: Daily activity tiles
- **SuggestionList**: Recommendation cards with ratings
- **Card01**: Content card matching Figma specifications
- **BottomDock**: Tab navigation bar

## 🛠 Setup & Installation

### Prerequisites
- Xcode 15.0+
- iOS 17.0+
- XcodeGen (for project generation)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/billgalloway/aituki-IOS-app.git
   cd aituki-IOS-app
   ```

2. Install XcodeGen (if not already installed):
   ```bash
   brew install xcodegen
   ```

3. Generate Xcode project:
   ```bash
   cd ios
   xcodegen generate
   ```

4. Open the project in Xcode:
   ```bash
   open FigmaiOS.xcodeproj
   ```

5. Build and run the app in Xcode

## 📁 Project Structure

```
ios/
├── App/
│   ├── App.swift                 # Main app entry point
│   ├── MainTabView.swift         # Tab navigation
│   ├── ContentView.swift         # Home screen content
│   ├── GoalsView.swift           # Goals screen
│   ├── HomeViews.swift           # UI components
│   ├── RemoteAssets.swift        # Image asset references
│   ├── Theme.swift               # Design tokens
│   ├── Assets.xcassets/          # Image assets
│   └── Fonts/                    # Custom fonts
├── project.yml                   # XcodeGen configuration
└── FigmaiOS.xcodeproj           # Generated Xcode project
```

## 🎯 Key Components

### HeroScroller
Horizontal scrolling cards for main programs:
- Perimenopause tracking
- Yoga and Pilates
- Mindfulness or meditation
- Meal planning & Mindful eating
- Sleep routine
- Symptom tracking

### TodayScroller
Daily activity tiles with:
- Meditation (20.30am, 15 min relaxation)
- Sleep pattern (8.00 hours, 80% quality)
- Diet (12.30am, 20 min cycling)
- Adaptogen therapy (8.30am, Reishi mushroom)
- Exercise (12.30am, 20 min cycling)

### SuggestionList
Digital twin recommendations:
- Hormone therapy
- Managing your weight
- Fitness and strength
- Reducing stress
- Managing a condition

## 🔧 Development

### Preview Providers
All components include SwiftUI preview providers for easy development:
- Individual component previews
- Combined "All Components" preview
- Proper sizing and background colors

### Asset Management
- Images stored in `Assets.xcassets`
- Proper image sets with Contents.json
- RemoteAssets.swift for centralized asset references

### Design Tokens
- AppColors: Centralized color definitions
- AppFonts: Typography system
- Consistent spacing and sizing

## 📱 Requirements

- **iOS**: 17.0+
- **Xcode**: 15.0+
- **Swift**: 5.9+
- **SwiftUI**: iOS 17.0+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎨 Figma Integration

This app is built to match Figma designs exactly:
- Pixel-perfect dimensions and spacing
- Exact color values and typography
- Matching component layouts and interactions
- Proper image positioning and scaling

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

Built with ❤️ using SwiftUI and Figma design specifications.
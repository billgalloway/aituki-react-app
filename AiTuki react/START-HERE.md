# How to Start the Development Server

## Quick Start

### Option 1: Using the Startup Script (Recommended)
```bash
cd "/Users/billgalloway/Local Sites/Figma/AiTuki react"
chmod +x start-dev.sh
./start-dev.sh
```

### Option 2: Manual Start
```bash
cd "/Users/billgalloway/Local Sites/Figma/AiTuki react"
npm install  # Only needed first time or if you get dependency errors
npm start
```

### Option 3: Use the Build Folder (If dev server doesn't work)
```bash
cd "/Users/billgalloway/Local Sites/Figma/AiTuki react"
npx serve -s build -p 3000
```

## Troubleshooting

### Port Already in Use
If port 3000 is busy, try:
```bash
PORT=3001 npm start
```
Then open: `http://localhost:3001`

### Clear Cache and Reinstall
```bash
cd "/Users/billgalloway/Local Sites/Figma/AiTuki react"
rm -rf node_modules package-lock.json
npm install
npm start
```

### Check for Errors
Run the diagnostic:
```bash
node check-setup.js
```

## Viewing the Onboarding

Once the server is running:
1. Open `http://localhost:3000` (or whatever port it uses)
2. Open browser console (F12 or Cmd+Option+I)
3. Run: `localStorage.removeItem('onboardingComplete')`
4. Refresh the page

## Expected Behavior

- Server should start and automatically open your browser
- You should see "Compiled successfully!" in the terminal
- The app should load at `http://localhost:3000`
- Onboarding will show on first visit (when localStorage is empty)


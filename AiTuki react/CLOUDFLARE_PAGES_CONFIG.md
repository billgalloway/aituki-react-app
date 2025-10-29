# Cloudflare Pages Configuration

## Build Settings (configure in Cloudflare Pages dashboard)

**Build Command:** `npm run build:cloudflare`
**Build Output Directory:** `build`
**Root Directory:** `AiTuki react`

## Environment Variables
- `NODE_VERSION`: `18`
- `CI`: `false`

## Framework Preset
- **Framework:** Create React App
- **Build Command:** `npm run build:cloudflare`
- **Build Output Directory:** `build`

## Custom Headers (handled by _headers file)
The `_headers` file in the build directory will handle:
- Security headers
- Cache control for static assets
- SPA routing support

## Redirects (handled by _redirects file)
The `_redirects` file ensures proper SPA routing by redirecting all routes to index.html

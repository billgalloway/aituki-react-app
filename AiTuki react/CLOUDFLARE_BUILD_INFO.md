# Cloudflare Pages Build Configuration

This is a standard React app built with Create React App.

## Build Settings for Cloudflare Pages Dashboard:

- **Framework Preset**: Create React App
- **Root Directory**: `AiTuki react` (or leave empty if deploying from root)
- **Build Command**: `npm run build:cloudflare`
- **Build Output Directory**: `build`
- **Node.js Version**: 18

## Environment Variables:
- `NODE_VERSION`: `18`
- `CI`: `false`

## Important Notes:
- This is NOT a Cloudflare Workers project
- Do NOT use Wrangler for deployment
- Use standard Pages deployment process
- The `_headers` and `_redirects` files handle routing and caching

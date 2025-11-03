# Sushi-Themed Website

Static marketing site that showcases a fictional sushi restaurant with animated sections and a responsive layout. The project now uses Vite 7 for its development server and production build pipeline.

## Getting Started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically http://localhost:5173) that live-reloads as you edit files in `css/`, `js/`, or `index.html`.

## Available Scripts

- `npm run dev` – start the Vite development server with hot module replacement.
- `npm run build` – generate an optimized production build in `dist/`.
- `npm run preview` – serve the built assets locally to verify the production bundle.

## Structure

- `index.html` – main document wiring sections, assets, and script entry point.
- `css/` – base stylesheet plus modular section styles imported via `style.css`.
- `js/script.js` – JavaScript entry that can import assets and libraries as ES modules.
- `assets/` – imagery and SVG icons referenced throughout the site.

## Deployment Notes

When deploying, run `npm run build` and upload the contents of `dist/` to your static host. Because Vite handles asset hashing, prefer importing images through modules or placing them in `public/` if they need stable URLs.

# Sushi-Themed Website 🍣

A clean, fast, sushi-flavored landing page built with **Vite**, semantic HTML, and BEM-style CSS. Focused on great structure, accessibility, and easy deployment.

> Live demo: **[Add Netlify/Vercel/GitHub Pages link here](https://sushi-themed-website-tasos.netlify.app/)**  
> Lighthouse: [./assets/lighthouse.png]

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [BEM Naming (CSS conventions)](#bem-naming-css-conventions)
- [SEO Checklist](#seo-checklist)
- [Accessibility Checklist](#accessibility-checklist)
- [Performance Checklist](#performance-checklist)
- [Deployment](#deployment)
- [Conventional Commits](#conventional-commits)
- [License](#license)

---

## Features

- ⚡ **Vite** dev server & production build
- 🧱 **BEM** CSS for predictable styling
- 🧭 Semantic HTML5 layout (header/nav/main/section/footer)
- ♿ Accessibility-first (skip-link, focus styles, alt text)
- 🖼️ Asset pipeline via Vite (hashing & optimization)
- 🚀 Ready for GitHub Pages / Netlify / Vercel

---

## Tech Stack

- **Build:** Vite
- **UI:** HTML, CSS (BEM), vanilla JS
- **Assets:** `/assets`, processed via Vite
- **Tooling (optional):** Prettier, EditorConfig

---

## Project Structure

```
sushi-themed-website/
├─ index.html
├─ css/
│  ├─ style.css
│  └─ components/        # optional: split CSS modules per block
├─ js/
│  ├─ main.js
│  └─ modules/           # optional: smaller JS modules (menu, animations, etc.)
├─ assets/
│  ├─ images/
│  └─ icons/
├─ public/               # static files served as-is
├─ vite.config.ts|js
├─ package.json
└─ README.md
```

---

## Getting Started

```bash
# 1) install deps
npm install

# 2) run dev server
npm run dev

# 3) build for production
npm run build

# 4) preview production build locally
npm run preview
```

---

## Available Scripts

- `dev` – start Vite dev server
- `build` – production build to `dist/`
- `preview` – preview the `dist/` build locally

---

## BEM Naming (CSS conventions)

BEM = **Block – Element – Modifier**

```html
<header class="header">
  <div class="header__logo">Sushi</div>

  <nav class="header__nav" aria-label="Main">
    <ul class="header__list">
      <li class="header__item">
        <a class="header__link header__link--active" href="/">Home</a>
      </li>
      <li class="header__item">
        <a class="header__link" href="/menu">Menu</a>
      </li>
    </ul>
  </nav>

  <button class="header__cta header__cta--primary">Book</button>
</header>
```

```css
.header {
  /* block */
}
.header__logo {
  /* element */
}
.header__link--active {
  /* modifier */
}
```

Tips:

- Use **CSS variables** for design tokens: `--color-primary`, `--space-2`, etc.
- Keep components small and reusable; prefer composition over deep nesting.

---

## SEO Checklist

- [ ] `<title>…</title>` (unique & descriptive)
- [ ] `<meta name="description" content="…">`
- [ ] `<html lang="en">` (or your language)
- [ ] Open Graph: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Twitter card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Favicon & manifest icons
- [ ] Canonical URL (if needed)
- [ ] Structured data (JSON-LD) for restaurant/menu (optional)

---

## Accessibility Checklist

- [ ] Landmarks: `<header> <nav> <main id="main"> <section> <footer>`
- [ ] **Skip link**: `<a class="skip-link" href="#main">Skip to content</a>`
- [ ] Meaningful `alt` text for all images
- [ ] Visible **focus styles** for interactive elements
- [ ] Sufficient color contrast
- [ ] `aria-label` for ambiguous controls
- [ ] `prefers-reduced-motion` respected for animations

---

## Performance Checklist

- [ ] Use **WebP/AVIF** for large images (fallbacks if needed)
- [ ] `loading="lazy"` on non-critical images
- [ ] Explicit `width`/`height` to avoid CLS
- [ ] Preload critical webfonts (or use system fonts)
- [ ] Minimize JS; split into small modules
- [ ] Use **IntersectionObserver** for in-view effects (instead of heavy scroll handlers)

---

## Deployment

### GitHub Pages (recommended quick path)

1. Add `base` to `vite.config.ts` (replace with repo name):
   ```ts
   export default defineConfig({
     base: "/Sushi-Themed-Website/",
   });
   ```
2. Build: `npm run build`
3. Deploy `/dist` to `gh-pages` branch (or add a GitHub Action for automatic deploys).

### Netlify / Vercel

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- No extra config needed.

---

## Conventional Commits

Keep commit history tidy & searchable:

```
feat: add hero section with CTA
fix: correct menu link focus styles
refactor(css): extract header block and variables
docs: add README screenshots and SEO checklist
chore: add EditorConfig and Prettier config
```

---

## License

MIT © tasosbeast

---

### TODO (nice to have)

- [ ] Add dark mode (`prefers-color-scheme`)
- [ ] Add Lighthouse report screenshot to README
- [ ] Add CI deploy (GitHub Actions to Pages)
- [ ] Add simple newsletter form with HTML5 validation

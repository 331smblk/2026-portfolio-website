# Britton Snyder — Portfolio

A production-ready React + Vite portfolio, deployable to Vercel in one click.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Bundler | **Vite 5** | Near-instant HMR, optimised production builds, native ESM |
| UI | **React 18** | Concurrent features, `createRoot`, `StrictMode` |
| Routing | **React Router v6** | URL-based routing, `useParams`, `useSearchParams`, `Navigate` |
| Styles | **Single global CSS file** | Plain CSS custom properties — zero runtime overhead |
| Deploy | **Vercel** | `vercel.json` rewrites handle SPA routing |

---

## Quick Start

```bash
# Install
npm install

# Dev server — http://localhost:3000
npm run dev

# Production build → dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Project Structure

```
britton-snyder-portfolio/
├── index.html                 # Vite HTML entry (in root, not public/)
├── vite.config.js             # Vite config — vendor chunk splitting
├── vercel.json                # SPA rewrite rules for Vercel
├── .eslintrc.cjs              # ESLint config
│
├── public/
│   └── images/                # Static images served as-is (keep for fallback)
│
├── src/
│   ├── main.jsx               # React 18 createRoot + BrowserRouter
│   ├── App.jsx                # Route tree + ScrollToTop
│   │
│   ├── assets/
│   │   └── images/            # ← Images imported by Vite (hashed URLs in prod)
│   │       ├── britton-snyder.jpg
│   │       ├── fia-cover.png
│   │       ├── fia-homepage.png
│   │       ├── fia-about.png
│   │       ├── fia-team.png
│   │       └── fia-mobile.png
│   │
│   ├── data/
│   │   └── projects.js        # All content — edit here to update the portfolio
│   │
│   ├── hooks/
│   │   └── useScrollNav.js    # Nav scroll behaviour (extracted, testable)
│   │
│   ├── components/
│   │   ├── Nav.jsx            # Fixed nav — NavLink active states, scroll hook
│   │   ├── Footer.jsx         # Shared footer
│   │   ├── ProjectCard.jsx    # Card used on Home + Work pages
│   │   ├── CaseSection.jsx    # One section of a case study
│   │   ├── CaseImage.jsx      # Image or gradient placeholder + lightbox trigger
│   │   └── Lightbox.jsx       # Full-screen image overlay (React Portal)
│   │
│   ├── pages/
│   │   ├── Home.jsx           # / — hero + featured projects
│   │   ├── Work.jsx           # /work — full list + URL-based filter
│   │   ├── About.jsx          # /about — bio + skills
│   │   ├── ProjectPage.jsx    # /work/:projectId — case study
│   │   └── NotFound.jsx       # * — 404 fallback
│   │
│   └── styles/
│       └── global.css         # All styles — CSS custom properties + BEM naming
│
└── docs/
    ├── README.md              # This file
    ├── ADDING_PROJECTS.md     # How to add a new project
    ├── IMAGES.md              # Image sizing guide
    └── DEPLOYMENT.md          # Vercel deployment steps
```

---

## Routing

Uses React Router v6 `BrowserRouter` with real URL paths:

| URL | Component |
|-----|-----------|
| `/` | `Home` |
| `/work` | `Work` |
| `/work?filter=product` | `Work` (filtered) |
| `/work/:projectId` | `ProjectPage` |
| `/about` | `About` |
| `*` | `NotFound` → redirected back to `/work` |

`vercel.json` rewrites all paths to `index.html` so hard-refreshing any URL works correctly on Vercel.

---

## Why This Approach Fixes the Old Issues

The previous version managed navigation with React `useState` — clicking a project card called `showProject('p3')`, setting state. This broke in two ways:

1. **The URL never changed**, so hard-refresh or sharing a project link always landed on the home page.
2. **The Work page filter reset** whenever you navigated back from a project, because all state was in memory.

The new version:
- Uses `<Link to="/work/firearms-insurance-agent">` so the URL always reflects the page.
- Reads the project from `useParams()` — if the URL is correct, the project always loads.
- Stores the Work filter in the URL (`?filter=product`) so Back preserves it.
- `<Navigate to="/work" replace />` in `ProjectPage` handles unknown slugs gracefully.

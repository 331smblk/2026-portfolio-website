# Deploying to Vercel

## One-click deploy (recommended)

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Vite. Leave all settings at their defaults:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

That's it. `vercel.json` in the project root handles the SPA routing rewrites automatically.

---

## Manual deploy via Vercel CLI

```bash
# Install Vercel CLI globally (one-time)
npm i -g vercel

# From the project root:
vercel          # deploy to preview URL
vercel --prod   # deploy to production
```

---

## Custom domain

In the Vercel dashboard → your project → **Settings → Domains**, add your domain and follow the DNS instructions.

---

## Environment variables

This project has no environment variables. If you add any in the future:

- Prefix them with `VITE_` so Vite exposes them to the browser (e.g. `VITE_CONTACT_EMAIL`)
- Add them in Vercel dashboard → **Settings → Environment Variables**
- Access them in code with `import.meta.env.VITE_CONTACT_EMAIL`

---

## Build output

`npm run build` generates a `dist/` folder:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js      # App code
│   ├── vendor-[hash].js     # React + React Router (separate chunk for caching)
│   ├── index-[hash].css
│   └── fia-cover-[hash].png # Hashed image assets
└── images/                  # public/ images (served as-is)
```

The vendor chunk is split from app code so that React/React Router stay cached in the browser even when you push new portfolio content.

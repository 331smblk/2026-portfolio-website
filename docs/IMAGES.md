# Images Guide

## Where images live

```
src/assets/images/     ← import these in projects.js or page files
                         Vite hashes them → best caching, works on Vercel

public/images/         ← served at /images/filename.png as-is
                         Use for images referenced in CSS or meta tags
```

For all portfolio images, use `src/assets/images/` and import them.

---

## Current images

| File | Used in |
|------|---------|
| `britton-snyder.jpg` | About page portrait |
| `fia-cover.png` | FIA project card + case study hero |
| `fia-homepage.png` | FIA case study — homepage screenshot |
| `fia-about.png` | FIA case study — about page screenshot |
| `fia-team.png` | FIA case study — team page screenshot |
| `fia-mobile.png` | FIA case study — mobile views |

---

## Recommended sizes

| Usage | Size | Aspect ratio |
|-------|------|-------------|
| Project card cover | 1200 × 750px | 16:10 |
| Project hero cover | 2400 × 1050px | 16:7 |
| Case study full-width | 2400 × 1350px | 16:9 |
| Case study 2-col | 1200 × 900px | 4:3 |
| About portrait | 1000 × 1250px | 4:5 |

---

## Lightbox images

Images with `zoomable: true` open at full resolution in the lightbox. Provide 2× or 3× display size for crisp display on retina screens.

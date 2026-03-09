# Adding a New Project

All content lives in `src/data/projects.js`. The pages update automatically.

---

## Step 1 — Import your images

At the top of `projects.js`, add your image imports:

```js
import myProjectCover from '../assets/images/my-project-cover.png'
import myProjectScreen from '../assets/images/my-project-screen.png'
```

Place the image files in `src/assets/images/`. Vite will hash and optimise them automatically at build time.

---

## Step 2 — Add your project object

```js
{
  id: 'my-project-slug',       // kebab-case — becomes the URL: /work/my-project-slug
  tag: 'Product Design',       // shown on the card pill
  category: 'product',         // filter: 'product' | 'website' | 'branding' | 'print'
  title: 'My Project',
  summary: 'Long description for the home page card.',
  shortSummary: 'Shorter version for the work page card.',
  year: '2024',
  coverImage: myProjectCover,  // imported above, or null for a gradient placeholder
  placeholderIndex: 1,         // 1–5 — picks a gradient colour if coverImage is null
  meta: [
    { label: 'Company', value: 'Client Name' },
    { label: 'Role',    value: 'Lead Designer' },
    { label: 'Year',    value: '2024' },
  ],
  sections: [ /* see below */ ],
}
```

---

## Step 3 — Write your sections

Each section supports these fields:

```js
{
  label: 'Overview',           // left-column sticky label
  title: 'Section heading',    // h2
  body: [                      // paragraphs — <strong> tags work
    'First paragraph.',
    'Second paragraph with <strong>bold text</strong>.',
  ],
  outcomes: [                  // numbered list — <strong> tags work
    '<strong>Key metric</strong> — description.',
  ],

  // Single gradient placeholder image
  image: {
    label: 'Caption text',
    gradient: 'linear-gradient(135deg, #D4C4B0 0%, #C4A882 100%)',
    wide: true,                // optional — 16:7 instead of 16:9
  },

  // Two side-by-side gradient placeholders
  images2col: [
    { label: 'Left caption',  gradient: 'linear-gradient(...)' },
    { label: 'Right caption', gradient: 'linear-gradient(...)' },
  ],

  // Real photos with lightbox
  caseImages: [
    { src: myProjectScreen, alt: 'Homepage screenshot', zoomable: true },
    {
      type: '2col',
      images: [
        { src: myProjectScreen, alt: 'Detail view', zoomable: true },
        { src: myProjectScreen, alt: 'Mobile view', zoomable: true },
      ],
    },
  ],
}
```

---

## Step 4 — Feature on the home page

The home page shows the first **3 projects** in the array. Move your project to the top 3 to feature it.

---

## Step 5 — Add a new filter category (optional)

In `src/pages/Work.jsx`:

```js
const FILTERS = [
  ...
  { label: 'Motion', value: 'motion' }, // ← add here
]
```

Set the matching `category: 'motion'` in your project object.

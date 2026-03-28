// ─────────────────────────────────────────────────────────────────
// projects.js  —  All portfolio project content
//
// HOW TO ADD A PROJECT:
//   1. Add an object to the `projects` array below
//   2. Import your cover image at the top of this file (Vite handles
//      hashing + optimisation automatically)
//   3. The Work page and Home page update automatically
// ─────────────────────────────────────────────────────────────────

// Cover / case-study image imports
import fiaCover    from '../assets/images/fia-cover.jpg'
import fiaHomepage from '../assets/images/fia-homepage.jpg'
import fiaAbout    from '../assets/images/fia-about.jpg'
import fiaTeam     from '../assets/images/fia-team.jpg'
import fiaMobile   from '../assets/images/fia-mobile.jpg'
import aaCover     from '../assets/images/aa-cover.jpg'
import aaCdSnapShot from '../assets/images/aa-cd-snapshot-profile.jpg'
import aaCdGarage    from '../assets/images/aa-cd-garage.jpg'
import aaCdService   from '../assets/images/aa-cd-service.jpg'
import aaProcess   from '../assets/images/aa-process.jpg'
import aaProcessCards  from '../assets/images/aa-process-2.jpg'
import aaProcess3 from '../assets/images/aa-process-3.jpg'
import dnCover        from '../assets/images/dn-cover.jpg'
import twisterCover    from '../assets/images/cover-twister-special.jpg'
import twisterConcept1 from '../assets/images/twister-special-concept-1.jpg'
import twisterConcept2 from '../assets/images/twister-special-concept-2.jpg'
import twisterBrochure from '../assets/images/brochure-photos-retouched.jpg'
import twister2up      from '../assets/images/twister-special-2up.jpg'
import dnFullSpread   from '../assets/images/dn-full-spread.jpg'
import dnLayoutBack   from '../assets/images/dn-layout-back.jpg'
import dnInsideLayout from '../assets/images/dn-inside-layout.jpg'
import dnCrest        from '../assets/images/dn-crest.jpg'

export const projects = [

  // ── 1. MLS Data Feed Manager ─────────────────────────────────
  {
    id: 'mls-data-feed-manager',
    tag: 'Product Design',
    category: 'product',
    title: 'RELI - MLS Data Feed Manager',
    hidden: true,
    summary:
      'MLS data powers the listings that agents, brokers, and vendors rely on every day — but managing the connections between them was anything but simple. I led the design of a web-based API management tool that gave administrators a single consolidated view of all data feeds, and gave agents and brokers the self-service controls they had never had before.',
    shortSummary:
      'A web API management tool that consolidated MLS data feed configuration into one place — replacing support-heavy workflows with self-service controls for agents, brokers, and vendors.',
    year: '2025–2026',
    coverImage: null,
    placeholderIndex: 1,
    meta: [
      { label: 'Role',     value: 'Lead UI/UX Designer' },
      { label: 'Timeline', value: '2025–2026' },
      { label: 'Platform', value: 'Web Application' },
      { label: 'Tools',    value: 'Figma, Miro' },
    ],
    sections: [
      {
        label: 'Overview',
        title: 'One place to see and control every data connection',
        body: [
          // TODO: Describe the product context and your role in more detail.
          'MLS data is the backbone of the real estate industry — but the tools used to manage how that data flows to agents, brokers, and vendors had not kept pace with the complexity of modern data operations.',
          'I led the end-to-end design of a <strong>web-based API management platform</strong> that gave administrators a single consolidated view of every data feed, its status, and its configuration — while unlocking self-service capabilities for the agents and brokers who depended on that data daily.',
        ],
      },
      {
        label: 'Problem',
        title: 'Everything ran through support — nothing was self-service',
        body: [
          // TODO: Add specific pain points, quotes from research, or metrics.
          'Configuring and managing MLS data feed connections required navigating a fragmented set of tools with no unified view. When something broke or needed to change, agents and brokers had no way to act on it themselves — every request went through a support team, creating bottlenecks and delays on both sides.',
          'The people closest to the data — the agents and brokers relying on it for their business — had the least visibility into its status and the least control over how it was configured. <strong>The tool was built for administrators, not the people it was supposed to serve.</strong>',
        ],
        images2col: [
          { label: 'Existing workflow mapping',      gradient: 'linear-gradient(135deg, #D4C8BC 0%, #C0AA90 100%)' },
          { label: 'Support volume analysis',        gradient: 'linear-gradient(135deg, #C8CED4 0%, #98A8BC 100%)' },
        ],
      },
      {
        label: 'Discovery',
        title: '[TODO: Add your research approach and key insight]',
        body: [
          // TODO: Replace with your actual research methods and findings.
          '[Placeholder] Describe how you approached discovery — who you spoke with, what you observed, and the key insight that shaped the design direction.',
        ],
        image: {
          label: 'Research synthesis',
          gradient: 'linear-gradient(135deg, #C8D4CC 0%, #98B8A8 100%)',
        },
      },
      {
        label: 'Design Process',
        title: '[TODO: Add your design approach]',
        body: [
          // TODO: Describe your process — IA, wireframing, Figma prototyping, Miro workshops, etc.
          '[Placeholder] Walk through how you moved from insight to solution — the frameworks, tools, and decisions that shaped the final design.',
        ],
        images2col: [
          { label: 'Miro — information architecture', gradient: 'linear-gradient(135deg, #D0C8D4 0%, #A898BC 100%)' },
          { label: 'Figma — wireframe iteration',     gradient: 'linear-gradient(135deg, #C8D0D8 0%, #98A8C0 100%)' },
        ],
      },
      {
        label: 'Solution',
        title: 'A consolidated view with self-service controls',
        body: [
          // TODO: Describe key screens and interaction patterns.
          'The final design centered on a <strong>single consolidated dashboard</strong> that surfaced the status of all MLS data connections at a glance. Feed configuration — previously buried in support queues — was redesigned as a guided self-service workflow that agents and brokers could complete without assistance.',
          '[Placeholder] Add detail on specific features, design decisions, or screens that were central to the solution.',
        ],
        image: {
          label: 'Data Feed Manager — dashboard view',
          gradient: 'linear-gradient(135deg, #C4CED8 0%, #8AAABB 100%)',
          wide: true,
        },
      },
      {
        label: 'Impact',
        title: '[TODO: Add measurable outcomes]',
        body: [
          // TODO: Replace placeholders with real outcomes once available or NDA-approved.
          '[Placeholder] Describe the impact of the shipped product — adoption rate, support ticket reduction, time saved, or qualitative feedback.',
        ],
        outcomes: [
          '[Placeholder] Reduced inbound support requests related to feed configuration.',
          '[Placeholder] Agents and brokers could complete feed setup independently for the first time.',
          '<strong>Key impact:</strong> A single consolidated view of all MLS data feeds — giving agents, brokers, and vendors clarity and control they never had before.',
        ],
      },
    ],
  },

  // ── 2. AutoAlert CXM Customer Dashboard ──────────────────────
  {
    id: 'autoalert-cxm-dashboard',
    tag: 'Product Design',
    category: 'product',
    title: 'AutoAlert CXM Customer Dashboard',
    summary:
      'Dealership employees interact with dozens of customers each day, but the information they needed to understand those customers was scattered across multiple areas of the platform. I designed a unified Customer Dashboard that consolidated the full customer relationship into a single, mobile-first view — accessible anywhere a customer name appears in CXM.',
    shortSummary:
      'A unified Customer Dashboard that consolidated scattered customer data into one scannable view — accessible anywhere inside CXM.',
    year: '2021–2022',
    coverImage: aaCover,
    placeholderIndex: 6,
    meta: [
      { label: 'Company',  value: 'AutoAlert' },
      { label: 'Role',     value: 'UI/UX Designer' },
      { label: 'Years',    value: '2021–2022' },
      { label: 'Platform', value: 'Web & Mobile Application' },
    ],
    sections: [
      {
        label: 'Overview',
        title: 'A unified view of the customer',
        body: [
          'Dealership employees interact with dozens of customers each day, but the information they needed to understand those customers was scattered across multiple areas of the CXM platform.',
          'Sales history, service records, notes, contact details, and customer value metrics all existed in different features. When employees needed to understand a customer, they had to navigate between several screens to piece together the full picture.',
          'In fast-paced dealership environments, this created a major challenge. Salespeople, managers, and service staff often lacked the context needed to continue a conversation or assist a customer effectively — and without a clear view of the customer journey, handoffs between employees frequently felt disconnected and inefficient.',
        ],
      },
      {
        label: 'Problem',
        title: 'The full picture required too many screens',
        body: [
          'Each feature within CXM contained useful data, but there was no centralized location where dealership staff could quickly understand the full customer relationship.',
          'Employees navigating between sales history, service records, notes, and contact details lost valuable time and context — especially in the middle of an active customer interaction on the showroom floor.',
        ],
      // image: {
      //   label: 'Customer data scattered across CXM features',
      //  gradient: 'linear-gradient(135deg, #D8CCC0 0%, #C4AA90 100%)',
      // },
      },
      {
        label: 'Investigation',
        title: "Employees didn't need more data — they needed a faster way to read it",
        body: [
          'To better understand the problem, I conducted an audit of the CXM platform to identify all sources of customer data and how employees accessed that information.',
          'While each feature contained useful data, there was no centralized location where dealership staff could quickly understand the full customer relationship.',
          "Through this analysis, a clear insight emerged: <strong>employees didn't need more data — they needed a fast, scannable way to understand the customer at a glance.</strong>",
        ],
        //images2col: [
        //  { label: 'Platform audit — data sources', gradient: 'linear-gradient(135deg, #D4C8B8 0%, #BCA888 100%)' },
        //  { label: 'Employee workflow mapping',      gradient: 'linear-gradient(135deg, #C8CCD4 0%, #98A4B8 100%)' },
        //],
      },
      {
        label: 'Design Approach',
        title: 'Mobile-first, modular by design',
        body: [
          'The opportunity was to create a unified interface that consolidated the most important customer information into one place.',
          'Because dealership employees often work away from their desks, I approached the solution using a <strong>mobile-first design strategy</strong>. Designing for smaller screens forced prioritization of the information users needed most when interacting with a customer.',
          'To support quick scanning, the interface was structured using a <strong>modular card system</strong> that grouped related information together — making it easy to locate specific details without reading through a dense single-column layout.',
        ],
        caseImages: [
          { src: aaProcess, alt: 'Customer Dashboard — design process sketch', zoomable: true },
          {type: '2col', images: [
            { src: aaProcessCards,  alt: 'Customer Dashboard — vehicle garage view',  zoomable: true  },
            { src: aaProcess3, alt: 'Customer Dashboard — design process sketch', zoomable: true },
          ]}
        ],
      },
      {
        label: 'Solution',
        title: 'One dashboard, accessible everywhere',
        body: [
          'The final solution was a Customer Dashboard accessible anywhere a customer name appears within the CXM platform. This allowed dealership employees to instantly open a consolidated view of the customer <strong>without leaving their workflow</strong>.',
          'The dashboard surfaces key information including contact information, sales history, service history, customer notes, and customer value — organized into a modular, card-based layout so employees can quickly scan the most important details and determine the next action.',
        ],
        caseImages: [
          {
            src: aaCdSnapShot,
            alt: 'Customer Dashboard — customer snapshot and profile view',
            zoomable: true,
          },
          {
            type: '2col',
            images: [
              { src: aaCdGarage,  alt: 'Customer Dashboard — vehicle garage view',  zoomable: true },
              { src: aaCdService, alt: 'Customer Dashboard — service history view', zoomable: true },
            ],
          },
        ],
      },
      {
        label: 'Impact',
        title: 'Context, without the context-switching',
        body: [
          'The Customer Dashboard gave dealership staff a single place to understand the context of any customer interaction. Instead of navigating multiple CXM features, employees could now quickly access customer notes, history, and value from one interface.',
        ],
        outcomes: [
          'Eliminated the need to navigate multiple CXM screens to understand a single customer — all key context available in one view.',
          'Improved visibility across departments, giving sales, service, and management a shared understanding of the customer relationship.',
          'Helped employees provide more informed and seamless customer experiences, particularly during handoffs between staff.',
        ],
      },
      {
        label: 'Reflection',
        title: 'Mobile-first as a design constraint, not just a target',
        body: [
          'This project reinforced the value of mobile-first thinking when designing enterprise software. <strong>Designing for smaller screens required prioritizing the most critical information</strong> and eliminating unnecessary complexity — discipline that improved the desktop experience as a result.',
          'The modular card-based layout also created a flexible system that scaled naturally from mobile to desktop while keeping the interface easy to scan at any size.',
        ],
      },
    ],
  },

  // ── 3. Firearms Insurance Agent ───────────────────────────────
  {
    id: 'firearms-insurance-agent',
    tag: 'Website',
    category: 'website',
    title: 'Firearms Insurance Agent',
    summary:
      'A niche insurance agency specializing in coverage for firearm manufacturers needed a professional online presence — built and launched in three weeks. A clean, credibility-first WordPress site that gave potential clients a clear path from discovery to contact.',
    shortSummary:
      'Designed and built a responsive WordPress website in three weeks for a niche insurance agency — giving firearm manufacturers a clear path to specialized coverage.',
    year: '2014',
    coverImage: fiaCover,
    placeholderIndex: 3,
    meta: [
      { label: 'Company',    value: 'Firearms Insurance Agent' },
      { label: 'Role',       value: 'Independent Web Consultant' },
      { label: 'Timeline',   value: '3 Weeks' },
      { label: 'Technology', value: 'WordPress' },
    ],
    sections: [
      {
        label: 'Overview',
        title: 'A niche agency, zero web presence',
        body: [
          'A small insurance agency in Grain Valley, Missouri specializing in coverage for firearm manufacturers needed a professional online presence to attract new clients and establish credibility in a niche market. I was engaged as an independent consultant to <strong>design and build a responsive WordPress website</strong> that clearly communicated their services and made it easy for potential clients to get in touch.',
        ],
      },
      {
        label: 'Problem',
        title: 'Invisible in a specialized market',
        body: [
          "The company had no effective web presence, making it difficult for firearm manufacturers to discover their specialized insurance services. Without a site, the agency had no way to introduce their team, explain their coverage offerings, or provide a simple path for potential clients to reach them.",
          "The challenge was compounded by the niche nature of the market — generic insurance messaging wouldn't resonate. The site needed to speak directly to <strong>firearm manufacturers</strong> and signal that this agency understood their specific coverage needs.",
        ],
      },
      {
        label: 'Solution',
        title: 'Built for clarity, launched in three weeks',
        body: [
          'Working closely with the agency, I designed and developed a responsive WordPress website optimized for both desktop and mobile users. The site architecture focused on <strong>clarity and quick access to key information</strong>.',
          '<strong>Home</strong> — A concise overview of the company with a clear call-to-action for contacting the agency.',
          "<strong>About</strong> — Profiles of the insurance agents and background on the company, building personal trust with prospective clients.",
          "<strong>Coverage</strong> — A breakdown of the insurance services offered, with emphasis on workers' compensation coverage for manufacturers.",
          '<strong>Blog</strong> — A content section designed to support search visibility and keep the site active in Google search results.',
        ],
        caseImages: [
          { src: fiaHomepage, alt: 'FIA homepage on desktop',    zoomable: true },
          {
            type: '2col',
            images: [
              { src: fiaAbout, alt: 'FIA about page on desktop', zoomable: true },
              { src: fiaTeam,  alt: 'FIA team specialists page',  zoomable: true },
            ],
          },
          { src: fiaMobile, alt: 'FIA mobile views', zoomable: true },
        ],
      },
      {
        label: 'Outcomes',
        title: 'From invisible to discoverable',
        outcomes: [
          'Delivered a fully responsive, professional website in <strong>three weeks</strong> — from initial brief to launch-ready build.',
          'The agency gained a <strong>credible digital presence</strong> tailored to firearm manufacturers, filling a gap that had been limiting client acquisition.',
          'Blog infrastructure was put in place to support <strong>ongoing SEO</strong> and long-term search visibility in a competitive niche.',
        ],
      },
    ],
  },

  // ── 4. Twister Special Posters ───────────────────────────────
  {
    id: 'twister-special-posters',
    tag: 'Photography & Graphic Design',
    tags: ['Photography', 'Graphic Design'],
    category: 'photography',
    title: '2008 Twister Special Mustang Posters',
    summary:
      'Jeff Yergovich — the world-renowned Shelby Mustang restoration expert — struck a deal with Ford Motor Company to build a limited production run of 2008 Twister Special Mustangs, reviving a legendary nameplate. I collaborated with his team at R&A Motorsports to photograph their concept vehicle and design a series of posters that embodied the Twister Special brand.',
    shortSummary:
      'Photography and poster design for a limited-production 2008 Twister Special Mustang built in partnership with Ford Motor Company.',
    year: '2007',
    coverImage: twisterCover,
    placeholderIndex: 2,
    meta: [
      { label: 'Client',   value: 'R&A Motorsports — Jeff Yergovich' },
      { label: 'Role',     value: 'Photographer & Graphic Designer' },
      { label: 'Year',     value: '2007' },
      { label: 'Tools',    value: 'Adobe Photoshop, InDesign' },
    ],
    sections: [
      {
        label: 'Overview',
        title: 'Bringing back a Mustang legend',
        body: [
          'Jeff Yergovich is one of the most respected names in Shelby Mustang restoration. When he secured a deal with Ford Motor Company to produce a limited run of 25 <strong>2008 Twister Special Mustangs</strong> — resurrecting a legendary nameplate first introduced in 1970 — he needed photography and print collateral that lived up to the car\'s heritage.',
          'I was brought in to photograph the concept vehicle and translate that visual material into a series of posters that could represent the Twister Special brand at events, in showrooms, and beyond.',
        ],
      },
      {
        label: 'Photography',
        title: 'Capturing the concept vehicle',
        body: [
          'Working on-site with the R&A Motorsports team in Lee\'s Summit, Missouri, I photographed the Twister Special concept vehicle — focusing on angles and lighting that highlighted the car\'s aggressive stance, custom detailing, and the visual cues that tied it back to the original 1970 build.',
          'The photography needed to do two things at once: <strong>document the vehicle accurately</strong> for the client, and <strong>serve as the primary visual asset</strong> for the poster series.',
        ],
        caseImages: [
          { src: twisterBrochure, alt: 'Twister Special — concept vehicle photography', zoomable: true, wide: true },
        ],
      },
      {
        label: 'Poster Design',
        title: 'A series built around the brand',
        body: [
          'Using the original photography as the foundation, I designed a series of posters that communicated the limited-production nature of the vehicle and the weight of the Twister Special legacy.',
          'Typography, layout, and color were chosen to reflect both the <strong>muscle car heritage</strong> of the nameplate and the premium positioning of a Ford-partnered limited run — the kind of collateral that belonged in a showroom alongside the car itself.',
        ],
        caseImages: [
          { src: twister2up, alt: 'Twister Special — poster 2-up view', zoomable: true, natural: true },
          {
            type: '2col',
            images: [
              { src: twisterConcept1, alt: 'Twister Special — poster variant A', zoomable: true, natural: true },
              { src: twisterConcept2, alt: 'Twister Special — poster variant B', zoomable: true, natural: true },
            ],
          },
        ],
      },
      {
        label: 'Outcomes',
        title: 'Print collateral for a limited legend',
        outcomes: [
          'Delivered original vehicle photography used across all print and promotional materials for the Twister Special launch.',
          'Designed a poster series representing the limited-production run at events and in showroom settings.',
          'Contributed to the visual identity of a Ford-partnered vehicle revival with direct ties to Mustang history.',
        ],
      },
    ],
  },

  // ── 5. Decadent Nation Album Cover ───────────────────────────
  {
    id: 'decadent-nation-album-cover',
    hidden: true,
    tag: 'Print',
    category: 'print',
    title: 'Decadent Nation Album Cover',
    summary:
      'Album cover design for Columbia, Missouri rock band Decadent Nation — including a hand-illustrated band logo, original photography, and full print layout across cover, back, inside spread, and CD disc.',
    shortSummary:
      'Album cover design for a Columbia, MO rock band — hand-illustrated logo, original photography, and full print layout.',
    year: '2010',
    coverImage: dnCover,
    placeholderIndex: 5,
    meta: [
      { label: 'Client', value: 'Decadent Nation' },
      { label: 'Role',   value: 'Graphic Designer' },
      { label: 'Year',   value: '2010' },
      { label: 'Tools',  value: 'Adobe Photoshop, Illustrator, InDesign' },
    ],
    sections: [
      {
        label: 'Overview',
        title: 'A visual identity for a band with something to say',
        body: [
          'I collaborated with Columbia, Missouri rock band Decadent Nation to design the album cover for one of their releases. Working closely with lead vocalist Colin LaVaute, I created a <strong>custom hand-drawn band logo</strong> and incorporated it into the final album artwork.',
          "The design combined photography captured by the band's lead vocalist with an original photo I produced specifically for the cover, creating a bold visual identity that reflected the band's high-energy, politically charged rock sound.",
        ],
        caseImages: [
          { src: dnCover, alt: 'Decadent Nation — album cover', zoomable: true },
        ],
      },
      {
        label: 'Contribution',
        title: 'From logo to print-ready layout',
        body: [
          "The project spanned every visual touchpoint of the physical release — logo design, cover artwork, back panel, inside spread, and CD disc label. Each element was designed as part of a cohesive system that carried the band's identity across the full package.",
        ],
        outcomes: [
          'Hand-illustrated the Decadent Nation band logo.',
          'Designed the album cover layout and typography.',
          'Integrated band-provided and original photography into the final artwork.',
          'Prepared all final assets using Photoshop, Illustrator, and InDesign.',
        ],
      },
      {
        label: 'Final Work',
        title: 'Full album package',
        body: [
          'The complete release included front cover, back panel with track listing and credits, an inside lyric spread, and the CD disc label — all unified by the custom logo and visual language developed for the project.',
        ],
        caseImages: [
          { src: dnFullSpread,   alt: 'Decadent Nation — full CD spread layout',     zoomable: true },
          {
            type: '2col',
            images: [
              { src: dnLayoutBack,   alt: 'Decadent Nation — back cover and spine', zoomable: true },
              { src: dnInsideLayout, alt: 'Decadent Nation — inside lyric layout',  zoomable: true },
            ],
          },
          { src: dnCrest, alt: 'Decadent Nation — CD disc label with band crest', zoomable: true },
        ],
      },
    ],
  },

]

// Visible projects — hidden: true projects are excluded from all listings
export const visibleProjects = projects.filter((p) => !p.hidden)

// Featured = first 3 visible projects shown on the home page
export const featuredProjects = visibleProjects.slice(0, 3)

// Look up a single project by its URL slug (includes hidden — direct URLs still work)
export function getProjectById(id) {
  return projects.find((p) => p.id === id) ?? null
}

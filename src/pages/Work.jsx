import { useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { visibleProjects as projects } from '../data/projects.js'

const ALL_FILTERS = [
  { label: 'All',            value: 'all'      },
  { label: 'Product Design', value: 'product'  },
  { label: 'Website',        value: 'website'  },
  { label: 'Branding',       value: 'branding' },
  { label: 'Print',          value: 'print'    },
]

// Derive which categories have at least one visible project
const activeCategories = new Set(projects.map((p) => p.category))

// Only show filters where the category exists (always show "All")
const FILTERS = ALL_FILTERS.filter(
  (f) => f.value === 'all' || activeCategories.has(f.value)
)

/**
 * Work
 *
 * Full project list with category filter buttons.
 * Filter buttons are derived from visible projects — categories with no
 * matching projects are automatically hidden.
 *
 * Filter state lives in the URL as ?filter=product so that:
 *   - The browser back button preserves the last active filter
 *   - Filtered URLs are shareable / bookmarkable
 */
export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeFilter = searchParams.get('filter') || 'all'

  const visible =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  function setFilter(value) {
    if (value === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ filter: value })
    }
  }

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="work-hero">
        <h1 className="work-hero__heading">
          Selected
          <br />
          <em>Work</em>
        </h1>
        <p className="work-hero__sub">
          A collection of product design, web, and branding work across enterprise
          data, fintech, and B2B SaaS.
        </p>
      </section>

      {/* ── FILTERS + GRID ── */}
      <div className="work-grid">
        <div className="work-filters" role="group" aria-label="Filter projects by category">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => setFilter(f.value)}
              aria-pressed={activeFilter === f.value}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-list">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

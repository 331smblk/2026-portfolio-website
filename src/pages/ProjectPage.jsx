import { useParams, Link, Navigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CaseSection from '../components/CaseSection.jsx'
import { getProjectById } from '../data/projects.js'

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13 8H3M3 8L7 4M3 8L7 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Gradient map for cover placeholder
const COVER_GRADIENTS = {
  1: 'linear-gradient(135deg, #D4C4B0 0%, #C4A882 100%)',
  2: 'linear-gradient(135deg, #C8D4CC 0%, #9BB5A8 100%)',
  3: 'linear-gradient(135deg, #D0C8D8 0%, #A89EC0 100%)',
  4: 'linear-gradient(135deg, #D8C8B8 0%, #B89878 100%)',
  5: 'linear-gradient(135deg, #C4CCD8 0%, #889BB5 100%)',
  6: 'linear-gradient(135deg, #C8C4B8 0%, #A09878 100%)',
}

/**
 * ProjectPage
 *
 * Case study view for a single project.
 *
 * The project is looked up from the `:projectId` URL parameter — no
 * prop drilling, no state management. If the slug doesn't match any
 * project in the data file, the user is redirected to /work.
 *
 * The "Back" button uses the browser's native history.back() so it
 * returns to exactly where the user came from (Work page with its
 * active filter preserved, or Home).
 */
export default function ProjectPage() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  // Unknown slug → redirect to /work rather than a blank or broken page
  if (!project) {
    return <Navigate to="/work" replace />
  }

  const coverGradient = COVER_GRADIENTS[project.placeholderIndex] || COVER_GRADIENTS[1]

  return (
    <>
      {/* ── PROJECT HERO ── */}
      <div className="project-hero">
        {/* Back button — uses browser history so the Work page filter is preserved */}
        <button
          id="project-back-btn"
          className="project-back"
          onClick={() => window.history.back()}
          type="button"
        >
          <ArrowLeft /> Back
        </button>

        <div className="project-hero__grid">
          <div>
            <span className="project-hero__tag">{project.tag}</span>
            <h1 className="project-hero__title">{project.title}</h1>
          </div>
          <div className="project-hero__meta">
            {project.meta.map((row) => (
              <div className="project-meta-row" key={row.label}>
                <span className="project-meta-label">{row.label}</span>
                <span className="project-meta-value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COVER IMAGE ── */}
      <div
        className="project-cover"
        style={project.coverImage ? { background: '#0a0a0a' } : { background: coverGradient }}
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            loading="eager"
          />
        ) : (
          <span className="placeholder-label placeholder-label--large">
            {project.title}
          </span>
        )}
      </div>

      {/* ── CASE STUDY SECTIONS ── */}
      <div className="case-study">
        {project.sections.map((section, i) => (
          <CaseSection key={`${project.id}-section-${i}`} section={section} />
        ))}
      </div>

      <Footer />
    </>
  )
}

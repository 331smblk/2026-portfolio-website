import { Link } from 'react-router-dom'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Gradient backgrounds for projects without a cover photo
const PLACEHOLDER_GRADIENTS = {
  1: 'linear-gradient(135deg, #D4C4B0 0%, #C4A882 100%)',
  2: 'linear-gradient(135deg, #C8D4CC 0%, #9BB5A8 100%)',
  3: 'linear-gradient(135deg, #D0C8D8 0%, #A89EC0 100%)',
  4: 'linear-gradient(135deg, #D8C8B8 0%, #B89878 100%)',
  5: 'linear-gradient(135deg, #C4CCD8 0%, #889BB5 100%)',
  6: 'linear-gradient(135deg, #C8C4B8 0%, #A09878 100%)',
}

/**
 * ProjectCard
 *
 * Used on both the Home (featured) and Work (full list) pages.
 * Wraps in a React Router <Link> so navigation uses the browser's
 * History API — no page reloads, correct back-button behaviour.
 *
 * Props:
 *   project  {object}  — a project object from projects.js
 */
export default function ProjectCard({ project }) {
  const gradient = PLACEHOLDER_GRADIENTS[project.placeholderIndex] || PLACEHOLDER_GRADIENTS[1]

  return (
    <Link
      to={`/work/${project.id}`}
      className="project-card"
      aria-label={`View case study: ${project.title}`}
    >
      {/* ── Left: meta + title + summary ── */}
      <div className="project-card__meta">
        <div>
          <span className="project-tag">{project.tag}</span>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-summary">{project.shortSummary || project.summary}</p>
        </div>
        <div className="project-card__bottom">
          <span className="project-year">{project.year}</span>
          <span className="project-view">
            View Case Study <ArrowRight />
          </span>
        </div>
      </div>

      {/* ── Right: image or gradient placeholder ── */}
      <div
        className="project-card__image"
        style={project.coverImage ? { background: '#0a0a0a' } : { background: gradient }}
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <span className="placeholder-label">{project.title}</span>
        )}
      </div>
    </Link>
  )
}

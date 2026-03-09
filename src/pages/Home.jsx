import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { featuredProjects } from '../data/projects.js'

/**
 * Home
 *
 * Landing page: full-viewport hero + sticky "Selected Work" bar
 * + 3 featured project cards.
 */
export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__eyebrow">UX / Product Designer</div>
        <h1 className="hero__name" id="hero-name-text">
          Britton
          <br />
          <em>Snyder</em>
        </h1>
        <p className="hero__tagline">
          Bringing clarity to complex
          <br />
          data-driven platforms
        </p>
      </section>

      {/* ── STICKY WORK BAR ── */}
      <div className="work-bar">
        <span className="section-label">Selected Work</span>
        <Link to="/work" className="view-all-link">
          View all projects →
        </Link>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section className="work-section">
        <div className="project-list">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

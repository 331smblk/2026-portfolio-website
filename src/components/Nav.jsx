import { Link, NavLink, useLocation } from 'react-router-dom'
import { useScrollNav } from '../hooks/useScrollNav.js'

const ArrowUp = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 13V3M3 8L8 3L13 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M2 7.5L9 2L16 7.5V15.5C16 15.7761 15.7761 16 15.5 16H11.5V12H6.5V16H2.5C2.22386 16 2 15.7761 2 15.5V7.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13 8H3M3 8L7 4M3 8L7 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Nav — left slot behaviour by route:
 *
 *   /          → ↑ arrow fades in once hero scrolls away, scrolls to top on click
 *   /work      → home icon, always visible
 *   /about     → home icon, always visible
 *   /work/:id  → "← Back" fades in once in-page back btn scrolls away
 */
export default function Nav() {
  const navRef = useScrollNav()
  const { pathname } = useLocation()
  const isProject   = pathname.startsWith('/work/') && pathname !== '/work'
  const isSecondary = pathname === '/work' || pathname === '/about'

  return (
    <nav className="nav" ref={navRef}>

      {isProject ? (
        <button
          className="nav__back"
          onClick={() => window.history.back()}
          aria-label="Go back"
          type="button"
        >
          <ArrowLeft /> Back
        </button>
      ) : isSecondary ? (
        <Link to="/" className="nav__home" aria-label="Go to home">
          <HomeIcon />
        </Link>
      ) : (
        <button
          className="nav__name"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp />
        </button>
      )}

      <ul className="nav__links">
        <li>
          <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

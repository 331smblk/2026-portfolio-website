import { Link } from 'react-router-dom'

/**
 * NotFound
 * Shown for any unmatched route. Provides a friendly exit back to Home.
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__heading">Page not found</h1>
      <p className="not-found__sub">
        That URL doesn&apos;t match anything here.
      </p>
      <Link to="/" className="not-found__link">
        ← Back to home
      </Link>
    </div>
  )
}

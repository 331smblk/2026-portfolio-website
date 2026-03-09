import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useScrollNav
 *
 * Drives three nav behaviours:
 *   1. `nav--scrolled`     — border + backdrop-blur when scrollY > 20 (all pages)
 *   2. `nav--name-visible` — fades "Britton" in once the hero h1 scrolls behind
 *                            the nav bar (home route only)
 *   3. `nav--back-visible` — fades the sticky back button in once the in-page
 *                            project-back button scrolls out of view (project routes)
 *
 * Returns a ref to attach to the nav element.
 */
export function useScrollNav() {
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isHome    = pathname === '/'
  const isProject = pathname.startsWith('/work/') && pathname !== '/work'

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    function update() {
      // 1. Scrolled state — all pages
      nav.classList.toggle('nav--scrolled', window.scrollY > 20)

      if (isHome) {
        // 2. Britton name fades in when hero name scrolls behind nav
        const heroName = document.getElementById('hero-name-text')
        if (heroName) {
          const gone = heroName.getBoundingClientRect().bottom < nav.offsetHeight
          nav.classList.toggle('nav--name-visible', gone)
        }
        nav.classList.remove('nav--back-visible')
      } else if (isProject) {
        // 3. Sticky back button fades in when the page-level back btn scrolls away
        const pageBack = document.getElementById('project-back-btn')
        if (pageBack) {
          const gone = pageBack.getBoundingClientRect().bottom < nav.offsetHeight
          nav.classList.toggle('nav--back-visible', gone)
        }
        nav.classList.remove('nav--name-visible')
      } else {
        nav.classList.remove('nav--name-visible')
        nav.classList.remove('nav--back-visible')
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [isHome, isProject])

  return navRef
}

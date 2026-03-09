/**
 * Footer
 * Shared site footer used on every page.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer__name">
          Britton
          <br />
          Snyder
        </div>
        <div className="footer__tagline">
          Bringing clarity to complex
          <br />
          data-driven platforms
        </div>
      </div>

      <div className="footer__contact">
        <div className="footer__contact-label">Get in touch</div>
        <a className="footer__email" href="mailto:brittonlsnyder@gmail.com">
          brittonlsnyder@gmail.com
        </a>
      </div>

      <div className="footer__copy">©2025 Britton Snyder. All rights reserved.</div>
    </footer>
  )
}

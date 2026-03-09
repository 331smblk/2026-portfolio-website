import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

/**
 * Lightbox
 *
 * Renders a full-screen image overlay using a React Portal so it always
 * sits above every other element, regardless of stacking contexts.
 *
 * The image `src` is passed directly — Vite has already resolved it to
 * a hashed URL at build time, so it works identically in dev, preview,
 * and production on Vercel.
 *
 * Props:
 *   src     {string}    — resolved image URL (import or public path)
 *   alt     {string}    — alt text
 *   onClose {function}  — called to dismiss the lightbox
 */
export default function Lightbox({ src, alt, onClose }) {
  // Stable close callback — avoids re-running the effect on every render
  const handleClose = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    // Keyboard: Escape closes
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)

    // Prevent body scroll while open
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [handleClose])

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Full-size view: ${alt}`}
      onClick={handleClose}
    >
      <button
        className="lightbox__close"
        onClick={handleClose}
        aria-label="Close lightbox"
        type="button"
      >
        &#x2715;
      </button>
      <img
        className="lightbox__img"
        src={src}
        alt={alt}
        // Stop the click from bubbling to the backdrop
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  )
}

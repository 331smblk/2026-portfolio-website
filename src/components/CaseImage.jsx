import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

/**
 * CaseImage
 *
 * A case-study image container that shows either:
 *   - A real <img> (with optional lightbox zoom on click)
 *   - A labelled gradient placeholder
 *
 * Props:
 *   src       {string}  — Vite-imported image URL
 *   alt       {string}  — accessible alt text
 *   label     {string}  — text shown in gradient placeholder
 *   gradient  {string}  — CSS gradient string for placeholder background
 *   zoomable  {boolean} — if true, clicking a real image opens the Lightbox
 *   wide      {boolean} — 16:7 aspect ratio (default is 16:9)
 *   noMargin  {boolean} — suppresses the default top margin (for 2-col grids)
 */
export default function CaseImage({ src, alt, label, gradient, zoomable = false, wide = false, noMargin = false }) {
  const [open, setOpen] = useState(false)

  const classNames = [
    'case-image',
    wide      ? 'case-image--wide'     : '',
    zoomable && src ? 'case-image--zoomable' : '',
  ].filter(Boolean).join(' ')

  const style = {
    ...(gradient && !src ? { background: gradient } : {}),
    ...(noMargin          ? { marginTop: 0 }         : {}),
  }

  return (
    <>
      <div
        className={classNames}
        style={style}
        onClick={zoomable && src ? () => setOpen(true) : undefined}
        role={zoomable && src ? 'button' : undefined}
        tabIndex={zoomable && src ? 0 : undefined}
        onKeyDown={zoomable && src ? (e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true) } : undefined}
        aria-label={zoomable && src ? `Zoom: ${alt || label}` : undefined}
      >
        {src ? (
          <img src={src} alt={alt || ''} loading="lazy" />
        ) : (
          <span className="case-image-label">{label}</span>
        )}
      </div>

      {open && (
        <Lightbox src={src} alt={alt || label || ''} onClose={() => setOpen(false)} />
      )}
    </>
  )
}

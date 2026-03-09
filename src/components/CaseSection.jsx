import CaseImage from './CaseImage.jsx'

/**
 * CaseSection
 *
 * Renders a single case-study section driven entirely by the shape of
 * the `section` data object from projects.js.
 *
 * Supported section fields:
 *   label       {string}    — left-column sticky label
 *   title       {string}    — section heading
 *   body        {string[]}  — paragraphs (HTML tags allowed)
 *   outcomes    {string[]}  — numbered outcome bullets (HTML allowed)
 *   image       {object}    — single image/placeholder: { src, alt, label, gradient, wide }
 *   images2col  {object[]}  — two side-by-side placeholders: [{ label, gradient }, ...]
 *   caseImages  {object[]}  — real photos or 2-col grids with lightbox support
 */
export default function CaseSection({ section }) {
  return (
    <div className="case-section">
      {/* ── Sticky label column ── */}
      <div className="case-section__label">{section.label}</div>

      {/* ── Content column ── */}
      <div>
        {section.title && (
          <h2 className="case-section__title">{section.title}</h2>
        )}

        {/* Body paragraphs */}
        {section.body?.length > 0 && (
          <div className="case-section__body">
            {section.body.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        )}

        {/* Numbered outcomes list */}
        {section.outcomes?.length > 0 && (
          <ul className="outcomes-list">
            {section.outcomes.map((text, i) => (
              <li key={i}>
                <span className="outcomes-list__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            ))}
          </ul>
        )}

        {/* Single image / gradient placeholder */}
        {section.image && (
          <CaseImage
            src={section.image.src}
            alt={section.image.alt}
            label={section.image.label}
            gradient={section.image.gradient}
            wide={section.image.wide}
            zoomable={!!section.image.src}
          />
        )}

        {/* Two-column gradient placeholders */}
        {section.images2col?.length > 0 && (
          <div className="case-image-2col">
            {section.images2col.map((img, i) => (
              <CaseImage
                key={i}
                label={img.label}
                gradient={img.gradient}
                noMargin
              />
            ))}
          </div>
        )}

        {/* Real photo case images — supports single images and 2-col grids */}
        {section.caseImages?.map((item, i) => {
          if (item.type === '2col') {
            return (
              <div className="case-image-2col" key={i}>
                {item.images.map((img, j) => (
                  <CaseImage
                    key={j}
                    src={img.src}
                    alt={img.alt}
                    zoomable={img.zoomable}
                    noMargin
                  />
                ))}
              </div>
            )
          }
          return (
            <CaseImage
              key={i}
              src={item.src}
              alt={item.alt}
              zoomable={item.zoomable}
            />
          )
        })}
      </div>
    </div>
  )
}

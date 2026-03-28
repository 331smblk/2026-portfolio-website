import portraitSrc from '../assets/images/britton-snyder.jpg'
import kcMapSrc    from '../assets/images/kc-map.jpg'
import Footer from '../components/Footer.jsx'

const SKILLS = [
  {
    title: 'Design Practice',
    items: [
      'Product Design',
      'UX Research & Strategy',
      'Information Architecture',
      'Interaction Design',
      'Visual & UI Design',
      'Design Systems',
    ],
  },
  {
    title: 'Specializations',
    items: [
      'Enterprise SaaS Modernization',
      'Automotive Technology',
      'Real Estate MLS Platforms',
      'Front-end Prototyping',
      'Branding & Web Design',
      'Marketing & Campaign Design',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Figma & FigJam',
      'Adobe Creative Suite',
      'Pendo Analytics',
      'Claude Code',
      'Miro',
      'HTML / CSS',
    ],
  },
]

/**
 * About
 *
 * Bio, portrait photo, KC map banner, and 3-column skills grid.
 */
export default function About() {
  return (
    <>
      <section className="about-hero">
        {/* ── Heading (left) + Portrait (right) ── */}
        <div className="about-hero__top">
          <h1 className="about-heading">
            Design
            <br />
            is about
            <br />
            <em>people,</em>
            <br />
            not pixels.
          </h1>
          <div className="about-portrait">
            <img src={portraitSrc} alt="Britton Snyder" />
          </div>
        </div>

        {/* ── Bio paragraphs ── */}
        <div className="about-bio-section">
          <p className="about-bio about-bio--lead">
            I&apos;m a product and UX designer focused on simplifying complex
            systems and turning data-heavy platforms into clear, usable experiences.
          </p>
          <p className="about-bio">
            Hi, I&apos;m Britton Snyder, a designer with more than a decade of
            experience creating digital products for complex industries.
          </p>
          <p className="about-bio">
            Much of my work has focused on modernizing data-heavy enterprise and
            SaaS platforms, particularly in automotive technology and real estate
            MLS systems. I enjoy taking complicated workflows and turning them into
            products that are clear, useful, and intuitive for the people who rely
            on them every day.
          </p>
          <p className="about-bio">
            Over the years I&apos;ve worn many hats across product design, branding,
            web design, and front-end prototyping. My process usually starts with
            understanding the vision for a product and the needs of its users, then
            translating that into thoughtful design strategy, high-fidelity
            prototypes, and close collaboration with engineering teams to bring the
            work to life.
          </p>
          <p className="about-bio">
            Earlier in my career I worked on marketing teams creating visual
            campaigns for national audiences. That experience shaped the way I
            approach design today — balancing strong visual communication with
            practical, user-centered product thinking.
          </p>
          <p className="about-bio about-bio--location">
            I&apos;m currently based in the Kansas City area and enjoy working on
            products that simplify complex systems and make everyday work easier
            for the people who use them.
          </p>
        </div>
      </section>

      {/* ── KC Map banner ── */}
      <div className="about-map">
        <img src={kcMapSrc} alt="Kansas City map" />
      </div>

      {/* ── Skills Grid ── */}
      <section className="about-skills-section">
        <span className="section-label">Expertise</span>
        <div className="skills-grid">
          {SKILLS.map((block) => (
            <div className="skill-block" key={block.title}>
              <div className="skill-block__title">{block.title}</div>
              <ul className="skill-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

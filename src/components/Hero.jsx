import { useState } from 'react'
import { HeroSquiggle } from './Motifs.jsx'

const EMAIL = 'mailto:johncarandang571@gmail.com'
const PHONE = 'tel:+639274819395'

export function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section className="hero-section" id="welcome" aria-labelledby="hero-title">
      <div className="hero-section__brutal-deco" aria-hidden>
        <span className="hero-brut-block hero-brut-block--sky" />
        <span className="hero-brut-block hero-brut-block--accent" />
        <span className="hero-brut-block hero-brut-block--slate" />
      </div>
      <span className="hero-section__wash" aria-hidden>
        01
      </span>

      <div className="hero-section__layout">
        <div className="hero-section__copy">
          <div className="hero-section__kicker-row">
            <p className="hero-section__kicker">Data engineering · Fullstack · Cloud</p>
            <HeroSquiggle />
          </div>

          <h1 id="hero-title" className="hero-section__title">
            <span className="hero-section__title-line">John Arthur</span>
            <span className="hero-section__title-line hero-section__title-line--accent">
              Royales Carandang
            </span>
          </h1>

          <p className="hero-section__tagline">
            I design and ship dependable data systems and web products—clear documentation,
            thoughtful UX, and infrastructure that holds up under real load.
          </p>

          <p className="hero-section__bio">
            Based in <strong>Valenzuela City</strong>, I work across ETL, Google Cloud and
            BigQuery, MySQL, Python, and modern JavaScript and PHP stacks. Open to collaborations
            and roles where rigor and creativity both matter.
          </p>

          <dl className="hero-meta">
            <div>
              <dt>Location</dt>
              <dd>Metro Manila, Philippines</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Data platforms &amp; fullstack delivery</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Select freelance &amp; full-time</dd>
            </div>
          </dl>

          <div className="hero-section__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() =>
                document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View expertise
            </button>
            <a className="btn btn--ghost" href={EMAIL}>
              Email me
            </a>
          </div>

          <ul className="social-row" aria-label="Social and contact">
            <li>
              <a
                className="social-row__btn"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="social-row__btn"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a className="social-row__btn" href={PHONE}>
                Call
              </a>
            </li>
            <li>
              <a className="social-row__btn" href={EMAIL}>
                Email
              </a>
            </li>
          </ul>
        </div>

        <aside className="hero-portrait" aria-label="Portrait">
          <figure className="hero-portrait__figure">
            <div className="hero-portrait__mat">
              <div className="hero-portrait__photo">
                {photoOk ? (
                  <img
                    src="/profile.jpg"
                    alt="John Arthur Royales Carandang"
                    className="hero-portrait__img"
                    onError={() => setPhotoOk(false)}
                  />
                ) : (
                  <span className="hero-portrait__initials" aria-hidden>
                    JC
                  </span>
                )}
              </div>
            </div>
            <figcaption className="hero-portrait__caption">
              <span className="hero-portrait__caption-name">J. A. R. Carandang</span>
              <span className="hero-portrait__caption-role">B.S. Computer Science, TUP</span>
            </figcaption>
          </figure>
        </aside>
      </div>
    </section>
  )
}

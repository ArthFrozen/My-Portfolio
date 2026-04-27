import { CornerFrame } from './Motifs.jsx'

const EMAIL = 'mailto:johncarandang571@gmail.com'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-section__panel" data-section-num="04">
        <CornerFrame className="contact-section__corners" />
        <p className="panel-section__eyebrow">Let&apos;s talk</p>
        <h2 id="contact-heading" className="contact-section__title">
          Start a conversation
        </h2>
        <p className="contact-section__lede">
          Open to data engineering, fullstack, and cloud analytics opportunities. References
          available on request.
        </p>
        <div className="contact-section__actions">
          <a className="btn btn--primary btn--lg" href={EMAIL}>
            Write an email
          </a>
          <button
            type="button"
            className="btn btn--ghost btn--lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </button>
        </div>
      </div>
    </section>
  )
}

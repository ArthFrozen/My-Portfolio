import { FooterGlyph } from './Motifs.jsx'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const steps = Array.from({ length: 32 }, (_, i) => i)

  return (
    <footer className="site-footer">
      <div className="site-footer__steps" aria-hidden>
        {steps.map((i) => (
          <span key={i} className={i % 2 === 0 ? 'site-footer__step' : 'site-footer__step site-footer__step--alt'} />
        ))}
      </div>
      <div className="site-footer__inner">
        <FooterGlyph />
        <p className="site-footer__credit">
          © {year} John Arthur Royales Carandang · Valenzuela City · Built with intention
        </p>
      </div>
    </footer>
  )
}

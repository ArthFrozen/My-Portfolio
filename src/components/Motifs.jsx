/** Small SVG accents — keep stroke `currentColor` for theme control */
export function HeroSquiggle() {
  return (
    <svg
      className="motif-squiggle"
      viewBox="0 0 200 14"
      width="200"
      height="14"
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        d="M0,7 C28,1 52,13 80,7 S132,1 160,7 S188,13 200,7"
      />
    </svg>
  )
}

export function CornerFrame({ className = '' }) {
  return (
    <svg
      className={`motif-corners ${className}`.trim()}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        vectorEffect="non-scaling-stroke"
        d="M12,2 H2 V12 M88,2 H98 V12 M12,98 H2 V88 M88,98 H98 V88"
      />
    </svg>
  )
}

export function FooterGlyph() {
  return (
    <svg
      className="site-footer__glyph"
      viewBox="0 0 360 20"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.45"
        d="M0,10 L40,2 80,18 120,4 160,16 200,6 240,14 280,8 320,12 360,10"
      />
    </svg>
  )
}

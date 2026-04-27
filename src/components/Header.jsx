const NAV = [
  { id: 'welcome', label: 'Intro' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Header({ activeId }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-logo"
          href="#welcome"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('welcome')
          }}
        >
          <span className="site-logo__text">John Arthur</span>
          <span className="site-logo__sub">Royales Carandang</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={
                    activeId === item.id ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                  }
                  onClick={() => scrollToId(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

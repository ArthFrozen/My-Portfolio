const SKILL_GROUPS = [
  {
    id: 'data',
    title: 'Data & Cloud',
    blurb: 'Pipelines, warehousing, and analytics-ready datasets.',
    skills: [
      'Google Cloud Platform',
      'BigQuery & BigQuery ML',
      'MySQL',
      'Python',
      'ETL design',
      'API ingestion',
      'Excel & reporting',
    ],
  },
  {
    id: 'web',
    title: 'Web & Applications',
    blurb: 'Interfaces and services from prototype to production.',
    skills: ['React', 'Laravel', 'Django', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 'code',
    title: 'Languages',
    blurb: 'Backend and systems-oriented implementation.',
    skills: ['Python', 'Go', 'C#', 'C', 'SQL'],
  },
  {
    id: 'meta',
    title: 'Collaboration',
    blurb: 'How partners and teams experience working together.',
    skills: [
      'Leadership',
      'Technical writing',
      'QA & UX sensitivity',
      'Security awareness',
      'Network troubleshooting',
      'Adobe creative suite',
    ],
  },
]

export function SkillsSection() {
  return (
    <section
      className="panel-section panel-section--slant"
      id="expertise"
      data-section-num="02"
      aria-labelledby="skills-heading"
    >
      <div className="panel-section__header">
        <p className="panel-section__eyebrow">Capabilities</p>
        <h2 id="skills-heading" className="panel-section__title">
          Expertise
        </h2>
        <p className="panel-section__lede">
          Grounded in shipping work at logistics, publishing, networking, and data-heavy
          organizations—organized by domain, not buzzwords.
        </p>
      </div>

      <div className="skill-grid">
        {SKILL_GROUPS.map((g, i) => (
          <article key={g.id} className={i === 0 ? 'skill-card skill-card--lead' : 'skill-card'}>
            <div className="skill-card__accent" aria-hidden />
            {i === 0 ? (
              <div className="skill-card__split">
                <div className="skill-card__intro">
                  <h3 className="skill-card__title">{g.title}</h3>
                  <p className="skill-card__blurb">{g.blurb}</p>
                </div>
                <ul className="skill-card__chips skill-card__chips--wall">
                  {g.skills.map((s) => (
                    <li key={s}>
                      <span className="skill-chip">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <h3 className="skill-card__title">{g.title}</h3>
                <p className="skill-card__blurb">{g.blurb}</p>
                <ul className="skill-card__chips">
                  {g.skills.map((s) => (
                    <li key={s}>
                      <span className="skill-chip">{s}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

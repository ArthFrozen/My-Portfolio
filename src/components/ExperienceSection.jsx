const ROLES = [
  {
    company: 'Parsell Company',
    title: 'IT / Data Specialist',
    range: 'Apr 2024 — Present',
    bullets: [
      'Database lifecycle: migration, design, performance, and security with MySQL, Python, and GCP.',
      'Large-scale collection and processing for analytics; BigQuery ML for organizational needs.',
      'Scalable ETL across platforms; automated ingest from APIs, DBs, and files.',
      'Cloud storage, processing, and analytics on Google Cloud and BigQuery.',
    ],
  },
  {
    company: 'PressReader',
    title: 'QA Auditor',
    range: 'Jan 2024 — Apr 2024',
    bullets: [
      'Validated XML content pipelines; surfaced errors with precision and speed.',
      'Partnered across teams on data issues and workflow quality.',
      'Improved in-app content UX through careful review and fixes.',
    ],
  },
  {
    company: 'TP-Link',
    title: 'IT Technical Support Specialist',
    range: 'Oct 2023 — Dec 2023',
    bullets: [
      'Network device troubleshooting and hardware support.',
      'Guided international clients through setup and incident resolution.',
    ],
  },
  {
    company: 'ICARGO Pacific',
    title: 'Fullstack Developer · IT Intern',
    range: 'Mar 2023 — Jun 2023',
    bullets: [
      'Shipped features on the iCargo Logistics web app (Laravel, PHP, MySQL, Bootstrap, JS).',
      'Helped colleagues with hardware and software support.',
    ],
  },
]

const EDU = [
  {
    school: 'Technological University of the Philippines',
    detail: 'B.S. Computer Science · College',
    years: '2019 — 2023',
    note: "Dean's / President's Lister",
  },
  {
    school: 'Our Lady of Fatima University Valenzuela',
    detail: 'Senior High School · STEM',
    years: '2017 — 2019',
    note: 'With Honors',
  },
  {
    school: 'Valenzuela National High School',
    detail: 'Junior High School',
    years: '2013 — 2017',
    note: 'With Honors',
  },
]

const ORGS = [
  { name: 'TUP COMPASS', role: 'Member', years: '2019 — 2023' },
  {
    name: 'TUP Dugong Bughaw',
    role: 'Director for Public Affairs · VP Internal',
    years: '2020 — 2022',
  },
  { name: 'TUP GEAR', role: 'Operations & Community Officer', years: '2020 — 2023' },
]

const CERTS =
  'Python · MySQL · HTML · C# · CSS · PHP — plus continuous learning on cloud and data tooling.'

export function ExperienceSection() {
  return (
    <section
      className="panel-section panel-section--wide"
      id="work"
      data-section-num="03"
      aria-labelledby="work-heading"
    >
      <div className="panel-section__header">
        <p className="panel-section__eyebrow">Career</p>
        <h2 id="work-heading" className="panel-section__title">
          Selected experience
        </h2>
        <p className="panel-section__lede">
          A through-line from fullstack delivery into data engineering, QA discipline, and
          customer-facing technical support.
        </p>
      </div>

      <ol className="work-timeline">
        {ROLES.map((job, i) => (
          <li key={job.company} className="work-card">
            <div className="work-card__marker" aria-hidden>
              <span className="work-card__dot" />
              {i < ROLES.length - 1 ? <span className="work-card__line" /> : null}
            </div>
            <div className="work-card__body">
              <div className="work-card__top">
                <div>
                  <h3 className="work-card__company">{job.company}</h3>
                  <p className="work-card__title">{job.title}</p>
                </div>
                <time className="work-card__range">{job.range}</time>
              </div>
              <ul className="work-card__list">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="section-divider" aria-hidden />

      <div className="panel-section__header panel-section__header--sub">
        <p className="panel-section__eyebrow">Formation</p>
        <h3 id="edu-heading" className="panel-section__title panel-section__title--sub">
          Education &amp; leadership
        </h3>
        <p className="panel-section__lede">
          Strong academic record and sustained involvement in student organizations.
        </p>
      </div>

      <div className="edu-grid">
        <div className="edu-stack">
          {EDU.map((e) => (
            <article key={e.school} className="edu-card">
              <h3 className="edu-card__school">{e.school}</h3>
              <p className="edu-card__detail">{e.detail}</p>
              <div className="edu-card__foot">
                <time>{e.years}</time>
                <span className="edu-card__badge">{e.note}</span>
              </div>
            </article>
          ))}
        </div>

        <aside className="org-panel">
          <h3 className="org-panel__title">Organizations</h3>
          <ul className="org-list">
            {ORGS.map((o) => (
              <li key={o.name}>
                <span className="org-list__name">{o.name}</span>
                <span className="org-list__role">{o.role}</span>
                <span className="org-list__years">{o.years}</span>
              </li>
            ))}
          </ul>
          <p className="org-panel__certs">{CERTS}</p>
        </aside>
      </div>
    </section>
  )
}

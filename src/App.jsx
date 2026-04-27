import './App.css'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { SkillsSection } from './components/SkillsSection.jsx'
import { ExperienceSection } from './components/ExperienceSection.jsx'
import { ContactSection } from './components/ContactSection.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'

const SECTION_IDS = ['welcome', 'expertise', 'work', 'contact']

export default function App() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <div className="app">
      <Header activeId={activeId} />
      <main className="app__main">
        <Hero />
        <div className="app__panels">
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

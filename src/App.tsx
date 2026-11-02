import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import CurrentlyExploring from './components/CurrentlyExploring'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/ui/CursorGlow'

export default function App() {
  return (
    // "user" honours the OS reduce-motion setting: transform and layout animations are skipped, opacity still fades.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-[-20%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(22_163_74/0.08),transparent_60%)]" />
      </div>

      <CursorGlow />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <CurrentlyExploring />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}

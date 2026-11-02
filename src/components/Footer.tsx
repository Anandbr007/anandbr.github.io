import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import SafeLink from './ui/SafeLink'
import { emailHref, profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  const reduceMotion = useReducedMotion()

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="relative mt-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">Software Developer | AI Enthusiast</p>
          <p className="mt-6 text-xs text-muted/70">Trivandrum, Kerala, India</p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-2">
          <SafeLink
            href={profile.github}
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:text-white aria-disabled:opacity-50"
          >
            <Github size={17} aria-hidden="true" />
          </SafeLink>
          <SafeLink
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:text-white aria-disabled:opacity-50"
          >
            <Linkedin size={17} aria-hidden="true" />
          </SafeLink>
          <SafeLink
            href={emailHref}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:text-white aria-disabled:opacity-50"
          >
            <Mail size={17} aria-hidden="true" />
          </SafeLink>
        </nav>

        <button
          type="button"
          onClick={backToTop}
          className="group inline-flex items-center gap-2 self-start rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-muted transition-colors hover:text-white"
        >
          Back to top
          <ArrowUp size={15} className="transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted/70">
          © {year} Anand B R. Built with React, TypeScript, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  )
}

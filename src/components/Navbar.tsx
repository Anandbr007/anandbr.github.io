import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems } from '../data/content'
import { profile } from '../data/profile'
import { cn } from '../lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for whichever section currently sits in the middle of the viewport.
  useEffect(() => {
    const ids = ['home', ...navItems.map((item) => item.href.slice(1))]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className={cn(
          'mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-3 py-2.5 transition-all duration-500',
          scrolled ? 'glass bg-ink/70 shadow-[0_10px_40px_-15px_rgb(0_0_0/0.8)]' : 'border border-transparent',
        )}
      >
        <a href="#home" className="flex items-center gap-2.5 rounded-lg px-2 py-1" aria-label="Back to top">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-2 font-mono text-xs font-semibold text-accent">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium text-white sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative z-10 block rounded-full px-3 py-1.5 text-sm transition-colors',
                    isActive ? 'text-white' : 'text-muted hover:text-white',
                  )}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-0 rounded-full border border-line bg-white/[0.06]"
                    aria-hidden="true"
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2 text-white xl:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-auto mt-2 max-h-[70dvh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-ink/90 p-3 xl:hidden"
          >
            <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-white/5',
                      active === item.href.slice(1) ? 'text-white' : 'text-muted',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink"
            >
              <Download size={15} aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

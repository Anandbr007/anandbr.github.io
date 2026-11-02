import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Magnetic from '../ui/Magnetic'
import SafeLink from '../ui/SafeLink'
import OrbVisual from './OrbVisual'
import { profile } from '../../data/profile'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate flex min-h-dvh items-center overflow-hidden pt-32 pb-20">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-2/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent-3/20 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.div variants={item} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted">
            <MapPin size={13} className="text-accent" aria-hidden="true" />
            {profile.location}
            <span className="h-3 w-px bg-line" aria-hidden="true" />
            Software Developer at {profile.company}
          </motion.div>

          <motion.p variants={item} className="mb-5 flex items-center gap-4">
            <span className="text-gradient-shimmer text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-8xl lg:text-[5.5rem]">
              {profile.name}
            </span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]"
          >
            Building Intelligent Software.{' '}
            <span className="text-gradient">Exploring the Future of AI.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I’m Anand — a Software Developer passionate about building intelligent applications through software engineering, AI, and Generative AI.
          </motion.p>

          <motion.p variants={item} className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-accent/90">
            {profile.title}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_40px_-6px_rgb(34_197_94/0.6)]"
              >
                View Projects
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-2">
            <SafeLink
              href={profile.github}
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:text-white aria-disabled:opacity-50"
            >
              <Github size={18} aria-hidden="true" />
            </SafeLink>
            <SafeLink
              href={profile.linkedin}
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-colors hover:text-white aria-disabled:opacity-50"
            >
              <Linkedin size={18} aria-hidden="true" />
            </SafeLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbVisual />
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Check, Quote } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading id="experience-heading" index="03" eyebrow="Experience" title="Where I’ve been building." />

      <div className="relative grid gap-10 lg:grid-cols-[220px_1fr]">
        <Reveal>
          <p className="font-mono text-sm text-accent lg:sticky lg:top-32">{experience.period}</p>
          <p className="mt-2 text-sm text-muted lg:sticky lg:top-40">{experience.company}</p>
        </Reveal>

        <div className="relative pl-8 sm:pl-10">
          {/* Timeline rail draws itself as the section scrolls into view. */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3/40"
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-ink"
          >
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-accent shadow-[0_0_10px_#22c55e]" />
          </span>

          <Reveal delay={0.1}>
            <article className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{experience.role}</h3>
              <p className="mt-1 text-sm text-muted">{experience.company} · Healthcare technology</p>

              <figure className="relative my-7 rounded-xl border border-line bg-gradient-to-r from-accent/[0.07] via-accent-2/[0.05] to-accent-3/[0.08] p-5">
                <Quote size={18} className="absolute right-4 top-4 text-accent/40" aria-hidden="true" />
                <figcaption className="pr-8 text-[15px] leading-relaxed text-[#dfe4ec]">{experience.highlight}</figcaption>
              </figure>

              <ul className="grid gap-3 md:grid-cols-2">
                {experience.responsibilities.map((line) => (
                  <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-[#c4cad6]">
                    <Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-line pt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Stack</p>
                <ul className="flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-[#d4d9e3]">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

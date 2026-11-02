import { GraduationCap } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading id="education-heading" index="06" eyebrow="Education" title="Academic foundation." />

      <div className="relative pl-8 sm:pl-10">
        <span aria-hidden="true" className="absolute bottom-0 left-3 top-2 w-px bg-gradient-to-b from-accent-3/60 to-transparent" />
        <span
          aria-hidden="true"
          className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-accent-3/50 bg-ink"
        >
          <span className="h-2 w-2 rounded-full bg-accent-3" />
        </span>

        <Reveal delay={0.1}>
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-2 text-accent-3">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{education.degree}</h3>
                  <p className="mt-2 text-[15px] text-[#d4d9e3]">{education.college}</p>
                  <p className="text-sm text-muted">{education.university}</p>
                </div>
              </div>

              <div className="flex flex-row gap-3 sm:flex-col sm:items-end">
                <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{education.period}</span>
                <span className="rounded-full border border-accent-3/30 bg-accent-3/10 px-3 py-1 font-mono text-xs text-accent-3">
                  CGPA {education.cgpa}
                </span>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}

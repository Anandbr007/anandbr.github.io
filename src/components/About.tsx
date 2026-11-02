import { Download, GraduationCap, MapPin, Briefcase } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { aboutParagraphs, education, journey, technicalInterests } from '../data/content'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading id="about-heading" index="01" eyebrow="About" title="Enterprise quality engineering, growing into AI." />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          {aboutParagraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-[#c4cad6] sm:text-xl sm:leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <h3 className="mb-5 mt-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">Professional journey</h3>
            <ol className="relative space-y-6 border-l border-line pl-6">
              {journey.map((step, i) => (
                <li key={step.label} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border border-accent/60 bg-ink shadow-[0_0_12px_-2px_#22c55e]"
                    style={{ opacity: 1 - i * 0.2 }}
                  />
                  <p className="font-medium text-white">{step.label}</p>
                  <p className="text-sm text-muted">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.25}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Technical interests</h3>
            <ul className="flex flex-wrap gap-2">
              {technicalInterests.map((interest) => (
                <li key={interest} className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-[#d4d9e3]">
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-2" delay={0.15}>
          <SpotlightCard className="h-full p-7">
            <div className="flex items-start justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 via-accent-2/30 to-accent-3/40 font-mono text-lg font-semibold text-white ring-1 ring-line">
                {profile.initials}
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{profile.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{profile.title}</p>

            <dl className="mt-7 divide-y divide-line text-sm">
              <div className="flex items-center gap-3 py-3">
                <MapPin size={15} className="text-accent" aria-hidden="true" />
                <dt className="sr-only">Location</dt>
                <dd className="text-[#d4d9e3]">{profile.location}</dd>
              </div>
              <div className="flex items-center gap-3 py-3">
                <Briefcase size={15} className="text-accent" aria-hidden="true" />
                <dt className="sr-only">Experience</dt>
                <dd className="text-[#d4d9e3]">
                  {profile.experience} · {profile.company}
                </dd>
              </div>
              <div className="flex items-start gap-3 py-3">
                <GraduationCap size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <dt className="sr-only">Education</dt>
                <dd className="text-[#d4d9e3]">
                  {education.degree}
                  <span className="block text-xs text-muted">
                    {education.college} · {education.period}
                  </span>
                </dd>
              </div>
            </dl>

            <a
              href={profile.resumeUrl}
              download
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}

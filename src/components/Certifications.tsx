import { ArrowUpRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import SafeLink from './ui/SafeLink'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { certifications } from '../data/content'
import { isPlaceholder } from '../data/profile'

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        id="certifications-heading"
        index="05"
        eyebrow="Certifications"
        title="Continuous learning, on record."
        description="Each credential links to its verification page once the credential URL is added."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = cert.icon
          const pending = isPlaceholder(cert.credentialUrl)
          return (
            <li key={cert.name}>
              <Reveal delay={(i % 3) * 0.06}>
                <SpotlightCard className="group flex h-full flex-col p-6 transition-colors duration-500 hover:border-white/15">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{cert.category}</span>
                  </div>

                  <h3 className="mt-6 text-[15px] font-semibold leading-snug text-white">{cert.name}</h3>
                  {cert.issuer && <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>}

                  <div className="mt-auto pt-6">
                    <SafeLink
                      href={cert.credentialUrl}
                      aria-label={`View credential: ${cert.name}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-white aria-disabled:text-muted aria-disabled:cursor-not-allowed"
                    >
                      {pending ? 'Credential link pending' : 'View credential'}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </SafeLink>
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

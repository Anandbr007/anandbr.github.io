import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { exploring } from '../data/content'

export default function CurrentlyExploring() {
  return (
    <section id="exploring" aria-labelledby="exploring-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        id="exploring-heading"
        index="07"
        eyebrow="Currently exploring"
        title="What I’m learning right now."
        description="Areas I’m actively studying. There are no completion percentages here, just the topics I’m working through."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {exploring.map((topic, i) => {
          const Icon = topic.icon
          return (
            <li key={topic.title}>
              <Reveal delay={(i % 4) * 0.07}>
                <SpotlightCard className="group relative flex h-full flex-col p-6 transition-transform duration-500 hover:-translate-y-1">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent-2 transition-colors group-hover:text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      Exploring
                    </span>
                  </div>

                  <h3 className="text-[15px] font-semibold text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>

                  {/* Decorative activity line; it is not a progress indicator. */}
                  <div className="mt-auto pt-6" aria-hidden="true">
                    <div className="relative h-px w-full overflow-hidden bg-line">
                      <span className="absolute inset-y-0 left-0 w-1/3 animate-scan bg-gradient-to-r from-transparent via-accent to-transparent" />
                    </div>
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

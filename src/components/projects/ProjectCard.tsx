import { Check, Github, ExternalLink } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SafeLink from '../ui/SafeLink'
import SpotlightCard from '../ui/SpotlightCard'
import ArchitectureDiagram from './ArchitectureDiagram'
import { isPlaceholder } from '../../data/profile'
import type { Project } from '../../data/content'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const githubPending = isPlaceholder(project.githubUrl)
  const demoPending = isPlaceholder(project.demoUrl)

  return (
    <Reveal>
      <SpotlightCard className="group p-7 transition-[border-color,box-shadow] duration-500 hover:border-white/15 hover:shadow-[0_40px_100px_-40px_rgb(22_163_74/0.45)] sm:p-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div className="flex flex-col">
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
              <span className="text-accent">Project {project.index}</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </p>

            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">{project.overview}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 font-mono text-[11px] text-accent transition-colors hover:border-accent/50 hover:bg-accent/10"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-9 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Key features</h4>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-[#c4cad6]">
                  <Check size={15} className="mt-0.5 shrink-0 text-accent-3" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-10">
              <SafeLink
                href={project.githubUrl}
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.09] aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
                {githubPending && <PlaceholderBadge />}
              </SafeLink>
              <SafeLink
                href={project.demoUrl}
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_30px_-6px_rgb(34_197_94/0.6)] aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live demo
                {demoPending && <PlaceholderBadge dark />}
              </SafeLink>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <ArchitectureDiagram steps={project.architecture} label="Main components" />
            <p className="mt-4 text-xs leading-relaxed text-muted/80">
              Conceptual overview of the main components, not an exact system diagram.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}

function PlaceholderBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? 'rounded-md bg-ink/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink/70'
          : 'rounded-md border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted'
      }
    >
      add url
    </span>
  )
}

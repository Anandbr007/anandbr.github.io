import SectionHeading from './ui/SectionHeading'
import ProjectCard from './projects/ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        id="projects-heading"
        index="04"
        eyebrow="Featured projects"
        title="AI systems I’m building."
        description="Applied projects across agentic workflows, retrieval-augmented generation and computer vision."
      />

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

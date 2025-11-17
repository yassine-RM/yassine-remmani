import { ProjectCard } from '@/components/cards/ProjectCard'
import { projects } from '@/lib/constants'

export function Projects() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Featured Projects
        </div>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          High-Impact <span className="text-teal">Work</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl">
          Production systems serving thousands of users with measurable business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}


import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-5 shadow-card transition-all hover:translate-y-[-2px] hover:border-teal hover:bg-[var(--bg-surface-hover)]">
      <Image
        src={project.coverImage}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <div className="flex items-start gap-3 mb-4">
        <Image
          src={project.logo}
          alt={project.tags[0]}
          width={48}
          height={48}
          className="rounded"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-md text-[var(--text-secondary)] hover:border-teal hover:bg-[var(--bg-surface-hover)] hover:text-teal transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-teal-light)] border border-[var(--border-accent)] rounded-md text-xs font-semibold text-teal w-fit mb-4">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        {project.metric.value}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] rounded-md font-bold text-sm',
          'hover:border-teal hover:bg-[var(--bg-surface-hover)] transition-all',
          'focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)]'
        )}
      >
        View Case Study
      </Link>
    </article>
  )
}


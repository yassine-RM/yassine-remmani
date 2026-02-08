import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card overflow-hidden hover:border-border-hover transition-colors flex flex-col">
      <Image
        src={project.coverImage}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--foreground-muted)] mb-4 flex-1 line-clamp-2">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-accent-muted text-accent rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/projects/${project.slug}#architecture`}>Architecture</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/projects/${project.slug}`}>Case Study</Link>
          </Button>
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

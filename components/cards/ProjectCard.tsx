'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { useTranslations } from '@/hooks/useTranslations'
import type { Locale } from '@/lib/i18n'

interface ProjectCardProps {
  project: Project
  locale: Locale
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = useTranslations()
  const base = `/${locale}/projects/${project.slug}`
  const translated = t.data.projects.find((p) => p.slug === project.slug)
  const title = translated?.title ?? project.title
  const summary = translated?.summary ?? project.summary
  return (
    <article className="rounded-xl border border-border bg-card overflow-hidden hover:border-border-hover transition-colors flex flex-col">
      <Image
        src={project.coverImage}
        alt={title}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-[var(--foreground-muted)] mb-4 flex-1 line-clamp-2">
          {summary}
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
            <Link href={`${base}#architecture`}>{t.projectsSection.architecture}</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link href={base}>{t.projectsSection.caseStudy}</Link>
          </Button>
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                {t.projectsSection.live}
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export function Projects() {
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
          Projects
        </h2>
        <p className="text-[var(--foreground-muted)] max-w-2xl">
          Scalable, production-grade platforms. Travel discovery (<Link href="/projects/travelos" className="text-accent hover:underline">TravelOS</Link>), automotive tech, multi-tenant systems. Spring Boot & Next.js architecture.
        </p>
      </motion.div>

      <div className="grid gap-6 md:gap-8">
        {featured.map((project, idx) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-border-hover transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--foreground-muted)] mb-4">
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
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
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
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-8"
      >
        <Button variant="secondary" asChild>
          <Link href="/projects">View all projects</Link>
        </Button>
      </motion.div>
    </section>
  )
}

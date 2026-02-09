'use client'

import Link from 'next/link'
import { experience } from '@/lib/constants'

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12">
        Experience
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden />
        <ul className="space-y-12">
          {experience.map((job) => (
            <li key={job.company + job.role} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3px]" />
              <div className="mb-4">
                <h3 className="font-heading text-lg font-semibold">
                  {job.role}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {job.company}
                  {job.location && ` · ${job.location}`}
                </p>
                {job.context && (
                  <p className="text-xs text-[var(--foreground-subtle)] mt-1 italic">
                    {job.context}
                  </p>
                )}
                <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                  {job.period}
                </p>
              </div>

              {job.contextSummary && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Context</span>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">{job.contextSummary}</p>
                </div>
              )}
              {job.actionSummary && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Action</span>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">{job.actionSummary}</p>
                </div>
              )}
              {job.tech && job.tech.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Tech</span>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    {job.tech.join(' · ')}
                  </p>
                </div>
              )}
              {job.impact && job.impact.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Impact</span>
                  <ul className="mt-1 space-y-1">
                    {job.impact.map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-[var(--foreground-muted)]">
                        <span className="text-accent shrink-0">→</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
      >
        Full timeline
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </section>
  )
}

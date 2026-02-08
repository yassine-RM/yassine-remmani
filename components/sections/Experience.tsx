'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { experience } from '@/lib/constants'

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-heading text-2xl md:text-3xl font-bold mb-12"
      >
        Experience
      </motion.h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden />
        <ul className="space-y-12">
          {experience.map((job, idx) => (
            <motion.li
              key={job.company + job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3px]" />
              <div className="mb-2">
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
              <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          Full timeline
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}

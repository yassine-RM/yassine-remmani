'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl md:text-3xl font-bold mb-6"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4 text-[var(--foreground-muted)] leading-relaxed"
        >
          <p>
            Senior Full-Stack Developer and Backend Engineer. I build scalable APIs and production-ready systems with <strong className="text-foreground">Spring Boot</strong> and <strong className="text-foreground">Next.js</strong> — event-driven workflows, multi-tenant platforms, backend-first architecture.
          </p>
          <p>
            6+ years. High-traffic systems. I design clean architectures, optimize databases, and ship features that perform.
          </p>
          <p>
            Open to senior full-stack, backend, or platform engineering roles.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Read more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

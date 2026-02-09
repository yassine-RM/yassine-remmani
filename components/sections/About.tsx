'use client'

import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          About
        </h2>
        <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
          <p>
            I&apos;m a senior engineer with 6+ years building production systems. I care about <strong className="text-foreground">system design</strong>, <strong className="text-foreground">performance</strong>, and <strong className="text-foreground">maintainability</strong>, not just features.
          </p>
          <p>
            I build scalable APIs, event-driven workflows, and multi-tenant platforms. Real systems—inventory sync, campaign attribution, real-time search—that run at scale.
          </p>
          <p>
            I focus on platforms, not one-off features. Clean architecture, DDD, proper auth (JWT, OAuth2, Keycloak). Docker, CI/CD, PostgreSQL optimization. Open to senior full-stack, backend, or platform engineering roles.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          Read more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

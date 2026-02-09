'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const proofPoints = [
  { value: '4,000+', label: 'dealer sites' },
  { value: 'Event-driven', label: 'Kafka pipelines' },
  { value: 'Multi-tenant', label: 'APIs at scale' },
]

export function Hero() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-accent mb-3 sm:mb-4">
          Full-Stack Engineer
        </p>
        <h1
          id="hero-heading"
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance mb-4 sm:mb-6"
        >
          Yassine REMMANI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[var(--foreground-muted)] mb-6 sm:mb-8 leading-relaxed">
          I build scalable APIs, event-driven systems, and cloud-ready architectures. Spring Boot, Next.js, PostgreSQL, Docker—production-ready platforms that ship.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          {proofPoints.map((p) => (
            <div
              key={p.label}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-accent-muted/50 border border-border"
            >
              <span className="text-sm sm:text-base font-semibold text-accent">{p.value}</span>
              <span className="text-sm sm:text-base text-[var(--foreground-muted)] ml-1.5 sm:ml-2">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button asChild size="default">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="secondary" asChild size="default">
            <Link href="/resume">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </Link>
          </Button>
          <Button variant="secondary" asChild size="default">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

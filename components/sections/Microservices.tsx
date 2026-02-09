'use client'

import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'

/**
 * Microservices architecture section.
 * Highlights: Spring Boot backend services, event-driven (Kafka), multi-tenant APIs,
 * scalability, and production-readiness.
 */
const pillars = [
  {
    title: 'Spring Boot Backend Services',
    description: 'REST APIs, domain-driven design, clean architecture. Stateless services designed for horizontal scaling and container deployment.',
    icon: 'server',
  },
  {
    title: 'Event-Driven Systems (Kafka)',
    description: 'Async processing, inter-service communication, eventual consistency. Built event pipelines for inventory sync, campaign attribution, and analytics.',
    icon: 'bolt',
  },
  {
    title: 'Multi-Tenant APIs',
    description: 'Next.js frontend with Spring Boot backend. Tenant-scoped data isolation, shared infrastructure. Platforms serving 4,000+ dealer sites with tenant-specific configurations.',
    icon: 'layer',
  },
]

const iconPaths: Record<string, string> = {
  server:
    'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
  bolt:
    'M13 10V3L4 14h7v7l9-11h-7z',
  layer:
    'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z',
}

export function Microservices() {
  return (
    <Section id="microservices" className="scroll-mt-20">
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Backend Architecture
        </span>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Microservices & <span className="text-accent">Production Systems</span>
        </h2>
        <p className="text-[var(--foreground-muted)] max-w-2xl">
          I build and maintain event-driven, multi-tenant backend systems at scale. Spring Boot, Kafka, PostgreSQL, Redis. Focus on scalability, resilience, and production-readiness.
        </p>
      </div>

      {/* Architecture diagram placeholder — styled boxes representing microservices flow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3 }}
        className="mb-16 rounded-2xl border border-border bg-card p-6 md:p-8 overflow-hidden"
        aria-label="Microservices architecture diagram placeholder"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* API Gateway */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-4 rounded-xl bg-accent-muted/30 border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-center">API Gateway</span>
            <span className="text-xs text-[var(--foreground-subtle)]">Routing · Auth</span>
          </div>
          {/* Services */}
          <div className="col-span-2 md:col-span-2 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-background border border-border text-center">
              <span className="text-sm font-medium block">Inventory API</span>
              <span className="text-xs text-[var(--foreground-subtle)]">Spring Boot</span>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border text-center">
              <span className="text-sm font-medium block">Digital ADS API</span>
              <span className="text-xs text-[var(--foreground-subtle)]">Spring Boot</span>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border text-center">
              <span className="text-sm font-medium block">Dealer API</span>
              <span className="text-xs text-[var(--foreground-subtle)]">Multi-tenant · Next.js + Spring</span>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border text-center">
              <span className="text-sm font-medium block">CRM API</span>
              <span className="text-xs text-[var(--foreground-subtle)]">Spring Boot</span>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border text-center">
              <span className="text-sm font-medium block">Search API</span>
              <span className="text-xs text-[var(--foreground-subtle)]">Typesense</span>
            </div>
          </div>
          {/* Kafka */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-4 rounded-xl bg-accent-muted/30 border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-center">Kafka</span>
            <span className="text-xs text-[var(--foreground-subtle)]">Events · Streams</span>
          </div>
        </div>
        <p className="text-xs text-[var(--foreground-subtle)] mt-6 text-center">
          Event-driven microservices: Spring Boot services, Kafka for async workflows, PostgreSQL + Redis. Production-grade.
        </p>
      </motion.div>

      {/* Pillars */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, i) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-border-hover hover:bg-card-hover transition-colors duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[pillar.icon] || iconPaths.server} />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{pillar.title}</h3>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Metrics / proof points */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="px-4 py-2 rounded-xl bg-accent-muted/50 border border-border">
          <span className="text-sm font-semibold text-accent">4,000+</span>
          <span className="text-sm text-[var(--foreground-muted)] ml-2">dealer sites</span>
        </div>
        <div className="px-4 py-2 rounded-xl bg-accent-muted/50 border border-border">
          <span className="text-sm font-semibold text-accent">Event-driven</span>
          <span className="text-sm text-[var(--foreground-muted)] ml-2">Kafka pipelines</span>
        </div>
        <div className="px-4 py-2 rounded-xl bg-accent-muted/50 border border-border">
          <span className="text-sm font-semibold text-accent">Multi-tenant</span>
          <span className="text-sm text-[var(--foreground-muted)] ml-2">Next.js + Spring</span>
        </div>
      </div>
    </Section>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema } from '@/lib/seo-schema'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = buildMetadata({
  title: 'Event-Driven Systems with Kafka — Data Consistency & Async Workflows',
  description: 'Production Kafka patterns: event-driven architecture, data consistency, async workflows, campaign management. Senior Backend Engineer experience at scale.',
  pathname: '/event-driven-systems-kafka',
  keywords: [
    'Kafka event-driven',
    'Backend Engineer',
    'Scalable API Developer',
    'event-driven architecture',
    'data consistency',
    'async workflows',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Event-Driven Systems with Kafka', url: canonicalUrl('/event-driven-systems-kafka') },
]

export default function EventDrivenSystemsKafkaPage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Event-Driven Systems with Kafka — Data Consistency & Async Workflows',
        description: 'Production Kafka patterns: event-driven architecture, data consistency, async workflows.',
        pathname: '/event-driven-systems-kafka',
        breadcrumbs,
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: b.url,
          })),
        }}
      />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Event-Driven Systems with Kafka: Data Consistency & Async Workflows
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            Production patterns for event-driven architecture. Kafka use cases, data consistency, and scalable inter-service communication. Applied in automotive platforms at scale.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Kafka Use Cases</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Inventory sync across partner systems. Campaign events for budget tracking and lead attribution. CRM workflow triggers. Audit and analytics pipelines.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              High-throughput, fault-tolerant messaging. Decoupled services that scale independently.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Data Consistency</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Exactly-once semantics where critical. Idempotent consumers to handle retries. Event sourcing for audit trails. Saga patterns for distributed transactions.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Schema registry for contract evolution. Dead letter queues for failed messages.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Async Workflows</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Non-blocking processing for long-running tasks. Real-time dashboards fed by event streams. Background jobs for reporting and aggregation.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Backpressure handling. Consumer groups for horizontal scaling. See <Link href="/projects/automotive-digital-platform" className="text-accent hover:underline">Automotive Digital Platform</Link> for real-world implementation.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/projects/automotive-digital-platform">Automotive Platform Case Study</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/spring-boot-architecture">Spring Boot Architecture</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </article>
    </>
  )
}

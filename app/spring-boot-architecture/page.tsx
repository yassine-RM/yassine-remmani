import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema } from '@/lib/seo-schema'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = buildMetadata({
  title: 'Spring Boot Architecture — Real-World API Design & Scalability',
  description: 'Production Spring Boot architecture: REST API design, JWT security, RBAC, Keycloak, event-driven systems, PostgreSQL optimization. Senior Backend Engineer expertise.',
  pathname: '/spring-boot-architecture',
  keywords: [
    'Spring Boot Developer',
    'Backend Engineer Java Spring',
    'Scalable API Developer',
    'Spring Boot architecture',
    'REST API design',
    'JWT security',
    'PostgreSQL optimization',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Spring Boot Architecture', url: canonicalUrl('/spring-boot-architecture') },
]

export default function SpringBootArchitecturePage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Spring Boot Architecture — Real-World API Design & Scalability',
        description: 'Production Spring Boot architecture: REST API design, JWT security, RBAC, Keycloak, event-driven systems, PostgreSQL optimization.',
        pathname: '/spring-boot-architecture',
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
            Spring Boot Architecture: Real-World API Design & Scalability
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            Production patterns for REST APIs, security, event-driven systems, and database optimization. Built from 6+ years of backend engineering.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">REST API Design</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Clean architecture with layered design: Controller → Service → Repository. Versioned APIs, pagination, filtering, and OpenAPI documentation. Idempotent ingestion for partner integrations.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              High-traffic endpoints demand consistent response shapes, proper HTTP semantics, and rate limiting. Redis-backed caching for read-heavy workloads.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Security: JWT, RBAC, Keycloak</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Authentication with JWT and OAuth2. Role-based access control (RBAC) across business domains. Keycloak for SSO and tenant-aware auth in multi-tenant platforms.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Audit trails, token refresh flows, and secure credential handling. Defense in depth for production systems.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Event-Driven Systems</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Kafka for async processing and inter-service communication. Data consistency through event sourcing patterns. Scalable workflows for campaign management, lead attribution, and inventory sync.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              See <Link href="/event-driven-systems-kafka" className="text-accent hover:underline">event-driven architecture with Kafka</Link> for a deeper dive.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">PostgreSQL Optimization</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Schema design for tenant isolation, indexing strategies for high-volume queries, connection pooling. Flyway migrations for versioned schema evolution.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Complex queries optimized for read-heavy workloads. Proper use of EXPLAIN and index tuning.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/nextjs-for-scalable-products">Next.js for Scalable Products</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </article>
    </>
  )
}

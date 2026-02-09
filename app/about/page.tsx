import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'About — Backend Engineer | Spring Boot & Next.js',
  description: 'Yassine REMMANI: Senior Backend Engineer, Spring Boot Developer. 6+ years building scalable APIs, event-driven systems, multi-tenant platforms. AWS, Docker, PostgreSQL.',
  pathname: '/about',
  keywords: ['Backend Engineer', 'Spring Boot Developer', 'API Developer', 'Full-Stack Developer', 'Yassine REMMANI'],
})

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'About — Yassine REMMANI',
        description: 'Backend Engineer with 6+ years building scalable APIs, event-driven systems, multi-tenant platforms. Spring Boot, Next.js, PostgreSQL, Kafka.',
        pathname: '/about',
        breadcrumbs: [{ name: 'Home', url: canonicalUrl('/') }, { name: 'About', url: canonicalUrl('/about') }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yassine REMMANI',
          jobTitle: 'Senior Backend Engineer',
          url: canonicalUrl('/about'),
          sameAs: [
            'https://www.linkedin.com/in/yassine-remmani/',
            'https://github.com/yassine-RM',
          ],
          email: 'remmanidev@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Casablanca',
            addressCountry: 'Morocco',
          },
          image: `${canonicalUrl('')}/images/me.png`,
        }}
      />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'About', item: canonicalUrl('/about') },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">About Yassine REMMANI — Backend Engineer</h1>

        <div className="grid md:grid-cols-[180px_1fr] gap-8 mb-12">
          <Image
            src="/images/me.png"
            alt="Yassine REMMANI — Backend Engineer"
            width={180}
            height={180}
            className="rounded-xl object-cover w-full"
          />
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-semibold mb-2">Full-Stack Engineer · 6+ Years</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              I build production systems. I care about system design, performance, and maintainability. I focus on scalable APIs, event-driven workflows, and multi-tenant platforms.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Real systems: inventory sync, campaign attribution, dealer sites, real-time search. Clean architecture, DDD, proper auth (JWT, OAuth2, Keycloak). Docker, CI/CD, PostgreSQL optimization. No buzzword stuffing—shipping code that scales.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Open to senior full-stack, backend, or platform engineering roles. Passion for building platforms, not just features.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-lg font-semibold">What I deliver</h3>
          <ul className="space-y-3 text-[var(--foreground-muted)]">
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>Scalable REST APIs with Spring Boot</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>Event-driven systems with Kafka</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>Modern frontends with Next.js and React</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>Multi-tenant architectures at scale</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>Production-ready systems with Docker and CI/CD</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-heading text-lg font-semibold mb-3">Technical deep-dives</h3>
          <p className="text-sm text-[var(--foreground-muted)] mb-4">
            I write about architecture patterns I use in production. Relevant for recruiters and tech leads.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/spring-boot-architecture" className="text-sm text-accent hover:underline">Spring Boot architecture</Link>
            <span className="text-[var(--foreground-muted)]">·</span>
            <Link href="/nextjs-for-scalable-products" className="text-sm text-accent hover:underline">Next.js for scalable products</Link>
            <span className="text-[var(--foreground-muted)]">·</span>
            <Link href="/event-driven-systems-kafka" className="text-sm text-accent hover:underline">Event-driven Kafka</Link>
          </div>
        </div>
      </section>
    </>
  )
}

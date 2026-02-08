import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'About — Senior Full-Stack Developer | Spring Boot & Next.js',
  description: 'Yassine REMMANI: Senior Full-Stack Developer, Backend Engineer, Spring Boot Developer. 6+ years building scalable APIs, production-ready systems, multi-tenant platforms. Next.js, PostgreSQL, Kafka.',
  pathname: '/about',
  keywords: ['Spring Boot Developer', 'Backend Engineer', 'Full-Stack Developer', 'Yassine REMMANI'],
})

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yassine REMMANI',
          jobTitle: 'Senior Full-Stack Developer',
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
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">About Yassine REMMANI — Senior Full-Stack Developer</h1>

        <div className="grid md:grid-cols-[180px_1fr] gap-8 mb-12">
          <Image
            src="/images/me.png"
            alt="Yassine REMMANI — Senior Full-Stack Developer"
            width={180}
            height={180}
            className="rounded-xl object-cover w-full"
          />
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-semibold mb-2">Backend Engineer · Spring Boot Developer</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Senior Full-Stack Developer building scalable APIs and production-ready systems. I specialize in Spring Boot and Next.js — backend-first architecture, event-driven workflows, multi-tenant platforms.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              6+ years. High-traffic environments. I design clean architectures, optimize databases, and ship features that perform. Docker, CI/CD, PostgreSQL, Kafka.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Real systems. No fluff. Open to senior full-stack, backend, or platform engineering roles.
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

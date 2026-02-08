import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema } from '@/lib/seo-schema'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = buildMetadata({
  title: 'Next.js for Scalable Products — SSR, SEO, App Router Architecture',
  description: 'Production Next.js patterns: SSR vs CSR, SEO-first UI, App Router architecture, performance tuning. Full-Stack Developer Spring Boot Next.js expertise.',
  pathname: '/nextjs-for-scalable-products',
  keywords: [
    'Full-Stack Developer Spring Boot Next.js',
    'Next.js architecture',
    'SSR SEO',
    'App Router',
    'Server Components',
    'scalable frontend',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Next.js for Scalable Products', url: canonicalUrl('/nextjs-for-scalable-products') },
]

export default function NextJsForScalableProductsPage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Next.js for Scalable Products — SSR, SEO, App Router Architecture',
        description: 'Production Next.js patterns: SSR vs CSR, SEO-first UI, App Router architecture, performance tuning.',
        pathname: '/nextjs-for-scalable-products',
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
            Next.js for Scalable Products: SSR, SEO & App Router
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            Production patterns for SEO-first UIs, server components, and performance. Built for platforms like <Link href="/projects/travelos" className="text-accent hover:underline">TravelOS</Link>.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">SSR vs CSR</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Server-Side Rendering for SEO-critical pages: landing, destinations, articles. Client-Side Rendering for interactive dashboards and forms. Hybrid approach for optimal UX and crawlability.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Dynamic content with static generation where possible. Incremental Static Regeneration (ISR) for content that updates periodically.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">SEO-First UI</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              Metadata optimization per page. OpenGraph and Twitter cards. Structured data (Schema.org) for rich snippets. Canonical URLs to avoid duplicate content.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Sitemap generation, robots.txt, semantic HTML. Fast LCP and CLS for Core Web Vitals. These patterns power TravelOS and other content platforms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">App Router Architecture</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              App Router with server components by default. Colocated data fetching. Streaming for progressive rendering. Layouts and nested routes for consistent structure.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Client components only where interactivity is needed. Reduced bundle size and faster initial load.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Performance Tuning</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              next/image for optimized images. Font optimization with next/font. Lazy loading for below-the-fold content. Lighthouse 95+ targets.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              Caching strategies, edge when appropriate. Minimal JavaScript for content-heavy pages.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/projects/travelos">TravelOS Case Study</Link>
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

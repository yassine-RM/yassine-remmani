import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Articles & Insights',
  description: 'Thoughts on full-stack development, Spring Boot, Next.js, and software engineering.',
  pathname: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: canonicalUrl('/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: canonicalUrl('/blog'),
            },
          ],
        }}
      />
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Blog
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Articles & <span className="text-teal">Insights</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Thoughts on full-stack development, Spring Boot, Next.js, and software engineering.
          </p>
        </div>

        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-12 text-center shadow-card">
          <svg className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h2 className="font-heading text-xl font-bold mb-2">Coming Soon</h2>
          <p className="text-[var(--text-secondary)]">
            Blog posts will be added here. Check back soon for articles on full-stack development, Spring Boot, Next.js, and more.
          </p>
        </div>
      </section>
    </>
  )
}


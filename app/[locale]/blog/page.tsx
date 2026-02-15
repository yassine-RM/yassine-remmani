import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { getTranslations } from '@/lib/translations'
import { getAllPosts } from '@/lib/blog'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  return buildMetadata({
    title: t.blogPage.metaTitle,
    description: t.blogPage.metaDescription,
    pathname: `/${locale}/blog`,
  })
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/blog`
  const homePath = `/${locale}`
  const posts = getAllPosts()

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Blog — Articles & Insights',
        description: t.blogPage.subtitle,
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.blogPage.badge, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.blogPage.badge, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            {t.blogPage.badge}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.blogPage.h1} <span className="text-accent">{t.blogPage.h1Accent}</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t.blogPage.subtitle}
          </p>
        </div>

        {posts.length > 0 ? (
          <ul className="space-y-6" role="list">
            {posts.map((post) => {
              const tr = t.blogPosts[post.slug as keyof typeof t.blogPosts]
              const title = (tr as { title?: string } | undefined)?.title ?? post.title
              const excerpt = (tr as { excerpt?: string } | undefined)?.excerpt ?? post.excerpt
              const readingTime = (tr as { readingTime?: string } | undefined)?.readingTime ?? post.readingTime
              return (
                <li key={post.slug}>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="block bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-6 shadow-card hover:border-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                  >
                    <h2 className="font-heading text-xl font-bold mb-2">{title}</h2>
                    <p className="text-[var(--text-secondary)] text-sm mb-3 line-clamp-2">
                      {excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[var(--foreground-muted)]">
                      <time dateTime={post.date}>{post.date}</time>
                      {readingTime && (
                        <>
                          <span aria-hidden>·</span>
                          <span>{readingTime}</span>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-12 text-center shadow-card">
            <svg className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <h2 className="font-heading text-xl font-bold mb-2">{t.blogPage.comingSoon}</h2>
            <p className="text-[var(--text-secondary)]">
              {t.blogPage.comingSoonDesc}
            </p>
          </div>
        )}
      </section>
    </>
  )
}

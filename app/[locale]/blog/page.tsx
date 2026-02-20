import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { getTranslations } from '@/lib/translations'
import { getAllPosts, blogCoverImageSrc } from '@/lib/blog'
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
          <ul className="space-y-4" role="list">
            {posts.map((post) => {
              const tr = t.blogPosts[post.slug as keyof typeof t.blogPosts]
              const title = (tr as { title?: string } | undefined)?.title ?? post.title
              const excerpt = (tr as { excerpt?: string } | undefined)?.excerpt ?? post.excerpt
              const readingTime = (tr as { readingTime?: string } | undefined)?.readingTime ?? post.readingTime
              const coverSrc = post.coverImage ? blogCoverImageSrc(post.coverImage) : null
              return (
                <li key={post.slug}>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="group flex flex-col sm:flex-row gap-0 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--border-color)] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                  >
                    {coverSrc ? (
                      <div className="relative w-full sm:w-44 sm:min-w-[11rem] h-36 sm:min-h-[140px] sm:h-full bg-[var(--bg)] flex-shrink-0 self-stretch overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={coverSrc}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-full sm:w-44 sm:min-w-[11rem] h-36 sm:min-h-[140px] sm:h-full bg-[var(--bg)] flex-shrink-0 self-stretch flex items-center justify-center">
                        <svg className="w-10 h-10 text-[var(--foreground-muted)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col justify-center p-4 pt-0 sm:pt-5 sm:p-5 min-w-0">
                      <h2 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-1.5 line-clamp-2 group-hover:text-accent transition-colors">
                        {title}
                      </h2>
                      <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">
                        {excerpt}
                      </p>
                      <div className="flex items-center gap-2.5 text-xs text-[var(--foreground-muted)]">
                        <time dateTime={post.date}>{post.date}</time>
                        {readingTime && (
                          <>
                            <span className="text-[var(--border-color)]" aria-hidden>·</span>
                            <span>{readingTime}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="hidden sm:flex self-center pr-4 text-[var(--foreground-muted)]" aria-hidden>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
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

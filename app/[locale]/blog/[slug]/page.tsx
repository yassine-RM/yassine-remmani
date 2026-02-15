import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SimpleMarkdown } from '@/components/blog/SimpleMarkdown'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema, blogPostingSchema } from '@/lib/seo-schema'
import { getTranslations } from '@/lib/translations'
import { getAllPosts, getPostBySlug, getPostRawContent, stripFrontmatter } from '@/lib/blog'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'fr']
  const posts = getAllPosts()
  return posts.flatMap((post) =>
    locales.map((locale) => ({ locale, slug: post.slug }))
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const meta = getPostBySlug(slug)
  if (!meta) return {}

  const t = getTranslations(locale as Locale)
  const tr = t.blogPosts[slug as keyof typeof t.blogPosts] as { title?: string; excerpt?: string } | undefined
  const title = tr?.title ?? meta.title
  const description = tr?.excerpt ?? meta.excerpt

  const pathname = `/${locale}/blog/${slug}`
  return buildMetadata({
    title,
    description,
    pathname,
    type: 'article',
    publishedTime: meta.date,
    keywords: meta.keywords,
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params
  const t = getTranslations(locale as Locale)
  const meta = getPostBySlug(slug)
  const raw = getPostRawContent(slug, locale)

  if (!meta || !raw) {
    notFound()
  }

  const tr = t.blogPosts[slug as keyof typeof t.blogPosts] as { title?: string; excerpt?: string; readingTime?: string } | undefined
  const title = tr?.title ?? meta.title
  const excerpt = tr?.excerpt ?? meta.excerpt
  const readingTime = tr?.readingTime ?? meta.readingTime

  const pathname = `/${locale}/blog/${slug}`
  const blogPath = `/${locale}/blog`
  const homePath = `/${locale}`

  const markdownBody = stripFrontmatter(raw)

  const breadcrumbs = [
    { name: t.nav.home, url: canonicalUrl(homePath) },
    { name: t.blogPage.badge, url: canonicalUrl(blogPath) },
    { name: title, url: canonicalUrl(pathname) },
  ]

  return (
    <>
      <SeoJsonLd
        data={webPageSchema({
          name: title,
          description: excerpt,
          pathname,
          breadcrumbs,
        })}
      />
      <SeoJsonLd
        data={blogPostingSchema({
          headline: title,
          description: excerpt,
          url: canonicalUrl(pathname),
          datePublished: meta.date,
          dateModified: meta.date,
          keywords: meta.keywords,
        })}
      />
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
            href={blogPath}
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.blogPage.badge}
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-[var(--text-secondary)] mb-2">{excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-muted)]">
            <time dateTime={meta.date}>{meta.date}</time>
            {readingTime && (
              <>
                <span aria-hidden>·</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none prose-headings:font-heading prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-pre:bg-[var(--bg-surface)] prose-pre:border prose-pre:border-[var(--border-color)]">
          <SimpleMarkdown content={markdownBody} />
        </div>
      </article>
    </>
  )
}

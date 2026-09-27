import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SimpleMarkdown } from '@/components/blog/SimpleMarkdown'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { projects } from '@/lib/constants'
import { graph, webPageNodes, blogPostingNode } from '@/lib/seo-schema'
import { getTranslations } from '@/lib/translations'
import Image from 'next/image'
import { getAllPosts, getPostBySlug, getPostLocales, getPostRawContent, stripFrontmatter, blogCoverImageSrc } from '@/lib/blog'
import { localePath, type Locale } from '@/lib/i18n'

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
  const available = getPostLocales(slug)
  // A locale that only falls back to the English body is a duplicate: canonicalize to the original.
  const isFallback = !available.includes(locale as Locale)
  return buildMetadata({
    title: `${title} | Yassine Remmani`,
    description,
    pathname,
    locale: locale as Locale,
    type: 'article',
    publishedTime: meta.date,
    keywords: meta.keywords,
    image: meta.coverImage ? blogCoverImageSrc(meta.coverImage) : undefined,
    imageAlt: title,
    availableLocales: available,
    canonicalPathname: isFallback ? `/${available[0]}/blog/${slug}` : undefined,
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

  const available = getPostLocales(slug)
  // Structured data follows the canonical URL (the original language for untranslated posts).
  const pathname = available.includes(locale as Locale) ? `/${locale}/blog/${slug}` : `/${available[0]}/blog/${slug}`
  const blogPath = `/${locale}/blog`
  const homePath = `/${locale}`

  const markdownBody = stripFrontmatter(raw)
  const coverSrc = meta.coverImage ? blogCoverImageSrc(meta.coverImage) : undefined

  const relatedProjects = (meta.relatedProjects ?? []).flatMap((projectSlug) => {
    const project = projects.find((p) => p.slug === projectSlug)
    if (!project) return []
    const tp = t.data.projects.find((p) => p.slug === projectSlug)
    return [{ slug: projectSlug, title: tp?.title ?? project.title, summary: tp?.summary ?? project.summary }]
  })
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const tp = t.blogPosts[p.slug as keyof typeof t.blogPosts] as { title?: string } | undefined
      return { slug: p.slug, title: tp?.title ?? p.title }
    })

  const breadcrumbs = [
    { name: t.nav.home, url: canonicalUrl(homePath) },
    { name: t.blogPage.badge, url: canonicalUrl(blogPath) },
    { name: title, url: canonicalUrl(pathname) },
  ]

  return (
    <>
      <SeoJsonLd
        data={graph(
          ...webPageNodes({
            name: title,
            description: excerpt,
            pathname,
            locale: locale as Locale,
            image: coverSrc,
            breadcrumbs,
          }),
          blogPostingNode({
            headline: title,
            description: excerpt,
            url: canonicalUrl(pathname),
            datePublished: meta.date,
            keywords: meta.keywords,
            image: coverSrc,
            locale: locale as Locale,
          })
        )}
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

        {meta.coverImage && (
          <div className="relative w-full aspect-[2/1] max-h-[360px] rounded-xl overflow-hidden border border-[var(--border-color)] mb-10">
            <Image
              src={blogCoverImageSrc(meta.coverImage)}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
        )}

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-[var(--text-secondary)] mb-2">{excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-muted)]">
            <span>
              {t.blogPage.writtenBy}{' '}
              <Link href={localePath(locale as Locale, '/about')} rel="author" className="text-foreground hover:text-accent transition-colors">
                Yassine Remmani
              </Link>
            </span>
            <span aria-hidden>·</span>
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

        {relatedProjects.length > 0 && (
          <section aria-labelledby="related-projects" className="mt-16 pt-8 border-t border-border">
            <h2 id="related-projects" className="font-heading text-lg font-semibold mb-4">{t.blogPage.relatedProjects}</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {relatedProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={localePath(locale as Locale, `/projects/${p.slug}`)}
                    className="block h-full rounded-xl border border-border bg-card p-5 hover:border-border-hover transition-colors"
                  >
                    <span className="font-heading font-semibold text-foreground">{p.title}</span>
                    <span className="block text-sm text-[var(--foreground-muted)] mt-1.5 line-clamp-3">{p.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {otherPosts.length > 0 && (
          <nav aria-labelledby="related-articles" className="mt-12">
            <h2 id="related-articles" className="font-heading text-lg font-semibold mb-3">{t.blogPage.relatedArticles}</h2>
            <ul className="space-y-2">
              {otherPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={localePath(locale as Locale, `/blog/${p.slug}`)} className="text-sm text-accent hover:underline">{p.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <aside aria-label={t.blogPage.aboutAuthor} className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-[var(--foreground-muted)]">
            {t.blogPage.writtenBy}{' '}
            <Link href={localePath(locale as Locale, '/about')} rel="author" className="font-semibold text-foreground hover:text-accent transition-colors">
              Yassine Remmani
            </Link>
          </p>
          <p className="text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">{t.blogPage.authorBio}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
            <Link href={localePath(locale as Locale, '/projects')} className="text-sm text-accent hover:underline">{t.aboutPage.projectsLink}</Link>
            <Link href={localePath(locale as Locale, '/resume')} className="text-sm text-accent hover:underline">{t.aboutPage.resumeLink}</Link>
            <Link href={localePath(locale as Locale, '/blog')} className="text-sm text-accent hover:underline">{t.aboutPage.blogLink}</Link>
          </div>
        </aside>
      </article>
    </>
  )
}

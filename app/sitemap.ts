import type { MetadataRoute } from 'next'
import { projects } from '@/lib/constants'
import { getAllPosts, getPostLocales } from '@/lib/blog'
import { locales, type Locale } from '@/lib/i18n'
import { canonicalUrl, languageAlternates } from '@/lib/seo'

export const dynamic = 'force-static'

type Entry = MetadataRoute.Sitemap[number]

const staticPaths: { path: string; priority: number; changeFrequency: Entry['changeFrequency'] }[] = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/resume', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/experience', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/skills', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/spring-boot-architecture', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/nextjs-for-scalable-products', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/event-driven-systems-kafka', priority: 0.6, changeFrequency: 'yearly' },
]

/** One entry per canonical, indexable URL, each with its hreflang alternates. */
function localized(
  path: string,
  options: Omit<Entry, 'url' | 'alternates'>,
  available: readonly Locale[] = locales
): Entry[] {
  return available.map((locale) => ({
    url: canonicalUrl(`/${locale}${path}`),
    ...options,
    alternates: { languages: languageAlternates(path, available) },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latestPost = posts.map((p) => p.date).sort().at(-1)

  return [
    ...staticPaths.flatMap(({ path, priority, changeFrequency }) =>
      localized(path, {
        priority,
        changeFrequency,
        ...(path === '/blog' && latestPost ? { lastModified: latestPost } : {}),
      })
    ),
    ...projects.flatMap((project) =>
      localized(`/projects/${project.slug}`, { priority: 0.7, changeFrequency: 'yearly' })
    ),
    // Untranslated posts only list their original-language URL.
    ...posts.flatMap((post) =>
      localized(
        `/blog/${post.slug}`,
        { priority: 0.7, changeFrequency: 'yearly', lastModified: post.date },
        getPostLocales(post.slug)
      )
    ),
  ]
}

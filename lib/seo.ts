import type { Metadata } from 'next'
import { locales, type Locale } from './i18n'

/**
 * The canonical production origin — apex, https, no trailing slash.
 *
 * ## Why this one line matters more than it looks
 *
 * Everything machine-facing is built from it: every canonical, every hreflang
 * alternate, every sitemap `<loc>`, `metadataBase`, robots' `host` and
 * `sitemap`, and — the expensive part — every schema `@id`. `PERSON_ID`,
 * `WEBSITE_ID`, `#person-image` and `#project-*` are all `${siteUrl}`-derived,
 * and those ids are what joins every page of this site to one entity. Changing
 * the host rewrites all of them, so a search engine has to re-learn the
 * identity rather than recognise it.
 *
 * ## The symptom this comment exists for
 *
 * On 2026-10-11 Search Console reported `https://remmani.dev/` as a
 * **Redirect error** and `https://remmani.dev/en` as **"Duplicate without
 * user-selected canonical"**, while nine of eleven inspected URLs had never
 * been indexed at all — against a sitemap with zero errors. Both symptoms are
 * what you get when a page's canonical names a host that redirects somewhere
 * else.
 *
 * Measured on 2026-10-11:
 *
 *     curl -sIL https://remmani.dev/
 *     HTTP/2 308
 *     location: https://www.remmani.dev/
 *
 * So **www is the primary host** and the apex redirects to it, while every
 * canonical built from this constant names the apex. Each page therefore
 * declares a canonical pointing at a URL that bounces, and `/` is the head of
 * a chain — apex → www → /en — which is the redirect error.
 *
 * ## Fix it at Vercel, not here
 *
 * Make the **apex** primary and let www redirect to it. Two reasons that beats
 * editing this line:
 *
 * 1. `/en/resume` is the one page Google has indexed, and it is indexed with
 *    `googleCanonical = https://remmani.dev/en/resume`. The apex is the host
 *    Google has already accepted.
 * 2. Pointing this at www would rewrite every `@id` above and throw away the
 *    entity association built so far.
 *
 * Doing it that way needs no deploy and no change here: the code already
 * names the host Google has accepted, and the existing Search Console
 * property is the apex too, so everything lines up at once.
 *
 * Only if the apex genuinely cannot be primary should this become
 * `'https://www.remmani.dev'` — and then it is this single edit, nothing else,
 * because no other file hardcodes the origin. That path also needs a Search
 * Console property for www, and every `@id` above changes. (The three remaining mentions of
 * the bare domain — two `portfolio:` labels and the OG image caption — are
 * display text, not URLs, and should stay as they are.)
 */
export const siteUrl = 'https://remmani.dev'
export const personName = 'Yassine Remmani'
export const siteName = 'Yassine Remmani'
export const personJobTitle = 'Senior Full-Stack Developer'

/**
 * Profiles that are unmistakably the same person.
 *
 * `sameAs` is how an answer engine joins "Yassine Remmani" on this domain to
 * the same person elsewhere — the difference between a name on a page and an
 * entity it can be confident about. Every entry has to be a profile that
 * genuinely belongs here: a guessed URL attaches this identity to somebody
 * else's account, which is worse than a short list.
 *
 * `x` is taken from `twitter_username` on the GitHub account above, which is
 * self-declared on an account this person controls. Anything further —
 * Stack Overflow, dev.to, Malt, Crunchbase, ORCID — has to be supplied
 * rather than inferred.
 */
export const socialProfiles = {
  linkedin: 'https://www.linkedin.com/in/yassine-remmani/',
  github: 'https://github.com/yassine-RM',
  x: 'https://x.com/YassineRMM',
} as const

export function canonicalUrl(pathname: string): string {
  return `${siteUrl}${pathname === '/' ? '' : pathname}`
}

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${siteUrl}${path.startsWith('/') ? '' : '/'}${path}`
}

/** Strip the leading /{locale} segment: "/fr/about" → "/about", "/en" → "". */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|fr)(\/.*)?$/)
  return match ? match[2] ?? '' : pathname
}

/**
 * hreflang map for a localized path. `availableLocales` restricts the map
 * when a page only exists in some languages (e.g. an untranslated article).
 */
export function languageAlternates(
  pathname: string,
  availableLocales: readonly Locale[] = locales
): Record<string, string> {
  const path = stripLocale(pathname)
  const languages: Record<string, string> = {}
  for (const l of availableLocales) {
    languages[l] = canonicalUrl(`/${l}${path}`)
  }
  const fallback = availableLocales.includes('en') ? 'en' : availableLocales[0]
  languages['x-default'] = canonicalUrl(`/${fallback}${path}`)
  return languages
}

export function defaultOgImage(locale: Locale): string {
  return `/${locale}/opengraph-image`
}

export interface PageMetadata {
  title: string
  description: string
  pathname: string
  locale: Locale
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  keywords?: string[]
  /** Canonical override, e.g. an untranslated page pointing to its English original. */
  canonicalPathname?: string
  availableLocales?: readonly Locale[]
}

export function buildMetadata({
  title,
  description,
  pathname,
  locale,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords,
  canonicalPathname,
  availableLocales,
}: PageMetadata): Metadata {
  const canonical = canonicalUrl(canonicalPathname ?? pathname)
  const ogImage = absoluteUrl(image ?? defaultOgImage(locale))
  const alt = imageAlt ?? `${personName} — ${personJobTitle}`

  return {
    // Titles are written in full per page; skip the layout template.
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical,
      languages: languageAlternates(canonicalPathname ?? pathname, availableLocales),
    },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      siteName,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
      // Only the generated default image has known 1200×630 dimensions.
      images: [image ? { url: ogImage, alt } : { url: ogImage, width: 1200, height: 630, alt }],
      ...(type === 'article'
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime, authors: [siteUrl] }
        : {}),
      ...(type === 'profile' ? { firstName: 'Yassine', lastName: 'Remmani' } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: ogImage, alt }],
    },
  }
}

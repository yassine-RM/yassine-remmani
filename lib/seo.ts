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
 * ## Which host is canonical, and how that was established
 *
 * The apex. Measured 2026-10-11, server-side (the qualifier matters — see the
 * next section):
 *
 *     https://remmani.dev/      → 308 → https://remmani.dev/en   (same host)
 *     https://remmani.dev/en    → 200
 *
 * The redirect on `/` is this repo's own `middleware.ts` sending the bare root
 * to the default locale. It stays on the apex, so no canonical built from this
 * constant points at a host that bounces somewhere else.
 *
 * `www.remmani.dev` was not attached to the Vercel project at all, so it had
 * no certificate and failed its TLS handshake outright — and because the whole
 * `.dev` TLD is HSTS-preloaded, a browser offers no way past that. It was
 * added on 2026-10-11 as a permanent redirect to the apex, which is the right
 * shape: one host serves, the other folds into it.
 *
 * ## A measurement that was wrong, kept here on purpose
 *
 * An earlier revision of this comment stated that the apex 308-redirected to
 * www, and concluded that www was the primary host. That rested on a single
 * `curl -sIL https://remmani.dev/` run from a café network. That same network
 * could not load the site in a browser at all while a phone on 4G could, and
 * `.dev` being HSTS-preloaded is precisely what makes a filtering or
 * intercepting network fail on this domain while ordinary sites keep working.
 * The redirect it reported was not reproducible from anywhere else.
 *
 * The part worth keeping: a redirect measured once, from one network, is a
 * claim about that network as much as about the origin.
 *
 * ## The Search Console symptoms this comment started from
 *
 * On 2026-10-11 Search Console reported `https://remmani.dev/` as a
 * **Redirect error** and `https://remmani.dev/en` as **"Duplicate without
 * user-selected canonical"**, with nine of eleven inspected URLs never indexed,
 * against a sitemap reporting zero errors.
 *
 * Those reports describe a site that is not the one measured above, so the
 * working assumption is that they are stale — crawled while www was
 * unreachable, or before the domains settled. **That assumption is
 * unconfirmed.** It gets resolved by requesting indexing for `/` and `/en` and
 * re-inspecting. If `/en` still comes back as a duplicate after that, the
 * cause is something this comment has not found, and the next person should
 * start looking rather than trusting this paragraph.
 *
 * ## If the host ever has to change
 *
 * It is this single edit and nothing else, because no other file hardcodes the
 * origin — but it rewrites every `@id` above, discards the entity association
 * built so far, and needs its own Search Console property. `/en/resume` is
 * indexed with `googleCanonical = https://remmani.dev/en/resume`, so the apex
 * is the host Google has already accepted. (The three remaining mentions of
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

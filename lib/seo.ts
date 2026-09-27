import type { Metadata } from 'next'
import { locales, type Locale } from './i18n'

/** Canonical production origin (apex, https, no trailing slash). */
export const siteUrl = 'https://remmani.dev'
export const personName = 'Yassine Remmani'
export const siteName = 'Yassine Remmani'
export const personJobTitle = 'Senior Full-Stack Developer'

export const socialProfiles = {
  linkedin: 'https://www.linkedin.com/in/yassine-remmani/',
  github: 'https://github.com/yassine-RM',
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

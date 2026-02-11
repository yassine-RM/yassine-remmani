export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

/** Path with locale prefix (no leading slash on segment). */
export function localePath(locale: Locale, path: string): string {
  const segment = path === '/' ? '' : path
  return `/${locale}${segment}`
}

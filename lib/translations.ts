import { type Locale } from '@/lib/i18n'
import { en } from '@/messages/en'
import { fr } from '@/messages/fr'
import type { Messages } from '@/messages/en'

const messages: Record<Locale, Messages> = {
  en,
  fr,
}

export type { Messages }

export function getTranslations(locale: Locale): Messages {
  return messages[locale] ?? en
}

/**
 * Replace simple {key} placeholders in a string.
 * e.g. replaceParams('© {year} Name', { year: '2025' }) => '© 2025 Name'
 */
export function replaceParams(text: string, params: Record<string, string>): string {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`\\{${key}\\}`, 'g'), value),
    text
  )
}

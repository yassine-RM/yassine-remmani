/**
 * CV content — recruiter & ATS friendly.
 * Translated content comes from messages; this file re-exports getCvData for the PDF generator.
 */

import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

/** Returns locale-aware CV data from messages. Used by CVDocument and PDF generation. */
export function getCvData(locale: Locale) {
  const t = getTranslations(locale)
  return t.cv
}

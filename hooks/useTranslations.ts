'use client'

import { useLocale } from '@/components/LocaleProvider'
import { getTranslations } from '@/lib/translations'

export function useTranslations() {
  const locale = useLocale()
  return getTranslations(locale)
}

'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'

export function SetLocaleLang() {
  const pathname = usePathname()

  useEffect(() => {
    const segment = pathname?.split('/')[1]
    const lang: string = segment && isValidLocale(segment) ? segment : 'en'
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en'
  }, [pathname])

  return null
}

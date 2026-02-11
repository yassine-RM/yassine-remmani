'use client'

import Link from 'next/link'
import { useLocale } from '@/components/LocaleProvider'
import { localePath } from '@/lib/i18n'
import { useTranslations } from '@/hooks/useTranslations'

export function About() {
  const locale = useLocale()
  const t = useTranslations()
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          {t.aboutSection.title}
        </h2>
        <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
          <p>{t.aboutSection.p1}</p>
          <p>{t.aboutSection.p2}</p>
          <p>{t.aboutSection.p3}</p>
        </div>
        <Link
          href={localePath(locale, '/about')}
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          {t.aboutSection.readMore}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

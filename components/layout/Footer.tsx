'use client'

import Link from 'next/link'
import { useLocale } from '@/components/LocaleProvider'
import { localePath } from '@/lib/i18n'
import { useTranslations } from '@/hooks/useTranslations'
import { replaceParams } from '@/lib/translations'

const architecturePaths = [
  { path: '/spring-boot-architecture', labelKey: 'springBoot' as const },
  { path: '/nextjs-for-scalable-products', labelKey: 'nextjs' as const },
  { path: '/event-driven-systems-kafka', labelKey: 'eventDrivenKafka' as const },
]

export function Footer() {
  const locale = useLocale()
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="text-sm text-[var(--foreground-muted)] mb-4">
              {replaceParams(t.footer.copyright, { year: String(currentYear) })}
            </p>
            <p className="text-xs text-[var(--foreground-muted)] max-w-sm">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <nav aria-label="Architecture & technical content">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)] mb-3">{t.footer.architecture}</h3>
              <ul className="space-y-2">
                {architecturePaths.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={localePath(locale, link.path)}
                      className="text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors"
                    >
                      {t.footer[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Social links">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)] mb-3">{t.footer.connect}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:remmanidev@gmail.com" className="text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors">
                    {t.footer.email}
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/yassine-remmani/" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors">
                    {t.footer.linkedin}
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/yassine-RM" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors">
                    {t.footer.github}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

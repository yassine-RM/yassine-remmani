'use client'

import { useTranslations } from '@/hooks/useTranslations'

const iconMap: Record<string, string> = {
  server: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'layer-group': 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z',
  rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
  sparkles: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
}

const serviceKeys = [
  { icon: 'server' as const, titleKey: 'backendTitle' as const, descKey: 'backendDesc' as const },
  { icon: 'code' as const, titleKey: 'frontendTitle' as const, descKey: 'frontendDesc' as const },
  { icon: 'layer-group' as const, titleKey: 'multiTenantTitle' as const, descKey: 'multiTenantDesc' as const },
  { icon: 'rocket' as const, titleKey: 'devopsTitle' as const, descKey: 'devopsDesc' as const },
  { icon: 'sparkles' as const, titleKey: 'aiTitle' as const, descKey: 'aiDesc' as const },
]

export function Services() {
  const t = useTranslations()
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {t.services.badge}
        </div>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {t.services.title} <span className="text-accent">{t.services.titleAccent}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceKeys.map(({ icon, titleKey, descKey }) => (
          <article
            key={titleKey}
            className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-5 shadow-card"
          >
            <h3 className="flex items-center gap-3 mb-3 text-lg font-bold">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconMap[icon] || iconMap.code} />
              </svg>
              {t.services[titleKey]}
            </h3>
            <p className="text-[var(--text-secondary)]">{t.services[descKey]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}


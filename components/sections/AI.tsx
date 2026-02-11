'use client'

import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

export function AI() {
  const t = useTranslations()
  const items = [
    { title: t.aiSection.useCasesTitle, description: t.aiSection.useCasesDesc },
    { title: t.aiSection.guardrailsTitle, description: t.aiSection.guardrailsDesc },
    { title: t.aiSection.stackTitle, description: t.aiSection.stackDesc },
  ]

  return (
    <Section id="ai" className="scroll-mt-20">
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          {t.aiSection.badge}
        </span>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {t.aiSection.title} <span className="text-accent">{t.aiSection.titleAccent}</span>
        </h2>
        <p className="text-[var(--foreground-muted)] max-w-2xl">
          {t.aiSection.intro}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-xl border border-border bg-card p-5 md:p-6"
          >
            <h3 className="font-heading text-lg font-semibold mb-2 text-accent">
              {item.title}
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

'use client'

import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

const pillarKeys = [
  'cleanArchTitle',
  'solidTitle',
  'testingTitle',
  'cicdTitle',
  'observabilityTitle',
] as const
const descKeys = [
  'cleanArchDesc',
  'solidDesc',
  'testingDesc',
  'cicdDesc',
  'observabilityDesc',
] as const

export function HowIBuild() {
  const t = useTranslations()
  const pillars = pillarKeys.map((titleKey, i) => ({
    title: t.howIBuild[titleKey],
    description: t.howIBuild[descKeys[i]],
  }))

  return (
    <Section id="how-i-build" className="scroll-mt-20">
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {t.howIBuild.badge}
        </span>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {t.howIBuild.title} <span className="text-accent">{t.howIBuild.titleAccent}</span>
        </h2>
        <p className="text-[var(--foreground-muted)] max-w-2xl">
          {t.howIBuild.intro}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, idx) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-xl border border-border bg-card p-5 md:p-6"
          >
            <h3 className="font-heading text-lg font-semibold mb-2 text-accent">
              {pillar.title}
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

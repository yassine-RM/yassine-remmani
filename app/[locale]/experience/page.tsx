import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    title: 'Experience & Education — Backend Engineer',
    description: 'Backend Engineer. 6+ years building high-traffic REST APIs, event-driven Kafka systems, multi-tenant platforms. Spring Boot, Next.js, PostgreSQL, Docker.',
    pathname: `/${locale}/experience`,
  })
}

export default async function ExperiencePage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/experience`
  const homePath = `/${locale}`
  const experience = t.data.experience
  const education = t.data.education

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Experience & Education — Yassine REMMANI',
        description: 'Senior Full-Stack Developer. 6+ years building high-traffic APIs, event-driven systems, multi-tenant platforms. Master\'s in Computer Science & AI.',
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.nav.experience, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.nav.experience, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">{t.experiencePage.h1}</h1>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden />
          <ul className="space-y-12">
            {experience.map((job) => (
              <li key={job.company + job.role} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3px]" />
                <div className="mb-4">
                  <h2 className="font-heading text-lg font-semibold">{job.role}</h2>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    {job.company}
                    {job.location && ` · ${job.location}`}
                  </p>
                  {job.context && (
                    <p className="text-xs text-[var(--foreground-subtle)] mt-1 italic">
                      {job.context}
                    </p>
                  )}
                  <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                    {job.period}
                  </p>
                </div>
                {'contextSummary' in job && job.contextSummary && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.experienceSection.context}</span>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">{job.contextSummary}</p>
                  </div>
                )}
                {'actionSummary' in job && job.actionSummary && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.experienceSection.action}</span>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">{job.actionSummary}</p>
                  </div>
                )}
                {'tech' in job && job.tech && job.tech.length > 0 && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.experienceSection.tech}</span>
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">{job.tech.join(' · ')}</p>
                  </div>
                )}
                {'impact' in job && job.impact && job.impact.length > 0 && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.experienceSection.impact}</span>
                    <ul className="mt-1 space-y-1">
                      {job.impact.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-[var(--foreground-muted)]">
                          <span className="text-accent shrink-0">→</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <ul className="space-y-2 text-[var(--foreground-muted)]">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-bold mt-16 mb-8">{t.experiencePage.educationTitle}</h2>
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.institution + item.degree}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-heading font-semibold">{item.degree}</h3>
              <p className="text-[var(--foreground-muted)] text-sm mt-1">{item.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

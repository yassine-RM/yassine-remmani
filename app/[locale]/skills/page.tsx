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
    title: 'Skills',
    description: 'Backend: Spring Boot, Java, PostgreSQL. Frontend: Next.js, React, TypeScript. DevOps: Docker, CI/CD. Architecture: Clean Architecture, DDD, REST.',
    pathname: `/${locale}/skills`,
  })
}

const categoryKeys = ['backend', 'frontend', 'cloudDevops', 'architecture'] as const

export default async function SkillsPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/skills`
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Skills — Yassine REMMANI',
        description: 'Backend: Spring Boot, Java, PostgreSQL. Frontend: Next.js, React, TypeScript. DevOps: Docker, CI/CD. Architecture: Clean Architecture, DDD, REST.',
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.nav.skills, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.nav.skills, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">{t.skillsPage.h1}</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categoryKeys.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-sm font-semibold text-accent mb-4">
                {t.skillsSection[key]}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {t.data.skills[key].map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-sm text-[var(--foreground-muted)] bg-background rounded-lg border border-border"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

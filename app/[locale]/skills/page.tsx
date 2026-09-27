import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { graph, webPageNodes } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  return buildMetadata({
    title: t.seo.skills.title,
    description: t.seo.skills.description,
    pathname: `/${locale}/skills`,
    locale: locale as Locale,
  })
}

const categoryKeys = ['backend', 'frontend', 'databases', 'cloudDevops', 'architecture', 'ai'] as const

export default async function SkillsPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/skills`
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd
        data={graph(
          ...webPageNodes({
            type: 'WebPage',
            name: t.seo.skills.title,
            description: t.seo.skills.description,
            pathname,
            locale: locale as Locale,
            breadcrumbs: [
              { name: t.nav.home, url: canonicalUrl(homePath) },
              { name: t.nav.skills, url: canonicalUrl(pathname) },
            ],
          })
        )}
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

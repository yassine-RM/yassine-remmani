import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema } from '@/lib/seo-schema'
import { Button } from '@/components/ui/button'
import { localePath } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/spring-boot-architecture`
  return buildMetadata({
    title: t.springBootPage.h1,
    description: t.springBootPage.subtitle,
    pathname,
    keywords: [
      'Spring Boot Developer',
      'Backend Engineer Java Spring',
      'Scalable API Developer',
      'Spring Boot architecture',
      'REST API design',
      'JWT security',
      'PostgreSQL optimization',
    ],
  })
}

export default async function SpringBootArchitecturePage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/spring-boot-architecture`
  const homePath = `/${locale}`

  const breadcrumbs = [
    { name: t.nav.home, url: canonicalUrl(homePath) },
    { name: t.springBootPage.breadcrumbTitle, url: canonicalUrl(pathname) },
  ]

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: t.springBootPage.h1,
        description: t.springBootPage.subtitle,
        pathname,
        breadcrumbs,
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: b.url,
          })),
        }}
      />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href={homePath}
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.springBootPage.breadcrumbHome}
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {t.springBootPage.h1}
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            {t.springBootPage.subtitle}
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.springBootPage.restTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              {t.springBootPage.restP1}
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {t.springBootPage.restP2}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.springBootPage.securityTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              {t.springBootPage.securityP1}
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {t.springBootPage.securityP2}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.springBootPage.eventDrivenTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              {t.springBootPage.eventDrivenP1}
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              See <Link href={localePath(locale as Locale, '/event-driven-systems-kafka')} className="text-accent hover:underline">{t.springBootPage.eventDrivenLink}</Link> {t.springBootPage.eventDrivenP2}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.springBootPage.postgresTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
              {t.springBootPage.postgresP1}
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {t.springBootPage.postgresP2}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Button asChild>
            <Link href={localePath(locale as Locale, '/projects')}>{t.springBootPage.viewProjects}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={localePath(locale as Locale, '/nextjs-for-scalable-products')}>{t.springBootPage.nextjsLink}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={localePath(locale as Locale, '/contact')}>{t.springBootPage.getInTouch}</Link>
          </Button>
        </div>
      </article>
    </>
  )
}

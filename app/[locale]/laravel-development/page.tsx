import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { faqNode, graph, webPageNodes } from '@/lib/seo-schema'
import { Button } from '@/components/ui/button'
import { localePath } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'
import { Faq } from '@/components/sections/Faq'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/laravel-development`
  return buildMetadata({
    /* The one page on the site whose title states the role rather than the
       topic. Everything here is Laravel work actually shipped, so the claim
       is the page's subject rather than a keyword bolted onto it. */
    title: `${t.laravelPage.metaTitle} | Yassine Remmani`,
    description: t.laravelPage.subtitle,
    pathname,
    locale: locale as Locale,
  })
}

export default async function LaravelDevelopmentPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/laravel-development`
  const homePath = `/${locale}`

  const breadcrumbs = [
    { name: t.nav.home, url: canonicalUrl(homePath) },
    { name: t.laravelPage.breadcrumbTitle, url: canonicalUrl(pathname) },
  ]

  /* Rendered from this array and marked up from this array, so the schema can
     never describe an answer the page does not show. */
  const faq = t.laravelPage.faq

  return (
    <>
      <SeoJsonLd
        data={graph(
          ...webPageNodes({
            name: t.laravelPage.h1,
            description: t.laravelPage.subtitle,
            pathname,
            locale: locale as Locale,
            breadcrumbs,
          }),
          faqNode({ pageUrl: canonicalUrl(pathname), locale: locale as Locale, questions: faq })
        )}
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
            {t.laravelPage.breadcrumbHome}
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t.laravelPage.h1}</h1>
          <p className="text-xl text-[var(--foreground-muted)]">{t.laravelPage.subtitle}</p>
          {/* The definition an answer engine can quote without rewriting. */}
          <p className="mt-6 text-[var(--foreground-muted)] leading-relaxed">{t.laravelPage.definition}</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.laravelPage.layersTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">{t.laravelPage.layersP1}</p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">{t.laravelPage.layersP2}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.laravelPage.tenancyTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">{t.laravelPage.tenancyP1}</p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">{t.laravelPage.tenancyP2}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.laravelPage.realtimeTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">{t.laravelPage.realtimeP1}</p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">{t.laravelPage.realtimeP2}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.laravelPage.qualityTitle}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">{t.laravelPage.qualityP1}</p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {t.laravelPage.qualityP2}{' '}
              <Link
                href={localePath(locale as Locale, '/projects/salonsync')}
                className="text-accent hover:underline"
              >
                {t.laravelPage.qualityLink}
              </Link>{' '}
              {t.laravelPage.qualityP3}
            </p>
          </section>
        </div>

        <Faq title={t.laravelPage.faqTitle} items={faq} />

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Button asChild>
            <Link href={localePath(locale as Locale, '/projects/salonsync')}>{t.laravelPage.salonsyncCaseStudy}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={localePath(locale as Locale, '/spring-boot-architecture')}>{t.laravelPage.springBootLink}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={localePath(locale as Locale, '/contact')}>{t.laravelPage.getInTouch}</Link>
          </Button>
        </div>
      </article>
    </>
  )
}

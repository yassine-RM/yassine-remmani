import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { ResumeDownload } from '@/components/ResumeDownload'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    title: 'Resume — Download PDF',
    description: 'Download Yassine REMMANI\'s 1-page resume as PDF. Full-Stack Engineer, 6+ years — Spring Boot, Next.js, PostgreSQL, Docker.',
    pathname: `/${locale}/resume`,
  })
}

export default async function ResumePage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/resume`
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Resume — Download PDF',
        description: t.resumePage.intro,
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.nav.resume, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.nav.resume, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-4xl">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-sm font-medium text-accent mb-2">{t.resumePage.badge}</p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t.resumePage.h1}
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base mb-8">
            {t.resumePage.intro}
          </p>
          <ResumeDownload locale={locale as Locale} />
        </div>
      </section>
    </>
  )
}

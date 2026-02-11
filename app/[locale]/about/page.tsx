import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import Image from 'next/image'
import { localePath } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const pathname = `/${locale}/about`
  return buildMetadata({
    title: 'About — Backend Engineer | Spring Boot & Next.js',
    description: 'Yassine REMMANI: Senior Backend Engineer, Spring Boot Developer. 6+ years building scalable APIs, event-driven systems, multi-tenant platforms. AWS, Docker, PostgreSQL.',
    pathname,
    keywords: ['Backend Engineer', 'Spring Boot Developer', 'API Developer', 'Full-Stack Developer', 'Yassine REMMANI'],
  })
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/about`
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'About — Yassine REMMANI',
        description: 'Backend Engineer with 6+ years building scalable APIs, event-driven systems, multi-tenant platforms. Spring Boot, Next.js, PostgreSQL, Kafka.',
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.nav.about, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yassine REMMANI',
          jobTitle: 'Senior Backend Engineer',
          url: canonicalUrl(pathname),
          sameAs: [
            'https://www.linkedin.com/in/yassine-remmani/',
            'https://github.com/yassine-RM',
          ],
          email: 'remmanidev@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Casablanca',
            addressCountry: 'Morocco',
          },
          image: `${canonicalUrl('')}/images/me.png`,
        }}
      />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.nav.about, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">{t.aboutPage.h1}</h1>

        <div className="grid md:grid-cols-[180px_1fr] gap-8 mb-12">
          <Image
            src="/images/me.png"
            alt={t.aboutPage.h1}
            width={180}
            height={180}
            className="rounded-xl object-cover w-full"
          />
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-semibold mb-2">{t.aboutPage.h2}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">{t.aboutPage.p1}</p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">{t.aboutPage.p2}</p>
            <p className="text-[var(--foreground-muted)] leading-relaxed">{t.aboutPage.p3}</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-lg font-semibold">{t.aboutPage.whatIDeliver}</h3>
          <ul className="space-y-3 text-[var(--foreground-muted)]">
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>{t.aboutPage.deliver1}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>{t.aboutPage.deliver2}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>{t.aboutPage.deliver3}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>{t.aboutPage.deliver4}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">→</span>
              <span>{t.aboutPage.deliver5}</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-heading text-lg font-semibold mb-3">{t.aboutPage.deepDives}</h3>
          <p className="text-sm text-[var(--foreground-muted)] mb-4">
            {t.aboutPage.deepDivesIntro}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href={localePath(locale as Locale, '/spring-boot-architecture')} className="text-sm text-accent hover:underline">{t.aboutPage.springBootLink}</Link>
            <span className="text-[var(--foreground-muted)]">·</span>
            <Link href={localePath(locale as Locale, '/nextjs-for-scalable-products')} className="text-sm text-accent hover:underline">{t.aboutPage.nextjsLink}</Link>
            <span className="text-[var(--foreground-muted)]">·</span>
            <Link href={localePath(locale as Locale, '/event-driven-systems-kafka')} className="text-sm text-accent hover:underline">{t.aboutPage.kafkaLink}</Link>
          </div>
        </div>
      </section>
    </>
  )
}

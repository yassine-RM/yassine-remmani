import { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, canonicalUrl, socialProfiles } from '@/lib/seo'
import { graph, webPageNodes } from '@/lib/seo-schema'
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
  const t = getTranslations(locale as Locale)
  return buildMetadata({
    title: t.seo.about.title,
    description: t.seo.about.description,
    pathname: `/${locale}/about`,
    locale: locale as Locale,
    type: 'profile',
  })
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params
  const loc = locale as Locale
  const t = getTranslations(loc)
  const pathname = `/${locale}/about`
  const homePath = `/${locale}`

  const profiles = [
    { label: t.contactSection.linkedin, value: t.contactPage.linkedinDesc, href: socialProfiles.linkedin },
    { label: t.contactSection.github, value: t.contactPage.githubDesc, href: socialProfiles.github },
  ]
  const explore = [
    { href: localePath(loc, '/projects'), label: t.aboutPage.projectsLink },
    { href: localePath(loc, '/resume'), label: t.aboutPage.resumeLink },
    { href: localePath(loc, '/blog'), label: t.aboutPage.blogLink },
    { href: localePath(loc, '/contact'), label: t.nav.contact },
  ]

  return (
    <>
      <SeoJsonLd
        data={graph(
          ...webPageNodes({
            type: 'AboutPage',
            name: t.seo.about.title,
            description: t.seo.about.description,
            pathname,
            locale: loc,
            breadcrumbs: [
              { name: t.nav.home, url: canonicalUrl(homePath) },
              { name: t.nav.about, url: canonicalUrl(pathname) },
            ],
          })
        )}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">{t.aboutPage.h1}</h1>

        <div className="grid md:grid-cols-[180px_1fr] gap-8 mb-12">
          <Image
            src="/images/me.png"
            alt={t.aboutPage.imageAlt}
            width={180}
            height={145}
            priority
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
          <h2 className="font-heading text-lg font-semibold">{t.aboutPage.whatIDeliver}</h2>
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
          <h2 className="font-heading text-lg font-semibold mb-3">{t.aboutPage.experienceTitle}</h2>
          <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">{t.aboutPage.experienceP}</p>
          <Link href={localePath(loc, '/experience')} className="text-sm text-accent hover:underline">
            {t.aboutPage.experienceLink} →
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-heading text-lg font-semibold mb-4">{t.aboutPage.educationTitle}</h2>
          <ul className="space-y-3">
            {t.data.education.map((edu) => (
              <li key={edu.degree} className="text-sm">
                <p className="font-medium text-foreground leading-snug">{edu.degree}</p>
                <p className="text-[var(--foreground-muted)]">{edu.institution}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-heading text-lg font-semibold mb-3">{t.aboutPage.deepDives}</h2>
          <p className="text-sm text-[var(--foreground-muted)] mb-4">
            {t.aboutPage.deepDivesIntro}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href={localePath(loc, '/spring-boot-architecture')} className="text-sm text-accent hover:underline">{t.aboutPage.springBootLink}</Link>
            <span className="text-[var(--foreground-muted)]">·</span>
            <Link href={localePath(loc, '/nextjs-for-scalable-products')} className="text-sm text-accent hover:underline">{t.aboutPage.nextjsLink}</Link>
            <span className="text-[var(--foreground-muted)]">·</span>
            <Link href={localePath(loc, '/event-driven-systems-kafka')} className="text-sm text-accent hover:underline">{t.aboutPage.kafkaLink}</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-heading text-lg font-semibold mb-3">{t.aboutPage.profilesTitle}</h2>
            <ul className="space-y-2">
              {profiles.map((p) => (
                <li key={p.href} className="text-sm">
                  <a href={p.href} target="_blank" rel="me noopener noreferrer" className="text-[var(--foreground-muted)] hover:text-accent transition-colors">
                    <span className="font-medium text-foreground">{p.label}:</span> {p.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label={t.aboutPage.exploreTitle}>
            <h2 className="font-heading text-lg font-semibold mb-3">{t.aboutPage.exploreTitle}</h2>
            <ul className="space-y-2">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-accent hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

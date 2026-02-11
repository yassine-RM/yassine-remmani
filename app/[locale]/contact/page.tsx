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
    title: 'Contact',
    description: 'Open to senior full-stack, backend, or platform engineering roles. Email, LinkedIn, GitHub.',
    pathname: `/${locale}/contact`,
  })
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/contact`
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Contact — Yassine REMMANI',
        description: t.contactPage.intro,
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.nav.contact, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.nav.contact, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-2xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t.contactPage.h1}</h1>
        <p className="text-[var(--foreground-muted)] mb-12">
          {t.contactPage.intro}
        </p>
        <div className="space-y-4">
          <a
            href="mailto:remmanidev@gmail.com"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-border-hover hover:text-accent transition-colors"
          >
            <div>
              <p className="font-medium">{t.contactSection.email}</p>
              <p className="text-sm text-[var(--foreground-muted)]">{t.contactPage.emailDesc}</p>
            </div>
            <span className="text-sm text-[var(--foreground-muted)]">{t.contactPage.emailAction}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yassine-remmani/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-border-hover hover:text-accent transition-colors"
          >
            <div>
              <p className="font-medium">{t.contactSection.linkedin}</p>
              <p className="text-sm text-[var(--foreground-muted)]">{t.contactPage.linkedinDesc}</p>
            </div>
            <span className="text-sm text-[var(--foreground-muted)]">{t.contactPage.openExternal}</span>
          </a>
          <a
            href="https://github.com/yassine-RM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-border-hover hover:text-accent transition-colors"
          >
            <div>
              <p className="font-medium">{t.contactSection.github}</p>
              <p className="text-sm text-[var(--foreground-muted)]">{t.contactPage.githubDesc}</p>
            </div>
            <span className="text-sm text-[var(--foreground-muted)]">{t.contactPage.openExternal}</span>
          </a>
        </div>
      </section>
    </>
  )
}

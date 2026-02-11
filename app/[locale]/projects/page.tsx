import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { projects } from '@/lib/constants'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema, projectsItemListSchema } from '@/lib/seo-schema'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    title: 'Projects',
    description: 'Production-grade platforms: TravelOS (travel discovery), Automotive Digital Platform, Multi-Tenant Classified Ads. Spring Boot, Next.js, PostgreSQL, Docker.',
    pathname: `/${locale}/projects`,
  })
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const pathname = `/${locale}/projects`
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Projects — Yassine REMMANI',
        description: t.projectsPage.intro,
        pathname,
        breadcrumbs: [{ name: t.nav.home, url: canonicalUrl(homePath) }, { name: t.nav.projects, url: canonicalUrl(pathname) }],
      })} />
      <SeoJsonLd data={projectsItemListSchema(projects, `/${locale}`)} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: canonicalUrl(homePath) },
            { '@type': 'ListItem', position: 2, name: t.nav.projects, item: canonicalUrl(pathname) },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t.projectsPage.h1}</h1>
        <p className="text-[var(--foreground-muted)] mb-12 max-w-2xl">
          {t.projectsPage.intro}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale as Locale} />
          ))}
        </div>
      </section>
    </>
  )
}

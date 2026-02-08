import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { projects } from '@/lib/constants'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { webPageSchema, projectsItemListSchema } from '@/lib/seo-schema'
import { ProjectCard } from '@/components/cards/ProjectCard'

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description: 'Production-grade platforms: TravelOS (travel discovery), Automotive Digital Platform, Multi-Tenant Classified Ads. Spring Boot, Next.js, PostgreSQL, Docker.',
  pathname: '/projects',
})

export default function ProjectsPage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Projects — Yassine REMMANI',
        description: 'Production-grade platforms: TravelOS, Automotive Digital Platform, Multi-Tenant Classified Ads. Spring Boot, Next.js, PostgreSQL, Docker.',
        pathname: '/projects',
        breadcrumbs: [{ name: 'Home', url: canonicalUrl('/') }, { name: 'Projects', url: canonicalUrl('/projects') }],
      })} />
      <SeoJsonLd data={projectsItemListSchema(projects)} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Projects', item: canonicalUrl('/projects') },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Projects</h1>
        <p className="text-[var(--foreground-muted)] mb-12 max-w-2xl">
          Scalable, production-grade platforms. Travel discovery, automotive tech, multi-tenant systems. Spring Boot, Next.js, PostgreSQL, Redis.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { projects } from '@/lib/constants'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { softwareApplicationSchema, caseStudySchema, webPageSchema } from '@/lib/seo-schema'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {}
  }

  return buildMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    pathname: `/projects/${slug}`,
    image: project.coverImage,
    type: 'article',
  })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const projectUrl = canonicalUrl(`/projects/${slug}`)
  const projectImage = `${canonicalUrl('')}${project.coverImage}`

  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: `${project.title} — Case Study`,
        description: project.summary,
        pathname: `/projects/${slug}`,
        breadcrumbs: [
          { name: 'Home', url: canonicalUrl('/') },
          { name: 'Projects', url: canonicalUrl('/projects') },
          { name: project.title, url: projectUrl },
        ],
      })} />
      <SeoJsonLd data={caseStudySchema({
        name: project.title,
        description: project.summary,
        url: projectUrl,
        image: projectImage,
        keywords: project.tags,
      })} />
      {slug === 'travelos' && (
        <SeoJsonLd data={softwareApplicationSchema({
          name: 'TravelOS',
          description: project.description,
          url: projectUrl,
          image: projectImage,
          applicationCategory: 'TravelApplication',
        })} />
      )}
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Projects', item: canonicalUrl('/projects') },
            { '@type': 'ListItem', position: 3, name: project.title, item: canonicalUrl(`/projects/${slug}`) },
          ],
        }}
      />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-accent mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            {project.title}
          </h1>
          {project.role && (
            <p className="text-sm font-medium text-accent mb-4">{project.role}</p>
          )}
          <p className="text-xl text-[var(--foreground-muted)] mb-6">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-accent-muted text-accent rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" asChild>
              <Link href="#architecture">Architecture</Link>
            </Button>
            {project.demo && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              </Button>
            )}
          </div>
        </header>

        <div className="mb-12">
          <Image
            src={project.coverImage}
            alt={`${project.title} — Case study cover`}
            width={1200}
            height={600}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full h-auto rounded-xl border border-border"
            priority
          />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Problem</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">Solution</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {project.solution}
            </p>
          </section>

          <section id="architecture">
            <h2 className="font-heading text-xl font-semibold mb-4">Architecture</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {project.architecture}
            </p>
          </section>

          {slug === 'travelos' && (
            <section>
              <h2 className="font-heading text-xl font-semibold mb-4">Architecture Decisions: Why Spring Boot, Docker & PostgreSQL</h2>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                <strong className="text-foreground">Spring Boot</strong>: Mature ecosystem, clean architecture, security (JWT/OAuth2), DDD-friendly. <strong className="text-foreground">PostgreSQL</strong>: Relational integrity for content, migrations, indexing for search. <strong className="text-foreground">Docker</strong>: Reproducible dev/prod, CI/CD. Keycloak-compatible auth layer for future SSO.
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                SEO-first: SSR for all destination pages, dynamic metadata, OpenGraph, Schema.org. Redis for sub-second page loads. See <Link href="/nextjs-for-scalable-products" className="text-accent hover:underline">Next.js for scalable products</Link> for frontend patterns.
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Built as a platform, not a blog. Production-grade deployment with zero-downtime CI/CD.
              </p>
            </section>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border space-y-6">
          <div>
            <p className="text-sm font-medium text-[var(--foreground-muted)] mb-2">Related architecture</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/spring-boot-architecture" className="text-sm text-accent hover:underline">Spring Boot</Link>
              <Link href="/nextjs-for-scalable-products" className="text-sm text-accent hover:underline">Next.js</Link>
              <Link href="/event-driven-systems-kafka" className="text-sm text-accent hover:underline">Event-driven Kafka</Link>
            </div>
          </div>
          <Button asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </article>
    </>
  )
}

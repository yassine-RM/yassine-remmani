import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { projects } from '@/lib/constants'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import Image from 'next/image'
import Link from 'next/link'

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

  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Project',
          name: project.title,
          description: project.summary,
          url: canonicalUrl(`/projects/${slug}`),
          image: `${canonicalUrl('')}${project.coverImage}`,
          creator: {
            '@type': 'Person',
            name: 'Yassine Remmani',
          },
          keywords: project.tags.join(', '),
        }}
      />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: canonicalUrl('/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Projects',
              item: canonicalUrl('/projects'),
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: project.title,
              item: canonicalUrl(`/projects/${slug}`),
            },
          ],
        }}
      />
      <article className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-teal mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Case Study
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-6">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-md text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-teal-light)] border border-[var(--border-accent)] rounded-md text-sm font-semibold text-teal w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            {project.metric.value}
          </div>
        </header>

        <div className="mb-12">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl shadow-card"
            priority
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Context</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.description || 'Full case study content coming soon. This project demonstrates expertise in building scalable, production-ready systems.'}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Approach</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Detailed technical approach and architecture decisions will be documented here.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Results</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Key metrics and business impact will be highlighted here.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-black rounded-md font-bold hover:bg-teal-hover transition-all shadow-accent"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </article>
    </>
  )
}


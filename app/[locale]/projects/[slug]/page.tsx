import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { projects } from '@/lib/constants'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { graph, webPageNodes, caseStudyNode } from '@/lib/seo-schema'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { localePath } from '@/lib/i18n'
import { getTranslations, replaceParams } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'fr']
  return projects.flatMap((project) =>
    locales.map((locale) => ({ locale, slug: project.slug }))
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const t = getTranslations(locale as Locale)
  const project = projects.find((p) => p.slug === slug)
  const translated = t.data.projects.find((p) => p.slug === slug)

  if (!project) {
    return {}
  }

  const title = translated?.title ?? project.title
  const summary = translated?.summary ?? project.summary

  return buildMetadata({
    title: `${title} — ${t.seo.caseStudySuffix}`,
    description: summary,
    pathname: `/${locale}/projects/${slug}`,
    locale: locale as Locale,
    image: project.coverImage,
    imageAlt: replaceParams(t.caseStudy.coverAlt, { title }),
  })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { locale, slug } = await params
  const t = getTranslations(locale as Locale)
  const project = projects.find((p) => p.slug === slug)
  const translated = t.data.projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const title = translated?.title ?? project.title
  const summary = translated?.summary ?? project.summary
  const role = translated?.role ?? project.role
  const problem = translated?.problem ?? project.problem
  const solution = translated?.solution ?? project.solution
  const architecture = translated?.architecture ?? project.architecture

  const pathname = `/${locale}/projects/${slug}`
  const projectUrl = canonicalUrl(pathname)
  const homePath = `/${locale}`
  const projectsPath = `/${locale}/projects`

  return (
    <>
      <SeoJsonLd
        data={graph(
          ...webPageNodes({
            name: `${title} — ${t.seo.caseStudySuffix}`,
            description: summary,
            pathname,
            locale: locale as Locale,
            image: project.coverImage,
            breadcrumbs: [
              { name: t.nav.home, url: canonicalUrl(homePath) },
              { name: t.nav.projects, url: canonicalUrl(projectsPath) },
              { name: title, url: projectUrl },
            ],
          }),
          caseStudyNode({
            name: title,
            description: translated?.description ?? project.description,
            url: projectUrl,
            image: project.coverImage,
            keywords: project.tags,
            locale: locale as Locale,
          })
        )}
      />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <Link
          href={projectsPath}
          className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-accent mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.caseStudy.backToProjects}
        </Link>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            {title}
          </h1>
          {role && (
            <p className="text-sm font-medium text-accent mb-4">{role}</p>
          )}
          <p className="text-xl text-[var(--foreground-muted)] mb-6">
            {summary}
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
              <Link href="#architecture">{t.caseStudy.architecture}</Link>
            </Button>
            {project.demo && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  {t.caseStudy.live}
                </a>
              </Button>
            )}
          </div>
        </header>

        <div className="mb-12">
          <Image
            src={project.coverImage}
            alt={replaceParams(t.caseStudy.coverAlt, { title })}
            width={1200}
            height={600}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full h-auto rounded-xl border border-border"
            priority
          />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.caseStudy.problem}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {problem}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-4">{t.caseStudy.solution}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {solution}
            </p>
          </section>

          <section id="architecture">
            <h2 className="font-heading text-xl font-semibold mb-4">{t.caseStudy.architectureSection}</h2>
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {architecture}
            </p>
          </section>

          {slug === 'travelos' && (
            <section>
              <h2 className="font-heading text-xl font-semibold mb-4">{t.caseStudy.travelosDecisionsTitle}</h2>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                {t.caseStudy.travelosP1}
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                {t.caseStudy.travelosP2}
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                {t.caseStudy.travelosP3}
              </p>
            </section>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border space-y-6">
          <div>
            <p className="text-sm font-medium text-[var(--foreground-muted)] mb-2">{t.caseStudy.relatedArchitecture}</p>
            <div className="flex flex-wrap gap-2">
              <Link href={localePath(locale as Locale, '/spring-boot-architecture')} className="text-sm text-accent hover:underline">{t.footer.springBoot}</Link>
              <Link href={localePath(locale as Locale, '/nextjs-for-scalable-products')} className="text-sm text-accent hover:underline">{t.footer.nextjs}</Link>
              <Link href={localePath(locale as Locale, '/event-driven-systems-kafka')} className="text-sm text-accent hover:underline">{t.footer.eventDrivenKafka}</Link>
            </div>
          </div>
          <nav aria-label={t.caseStudy.moreAbout}>
            <p className="text-sm font-medium text-[var(--foreground-muted)] mb-2">{t.caseStudy.moreAbout}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href={projectsPath} className="text-sm text-accent hover:underline">{t.caseStudy.allProjects}</Link>
              <Link href={localePath(locale as Locale, '/about')} className="text-sm text-accent hover:underline">{t.caseStudy.aboutLink}</Link>
              <Link href={localePath(locale as Locale, '/experience')} className="text-sm text-accent hover:underline">{t.caseStudy.experienceLink}</Link>
              <Link href={localePath(locale as Locale, '/resume')} className="text-sm text-accent hover:underline">{t.caseStudy.resumeLink}</Link>
            </div>
          </nav>
          <Button asChild>
            <Link href={localePath(locale as Locale, '/contact')}>{t.caseStudy.getInTouch}</Link>
          </Button>
        </div>
      </article>
    </>
  )
}

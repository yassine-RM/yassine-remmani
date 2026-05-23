import { Metadata } from 'next'
import Link from 'next/link'
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
  const isFr = locale === 'fr'
  return buildMetadata({
    title: isFr
      ? 'CV — Yassine Remmani | Développeur Full Stack Senior'
      : 'Resume — Yassine Remmani | Senior Full-Stack Developer',
    description: isFr
      ? 'CV de Yassine Remmani, Développeur Full Stack Senior basé à Casablanca, spécialisé en Java, Spring Boot, React, Next.js, Docker, CI/CD, PostgreSQL et plateformes web scalables.'
      : 'Resume of Yassine Remmani, Senior Full-Stack Developer based in Casablanca, specializing in Java, Spring Boot, React, Next.js, Docker, CI/CD, PostgreSQL, and scalable web platforms.',
    pathname: `/${locale}/resume`,
  })
}

export default async function ResumePage({ params }: PageProps) {
  const { locale } = await params
  const loc = locale as Locale
  const t = getTranslations(loc)
  const r = t.resumePage
  const cv = t.cv
  const pathname = `/${locale}/resume`
  const homePath = `/${locale}`

  const contactLinks = [
    { label: r.email, value: cv.contact.email, href: `mailto:${cv.contact.email}` },
    { label: r.linkedin, value: cv.contact.linkedin, href: `https://${cv.contact.linkedin}` },
    { label: r.github, value: cv.contact.github, href: `https://${cv.contact.github}` },
    { label: r.portfolio, value: cv.contact.portfolio, href: `https://${cv.contact.portfolio}` },
  ]

  const skillGroups = [
    { title: r.skills.backend, items: cv.skills.backend },
    { title: r.skills.frontend, items: cv.skills.frontend },
    { title: r.skills.databases, items: cv.skills.database },
    { title: r.skills.cloudDevops, items: cv.skills.cloudDevops },
    { title: r.skills.security, items: cv.skills.security },
    { title: r.skills.architecture, items: cv.skills.architecture },
    { title: r.skills.quality, items: r.skills.qualityItems },
  ]

  const snapshotCards = [
    { label: r.snapshot.experienceLabel, desc: r.snapshot.experienceDesc },
    { label: r.snapshot.backendLabel, desc: r.snapshot.backendDesc },
    { label: r.snapshot.frontendLabel, desc: r.snapshot.frontendDesc },
    { label: r.snapshot.devopsLabel, desc: r.snapshot.devopsDesc },
  ]

  const languages = [r.languages.arabic, r.languages.french, r.languages.english]

  return (
    <>
      <SeoJsonLd
        data={webPageSchema({
          name: r.h1,
          description: r.intro,
          pathname,
          breadcrumbs: [
            { name: t.nav.home, url: canonicalUrl(homePath) },
            { name: t.nav.resume, url: canonicalUrl(pathname) },
          ],
        })}
      />
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Hero */}
        <section className="pt-12 md:pt-16 pb-10 md:pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">
            {r.badge}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            {r.h1}
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-3xl mb-6">
            {r.intro}
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-[var(--foreground-subtle)] mb-8">
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {r.location}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <ResumeDownload locale={loc} />
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:border-border-hover hover:bg-[var(--card-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {r.contactCta}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl text-foreground font-semibold text-sm hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {r.projectsCta}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-[var(--foreground-muted)] hover:text-accent transition-colors"
                >
                  <span className="font-medium text-foreground">{link.label}:</span>{' '}
                  <span className="underline-offset-4 hover:underline">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Recruiter snapshot */}
        <section aria-labelledby="snapshot-title" className="py-8 md:py-10 border-t border-border">
          <h2 id="snapshot-title" className="font-heading text-xl md:text-2xl font-semibold mb-6">
            {r.snapshot.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {snapshotCards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-border bg-card p-5 hover:border-border-hover transition-colors"
              >
                <p className="font-heading text-base md:text-lg font-semibold mb-1.5">
                  {card.label}
                </p>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core skills */}
        <section aria-labelledby="skills-title" className="py-8 md:py-10 border-t border-border">
          <h2 id="skills-title" className="font-heading text-xl md:text-2xl font-semibold mb-6">
            {r.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground mb-2.5">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-border text-xs text-[var(--foreground-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience-title" className="py-8 md:py-10 border-t border-border">
          <h2 id="experience-title" className="font-heading text-xl md:text-2xl font-semibold mb-6">
            {r.experience.title}
          </h2>
          {cv.experience.map((job) => (
            <article key={`${job.company}-${job.jobTitle}`} className="rounded-xl border border-border bg-card p-6 md:p-7">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold">
                    {job.jobTitle}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">{job.company}</p>
                </div>
                <p className="text-xs sm:text-sm text-[var(--foreground-subtle)] font-medium">
                  {job.dates}
                </p>
              </div>
              <ul className="space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[var(--foreground-muted)]">
                    <span
                      aria-hidden
                      className="mt-2 w-1 h-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Projects */}
        <section aria-labelledby="projects-title" className="py-8 md:py-10 border-t border-border">
          <h2 id="projects-title" className="font-heading text-xl md:text-2xl font-semibold mb-6">
            {r.projects.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {cv.projects.map((project, idx) => (
              <article
                key={project.name}
                className="flex flex-col rounded-xl border border-border bg-card p-5 hover:border-border-hover transition-colors"
              >
                <h3 className="font-heading text-base font-semibold mb-2 leading-snug">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4 grow">
                  {project.description}
                </p>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <p className="font-semibold text-foreground mb-1">{r.projects.techLabel}</p>
                    <p className="text-[var(--foreground-muted)]">{project.stack}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{r.projects.impactLabel}</p>
                    <p className="text-[var(--foreground-muted)]">{r.projects.projectImpacts[idx]}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What I bring */}
        <section aria-labelledby="bring-title" className="py-8 md:py-10 border-t border-border">
          <h2 id="bring-title" className="font-heading text-xl md:text-2xl font-semibold mb-6">
            {r.whatIBring.title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {r.whatIBring.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <svg
                  className="w-5 h-5 shrink-0 text-accent mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Best fit roles */}
        <section aria-labelledby="bestfit-title" className="py-8 md:py-10 border-t border-border">
          <h2 id="bestfit-title" className="font-heading text-xl md:text-2xl font-semibold mb-2">
            {r.bestFit.title}
          </h2>
          <p className="text-sm text-[var(--foreground-muted)] mb-5">{r.bestFit.subtitle}</p>
          <ul className="flex flex-wrap gap-2">
            {r.bestFit.roles.map((role) => (
              <li
                key={role}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-[var(--bg-surface)] text-sm text-foreground"
              >
                {role}
              </li>
            ))}
          </ul>
        </section>

        {/* Education + Languages */}
        <section className="py-8 md:py-10 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div aria-labelledby="education-title">
              <h2 id="education-title" className="font-heading text-xl md:text-2xl font-semibold mb-5">
                {r.education.title}
              </h2>
              <ul className="space-y-3">
                {cv.education.map((edu) => (
                  <li key={edu.degree} className="text-sm">
                    <p className="font-medium text-foreground leading-snug">{edu.degree}</p>
                    <p className="text-[var(--foreground-muted)]">{edu.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div aria-labelledby="languages-title">
              <h2 id="languages-title" className="font-heading text-xl md:text-2xl font-semibold mb-5">
                {r.languages.title}
              </h2>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="text-sm text-[var(--foreground-muted)]"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="my-10 md:my-14">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center">
            <h2 className="font-heading text-xl md:text-2xl font-semibold mb-2">
              {r.finalCta.title}
            </h2>
            <p className="text-sm md:text-base text-[var(--foreground-muted)] mb-6 max-w-xl mx-auto">
              {r.finalCta.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ResumeDownload locale={loc} />
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl border border-border bg-[var(--bg-surface)] text-foreground font-semibold text-sm hover:border-border-hover hover:bg-[var(--card-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {r.contactCta}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

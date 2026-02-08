import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { experience, education } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Experience & Education',
  description: 'Senior Full-Stack Developer. 6+ years building high-traffic APIs, event-driven systems, multi-tenant platforms. Master\'s in Computer Science & AI.',
  pathname: '/experience',
})

export default function ExperiencePage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Experience & Education — Yassine REMMANI',
        description: 'Senior Full-Stack Developer. 6+ years building high-traffic APIs, event-driven systems, multi-tenant platforms. Master\'s in Computer Science & AI.',
        pathname: '/experience',
        breadcrumbs: [{ name: 'Home', url: canonicalUrl('/') }, { name: 'Experience', url: canonicalUrl('/experience') }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Experience', item: canonicalUrl('/experience') },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">Experience</h1>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden />
          <ul className="space-y-12">
            {experience.map((job) => (
              <li key={job.company + job.role} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-[3px]" />
                <div className="mb-4">
                  <h2 className="font-heading text-lg font-semibold">{job.role}</h2>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    {job.company}
                    {job.location && ` · ${job.location}`}
                  </p>
                  {job.context && (
                    <p className="text-xs text-[var(--foreground-subtle)] mt-1 italic">
                      {job.context}
                    </p>
                  )}
                  <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-2 text-[var(--foreground-muted)]">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-bold mt-16 mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.institution + item.degree}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-heading font-semibold">{item.degree}</h3>
              <p className="text-[var(--foreground-muted)] text-sm mt-1">{item.institution}</p>
              {item.focus && (
                <p className="text-sm text-[var(--foreground-subtle)] mt-2">{item.focus}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

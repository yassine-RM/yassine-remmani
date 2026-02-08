import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { skills } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Skills',
  description: 'Backend: Spring Boot, Java, PostgreSQL. Frontend: Next.js, React, TypeScript. DevOps: Docker, CI/CD. Architecture: Clean Architecture, DDD, REST.',
  pathname: '/skills',
})

const categories = [
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'devops', label: 'DevOps' },
  { key: 'architecture', label: 'Architecture' },
] as const

export default function SkillsPage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Skills', item: canonicalUrl('/skills') },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-12">Skills</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map(({ key, label }) => (
            <div
              key={key}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-sm font-semibold text-accent mb-4">
                {label}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {(skills as Record<string, string[]>)[key].map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-sm text-[var(--foreground-muted)] bg-background rounded-lg border border-border"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

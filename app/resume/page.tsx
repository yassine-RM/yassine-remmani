import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { ResumeDownload } from '@/components/ResumeDownload'

export const metadata: Metadata = buildMetadata({
  title: 'Resume — Download PDF',
  description: 'Download Yassine REMMANI\'s 1-page resume as PDF. Full-Stack Engineer, 6+ years — Spring Boot, Next.js, PostgreSQL, Docker.',
  pathname: '/resume',
})

export default function ResumePage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Resume — Download PDF',
        description: 'Download Yassine REMMANI\'s 1-page resume as PDF. Full-Stack Engineer, 6+ years.',
        pathname: '/resume',
        breadcrumbs: [{ name: 'Home', url: canonicalUrl('/') }, { name: 'Resume', url: canonicalUrl('/resume') }],
      })} />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Resume', item: canonicalUrl('/resume') },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-4xl">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-sm font-medium text-accent mb-2">Resume</p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Download My Resume
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base mb-8">
            One-page CV, recruiter and ATS friendly. Direct PDF download — no print dialog.
          </p>
          <div className="flex justify-center">
            <ResumeDownload />
          </div>
        </div>
      </section>
    </>
  )
}

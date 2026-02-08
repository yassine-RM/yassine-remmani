import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { webPageSchema } from '@/lib/seo-schema'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Resume — Download PDF',
  description: 'Download Yassine REMMANI\'s 1-page resume as PDF. Full-Stack Engineer with 6+ years experience in Spring Boot, Next.js, PostgreSQL, Docker.',
  pathname: '/resume',
})

export default function ResumePage() {
  return (
    <>
      <SeoJsonLd data={webPageSchema({
        name: 'Resume — Download PDF',
        description: 'Download Yassine REMMANI\'s 1-page resume as PDF. Full-Stack Engineer with 6+ years experience.',
        pathname: '/resume',
        breadcrumbs: [{ name: 'Home', url: canonicalUrl('/') }, { name: 'Resume', url: canonicalUrl('/resume') }],
      })} />
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
              name: 'Resume',
              item: canonicalUrl('/resume'),
            },
          ],
        }}
      />
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Download My <span className="text-teal">Resume</span>
          </h1>
          <p className="text-[var(--text-secondary)] mb-8">
            Click the button below to download as PDF or use your browser&apos;s print function.
          </p>
          <Link
            href="/documents/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-black rounded-md font-bold hover:bg-teal-hover transition-all shadow-accent hover:shadow-lg hover:-translate-y-0.5 min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </Link>
        </div>

        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-8 md:p-12 shadow-card">
          <header className="text-center mb-8 pb-6 border-b-2 border-[var(--border-color)]">
            <h2 className="font-heading text-3xl font-bold mb-2">Yassine REMMANI</h2>
            <p className="text-[var(--text-secondary)] mb-4">Full-Stack Engineer | Spring Boot • Next.js • PostgreSQL • Docker</p>
            <div className="flex flex-wrap gap-3 justify-center text-sm text-[var(--text-secondary)]">
              <span>📧 remmanidev@gmail.com</span>
              <span>📱 +212 6 20 96 36 60</span>
              <span>🔗 linkedin.com/in/yassine-remmani</span>
              <span>💻 github.com/yassine-RM</span>
              <span>📍 Casablanca, Morocco</span>
            </div>
          </header>

          <section className="mb-8">
            <h3 className="font-heading text-xl font-bold mb-3 pb-2 border-b border-[var(--border-color)]">Summary</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Full-Stack Engineer with 6+ years building production platforms serving 4,000+ dealer sites. 
              Expert in Spring Boot, Next.js, PostgreSQL, Docker, and multi-tenant architectures. 
              Delivered 0→1 platform, reduced TTFB by 40%, and integrated real-time inventory sync across multiple systems.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-heading text-xl font-bold mb-3 pb-2 border-b border-[var(--border-color)]">Experience</h3>
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <div className="font-bold">Senior Full-Stack Developer</div>
                  <div className="text-sm text-[var(--text-secondary)]">Auto Dealers Digital</div>
                </div>
                <div className="text-sm text-[var(--text-secondary)] font-semibold">Dec 2019 → Present</div>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-[var(--text-secondary)] leading-relaxed">
                <li>Designed and developed a multi-tenant dealer platform serving 4,000+ clients with website builder, CRM dashboard, and real-time inventory synchronization</li>
                <li>Built inventory APIs with Spring Boot & PostgreSQL integrating vehicles, media, and leads from multiple partner systems</li>
                <li>Engineered Next.js 15 front-ends with SSR, dynamic routes, i18n, and SEO optimization, achieving 40% reduction in Time to First Byte</li>
                <li>Developed CRM dashboard for managing leads, appointments, and dealer activities with live analytics and permissions</li>
                <li>Implemented Keycloak-based authentication with fine-grained RBAC across backend and front-end services</li>
                <li>Enhanced SEO & performance through caching, structured data, and GA4/Search Console integrations</li>
                <li>Introduced AI-powered features (content generation, SEO audits, lead enrichment) leveraging OpenAI and Typesense APIs</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-heading text-xl font-bold mb-3 pb-2 border-b border-[var(--border-color)]">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Next.js', 'React', 'PostgreSQL', 'MySQL', 'Docker', 'Redis', 'Typesense', 'Keycloak', 'CI/CD', 'SEO', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-md text-[var(--text-secondary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-heading text-xl font-bold mb-3 pb-2 border-b border-[var(--border-color)]">Certifications</h3>
            <div className="space-y-3">
              {[
                { name: 'Node.js Certification', issuer: 'Bright Coding' },
                { name: 'Git Certification', issuer: 'Bright Coding' },
                { name: 'React Certification', issuer: 'Bright Coding' },
              ].map((cert) => (
                <div key={cert.name}>
                  <div className="font-bold">{cert.name}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}


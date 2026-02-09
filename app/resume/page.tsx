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

const formations = [
  { degree: "Master's in Computer Science and Artificial Intelligence for Big Data", institution: 'Ibn Tofail University' },
  { degree: 'Professional license / Software engineering', institution: 'EST Safi' },
  { degree: 'Technical University degree / Software engineering', institution: 'EST Meknes' },
  { degree: 'Baccalaureate / SVT', institution: 'EL QODS CHEMMAIA HIGH SCHOOL' },
]

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
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent mb-2">Resume</p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Download My Resume
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base mb-6 max-w-md mx-auto">
            Use the button below to print or save as PDF from your browser.
          </p>
          <ResumeDownload />
        </div>

        <div
          id="resume-print"
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-card)] print:bg-white print:shadow-none print:border-0 print:rounded-none print:p-0"
        >
          {/* Header — recruiter sees name + role + contact first */}
          <header className="text-center mb-8 pb-6 border-b-2 border-border print:border-gray-300">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-1 print:text-gray-900">Yassine REMMANI</h2>
            <p className="text-[var(--foreground-muted)] font-medium text-sm sm:text-base mb-4 print:text-gray-700">
              Full-Stack Engineer · Spring Boot · Next.js · PostgreSQL · Docker
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-xs sm:text-sm text-[var(--foreground-muted)] print:text-gray-600">
              <span>remmanidev@gmail.com</span>
              <span>+212 6 20 96 36 60</span>
              <span>Casablanca, Morocco</span>
              <span>linkedin.com/in/yassine-remmani</span>
              <span>github.com/yassine-RM</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="font-heading text-lg font-bold mb-2 pb-1.5 border-b border-border print:text-gray-900 print:border-gray-300">Summary</h3>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed print:text-gray-700">
              Full-Stack Engineer with 6+ years building production platforms serving 4,000+ dealer sites. Expert in Spring Boot, Next.js, PostgreSQL, Docker, and multi-tenant architectures. Delivered 0→1 platform, reduced TTFB by 40%, and integrated real-time inventory sync. Event-driven systems (Kafka), REST APIs, and Keycloak-based auth.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="font-heading text-lg font-bold mb-3 pb-1.5 border-b border-border print:text-gray-900 print:border-gray-300">Experience</h3>
            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
                <span className="font-semibold print:text-gray-900">Senior Full-Stack Developer</span>
                <span className="text-sm text-[var(--foreground-muted)] print:text-gray-600">Dec 2019 → Present</span>
              </div>
              <div className="text-sm text-[var(--foreground-muted)] mb-3 print:text-gray-600">Auto Dealers Digital</div>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-[var(--foreground-muted)] leading-relaxed print:text-gray-700">
                <li>Multi-tenant dealer platform (4,000+ sites): website builder, CRM dashboard, real-time inventory sync</li>
                <li>Spring Boot & PostgreSQL APIs; Next.js 15 front-ends with SSR, i18n, SEO (−40% TTFB)</li>
                <li>Keycloak-based auth and RBAC across backend and front-end</li>
                <li>AI-powered features (content, SEO audits, lead enrichment) with OpenAI and Typesense</li>
              </ul>
            </div>
          </section>

          {/* Education / Formations */}
          <section className="mb-8">
            <h3 className="font-heading text-lg font-bold mb-3 pb-1.5 border-b border-border print:text-gray-900 print:border-gray-300">Education</h3>
            <div className="space-y-3">
              {formations.map((item) => (
                <div key={item.institution}>
                  <div className="font-semibold text-sm print:text-gray-900">{item.degree}</div>
                  <div className="text-xs text-[var(--foreground-muted)] print:text-gray-600">{item.institution}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h3 className="font-heading text-lg font-bold mb-2 pb-1.5 border-b border-border print:text-gray-900 print:border-gray-300">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Next.js', 'React', 'PostgreSQL', 'MySQL', 'Docker', 'Redis', 'Kafka', 'Typesense', 'Keycloak', 'CI/CD', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-accent-muted border border-border rounded-md text-[var(--foreground-muted)] print:bg-transparent print:border-gray-300 print:text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="font-heading text-lg font-bold mb-2 pb-1.5 border-b border-border print:text-gray-900 print:border-gray-300">Certifications</h3>
            <div className="space-y-2">
              {[
                { name: 'Node.js Certification', issuer: 'Bright Coding' },
                { name: 'Git Certification', issuer: 'Bright Coding' },
                { name: 'React Certification', issuer: 'Bright Coding' },
              ].map((cert) => (
                <div key={cert.name}>
                  <span className="font-semibold text-sm print:text-gray-900">{cert.name}</span>
                  <span className="text-xs text-[var(--foreground-muted)] print:text-gray-600"> — {cert.issuer}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

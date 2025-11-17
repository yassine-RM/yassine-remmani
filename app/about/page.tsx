import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'About — My Story',
  description: 'Full-Stack Engineer with 6+ years building production platforms. Expert in Spring Boot, Next.js, PostgreSQL, Docker, and multi-tenant architectures.',
  pathname: '/about',
})

export default function AboutPage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yassine Remmani',
          jobTitle: 'Full-Stack Engineer',
          url: canonicalUrl('/about'),
          sameAs: [
            'https://www.linkedin.com/in/yassine-remmani/',
            'https://github.com/yassine-RM',
          ],
          email: 'remmanidev@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Casablanca',
            addressCountry: 'Morocco',
          },
          image: `${canonicalUrl('')}/assets/images/me.png`,
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
              name: 'About',
              item: canonicalUrl('/about'),
            },
          ],
        }}
      />
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About Me
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-teal">Story</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-12">
          <Image
            src="/assets/images/me.png"
            alt="Yassine Remmani"
            width={200}
            height={200}
            className="rounded-xl object-cover w-full"
          />
          <div>
            <h2 className="font-heading text-xl font-bold mb-4">Full-Stack Engineer</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I'm <strong>Yassine Remmani</strong>, a <strong>Senior Full-Stack Developer</strong> specialized in
              <strong> Spring Boot (Java)</strong>, <strong>Next.js / React</strong>, <strong>Docker</strong>, and
              <strong> PostgreSQL</strong>.
              Since <strong>December 23, 2019</strong> I've been building and maintaining production software for
              <strong className="text-teal"> Auto Dealers Digital</strong>.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I design backend architectures, expose secure REST APIs, build modern dashboards, ship SEO-ready
              sites, and automate deployments with CI/CD and Docker. I deliver platforms that sales can sell and clients
              actually use.
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-6">Experience</h2>
          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-6 shadow-card">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="font-heading text-lg font-bold mb-2">Senior Full-Stack Developer</h3>
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Auto Dealers Digital
                </div>
              </div>
              <div className="text-[var(--text-secondary)] text-sm font-semibold">Dec 2019 → Present</div>
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Designed and developed a <strong>multi-tenant dealer platform</strong> serving 4,000+ clients — including website builder, CRM dashboard, and real-time inventory sync.</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Built <strong>inventory APIs</strong> with Spring Boot & PostgreSQL to integrate vehicles, media, and leads from multiple partner systems.</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Engineered <strong>Next.js 15 front-ends</strong> with SSR, dynamic routes, i18n, and SEO optimization for dealer websites.</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Developed the <strong>CRM dashboard</strong> for managing leads, appointments, and dealer activities with live analytics and permissions.</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Implemented <strong>Keycloak-based authentication</strong> with fine-grained RBAC across backend and front-end services.</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Enhanced <strong>SEO & performance</strong> through caching, structured data, and GA4/Search Console integrations.</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Introduced <strong>AI-powered features</strong> (content generation, SEO audits, lead enrichment) leveraging OpenAI and Typesense APIs.</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Node.js', issuer: 'Bright Coding', link: 'https://brightcoding.dev/certificate/yassine-remmani/A3CB37D3' },
              { name: 'Git', issuer: 'Bright Coding', link: 'https://brightcoding.dev/certificate/yassine-remmani/8fbedfa9' },
              { name: 'React', issuer: 'Bright Coding', link: 'https://brightcoding.dev/certificate/yassine-remmani/A07BA3FF' },
            ].map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-5 shadow-card hover:border-teal hover:bg-[var(--bg-surface-hover)] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="font-bold">{cert.name} Certification</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}


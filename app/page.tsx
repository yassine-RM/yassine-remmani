import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { TechStack } from '@/components/sections/TechStack'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'

export default function HomePage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yassine Remmani',
          jobTitle: 'Full-Stack Engineer',
          url: 'https://remmanidev.com',
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
          knowsAbout: [
            'Spring Boot',
            'Next.js',
            'PostgreSQL',
            'Docker',
            'React',
            'JavaScript',
            'Java',
            'Multi-tenant Architecture',
            'Full-Stack Development',
            'RESTful APIs',
            'Microservices',
            'CI/CD',
          ],
          image: 'https://remmanidev.com/assets/images/me.png',
        }}
      />
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Yassine Remmani — Full-Stack Engineer',
          url: 'https://remmanidev.com',
          description: 'Full-Stack Engineer (Spring Boot • Next.js • PostgreSQL • Docker). I build resilient multi-tenant platforms and high-impact SaaS.',
          publisher: {
            '@type': 'Person',
            name: 'Yassine Remmani',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://remmanidev.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
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
              item: 'https://remmanidev.com/',
            },
          ],
        }}
      />
      <Hero />
      <Projects />
      <Services />
      <TechStack />
      <Testimonials />
      <CTABanner />
    </>
  )
}


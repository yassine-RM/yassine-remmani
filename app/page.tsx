import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Microservices } from '@/components/sections/Microservices'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { CTABanner } from '@/components/sections/CTABanner'
import { Contact } from '@/components/sections/Contact'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { personSchema, webSiteSchema, webPageSchema, softwareApplicationSchema } from '@/lib/seo-schema'
import { canonicalUrl } from '@/lib/seo'

export default function HomePage() {
  return (
    <>
      <SeoJsonLd data={personSchema()} />
      <SeoJsonLd data={webSiteSchema()} />
      <SeoJsonLd data={webPageSchema({
        name: 'Yassine REMMANI — Backend Engineer | Spring Boot & Next.js',
        description: 'Backend Engineer. Scalable APIs, event-driven systems, multi-tenant platforms. Spring Boot, Next.js, PostgreSQL, Docker, Kafka, AWS.',
        pathname: '/',
        breadcrumbs: [{ name: 'Home', url: canonicalUrl('/') }],
      })} />
      <SeoJsonLd data={softwareApplicationSchema({
        name: 'TravelOS',
        description: 'Travel discovery & content platform. SEO-first architecture, high-performance REST APIs. Spring Boot, Next.js, PostgreSQL, Redis.',
        url: canonicalUrl('/projects/travelos'),
        applicationCategory: 'TravelApplication',
      })} />
      <Hero />
      <About />
      <Skills />
      <Microservices />
      <Projects />
      <Experience />
      <CTABanner />
      <Contact />
    </>
  )
}

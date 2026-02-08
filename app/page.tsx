import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
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
        name: 'Yassine REMMANI — Senior Full-Stack Developer | Spring Boot & Next.js',
        description: 'Technical authority on Spring Boot, Next.js, and scalable platform architecture. Senior Full-Stack Developer building production-grade systems.',
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
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

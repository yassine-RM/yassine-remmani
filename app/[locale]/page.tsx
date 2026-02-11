import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { HowIBuild } from '@/components/sections/HowIBuild'
import { Skills } from '@/components/sections/Skills'
import { Microservices } from '@/components/sections/Microservices'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { AI } from '@/components/sections/AI'
import { CTABanner } from '@/components/sections/CTABanner'
import { Contact } from '@/components/sections/Contact'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { personSchema, webSiteSchema, webPageSchema, softwareApplicationSchema } from '@/lib/seo-schema'
import { canonicalUrl } from '@/lib/seo'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const homePath = `/${locale}`

  return (
    <>
      <SeoJsonLd data={personSchema({ pathname: homePath })} />
      <SeoJsonLd data={webSiteSchema({ pathname: homePath })} />
      <SeoJsonLd data={webPageSchema({
        name: 'Yassine REMMANI — Full-Stack Engineer | Spring Boot, Next.js & AI',
        description: 'Full-Stack Engineer specializing in Spring Boot and Next.js, with AI integration. Scalable APIs, event-driven systems, multi-tenant platforms. PostgreSQL, Docker, Kafka, AWS.',
        pathname: homePath,
        breadcrumbs: [{ name: 'Home', url: canonicalUrl(homePath) }],
      })} />
      <SeoJsonLd data={softwareApplicationSchema({
        name: 'TravelOS',
        description: 'Travel discovery & content platform. SEO-first architecture, high-performance REST APIs. Spring Boot, Next.js, PostgreSQL, Redis.',
        url: canonicalUrl(`/${locale}/projects/travelos`),
        applicationCategory: 'TravelApplication',
      })} />
      <Hero />
      <About />
      <HowIBuild />
      <Skills />
      <Microservices />
      <Projects />
      <Experience />
      <AI />
      <CTABanner />
      <Contact />
    </>
  )
}

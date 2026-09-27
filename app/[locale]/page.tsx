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
import { Metadata } from 'next'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { graph, webPageNodes } from '@/lib/seo-schema'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  return buildMetadata({
    title: t.seo.home.title,
    description: t.seo.home.description,
    pathname: `/${locale}`,
    locale: locale as Locale,
    type: 'profile',
  })
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)

  return (
    <>
      <SeoJsonLd
        data={graph(
          ...webPageNodes({
            type: 'ProfilePage',
            name: t.seo.home.title,
            description: t.seo.home.description,
            pathname: `/${locale}`,
            locale: locale as Locale,
          })
        )}
      />
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

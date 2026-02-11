import { MetadataRoute } from 'next'
import { projects } from '@/lib/constants'
import { locales } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://remmanidev.com'
  const currentDate = new Date().toISOString()

  const staticPaths = [
    '',
    '/about',
    '/projects',
    '/resume',
    '/blog',
    '/skills',
    '/experience',
    '/contact',
    '/spring-boot-architecture',
    '/nextjs-for-scalable-products',
    '/event-driven-systems-kafka',
  ]

  const routes: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const prefix = `/${locale}`
    for (const path of staticPaths) {
      const url = path ? `${baseUrl}${prefix}${path}` : `${baseUrl}${prefix}`
      routes.push({
        url,
        lastModified: currentDate,
        changeFrequency: path === '' ? 'weekly' : path === '/blog' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : path === '/about' || path === '/projects' ? 0.9 : path === '/blog' ? 0.8 : 0.8,
      })
    }
    const projectRoutes = projects.map((project) => ({
      url: `${baseUrl}${prefix}/projects/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: project.slug === 'travelos' ? 0.9 : 0.8,
    }))
    routes.push(...projectRoutes)
  }

  return routes
}

import { MetadataRoute } from 'next'
import { projects } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://remmanidev.com'
  const currentDate = new Date().toISOString()

  const routes = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/resume`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/skills`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    // Authority pages — high-intent SEO
    { url: `${baseUrl}/spring-boot-architecture`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/nextjs-for-scalable-products`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/event-driven-systems-kafka`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: project.slug === 'travelos' ? 0.9 : 0.8,
  }))

  return [...routes, ...projectRoutes]
}

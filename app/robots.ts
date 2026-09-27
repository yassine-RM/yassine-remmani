import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Only API routes are private. /_next/ must stay crawlable: Google needs
      // the CSS and JS bundles to render pages.
      disallow: ['/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}

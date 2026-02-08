import { Metadata } from 'next'

export const siteUrl = 'https://remmanidev.com'
export const siteName = 'Yassine REMMANI — Senior Full-Stack Developer'
/** Twitter/X handle for cards (optional). Omit @ prefix. */
export const twitterHandle = 'remmanidev'

export const defaultKeywords = [
  'Spring Boot Developer',
  'Full-Stack Developer Spring Boot Next.js',
  'Backend Engineer Java Spring',
  'Scalable API Developer',
  'Full-Stack Developer',
  'Spring Boot',
  'Next.js',
  'PostgreSQL',
  'Docker',
  'React',
  'Java',
  'TypeScript',
  'Multi-tenant Architecture',
  'REST APIs',
]

export function canonicalUrl(pathname: string): string {
  return `${siteUrl}${pathname === '/' ? '' : pathname}`
}

export interface PageMetadata {
  title: string
  description: string
  pathname: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  keywords?: string[]
  /** Override default image alt for OpenGraph */
  imageAlt?: string
}

export function buildMetadata({
  title,
  description,
  pathname,
  image = '/images/me.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Yassine REMMANI'],
  keywords,
  imageAlt,
}: PageMetadata): Metadata {
  const canonical = canonicalUrl(pathname)
  const ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return {
    title,
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      siteName,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: `@${twitterHandle}`,
      site: `@${twitterHandle}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}


import { Metadata } from 'next'

const siteUrl = 'https://remmanidev.com'

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
}

export function buildMetadata({
  title,
  description,
  pathname,
  image = '/assets/images/me.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Yassine Remmani'],
}: PageMetadata): Metadata {
  const canonical = canonicalUrl(pathname)
  const ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      siteName: 'Yassine Remmani — Full-Stack Engineer',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
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
    },
  }
}


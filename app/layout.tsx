import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteUrl, personName } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: personName,
  title: {
    default: 'Yassine Remmani — Senior Full-Stack Developer & Software Engineer',
    template: '%s | Yassine Remmani',
  },
  description:
    'Yassine Remmani is a Senior Full-Stack Developer and software engineer in Casablanca, Morocco, building production platforms with Java, Spring Boot, React, Next.js, PostgreSQL, Docker and AWS.',
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'huMfn-2MxJNotrPDZZIA5--90VUJGb3s8hEcdBs1ZP0',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

/**
 * The <html> element is rendered by app/[locale]/layout.tsx so that each
 * language is server-rendered with the correct lang attribute.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}

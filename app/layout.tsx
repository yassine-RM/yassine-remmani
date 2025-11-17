import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactDock } from '@/components/ContactDock'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://remmanidev.com'),
  title: {
    default: 'Yassine Remmani — Full-Stack Engineer | Spring Boot • Next.js • PostgreSQL • Docker',
    template: '%s | Yassine Remmani',
  },
  description: 'Full-Stack Engineer (Spring Boot • Next.js • PostgreSQL • Docker). I build resilient multi-tenant platforms and high-impact SaaS. 4,000+ dealer sites, 0→1 platform, -40% TTFB.',
  keywords: ['Full-Stack Engineer', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker', 'React', 'Java', 'TypeScript'],
  authors: [{ name: 'Yassine Remmani' }],
  creator: 'Yassine Remmani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remmanidev.com',
    siteName: 'Yassine Remmani — Full-Stack Engineer',
    title: 'Yassine Remmani — Full-Stack Engineer | Spring Boot • Next.js • PostgreSQL • Docker',
    description: 'I build resilient multi-tenant platforms and high-impact SaaS. 4,000+ dealer sites, realtime inventory sync, 0→1 platform, -40% TTFB.',
    images: [
      {
        url: '/assets/images/me.png',
        width: 1200,
        height: 630,
        alt: 'Yassine Remmani — Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yassine Remmani — Full-Stack Engineer | Spring Boot • Next.js • PostgreSQL • Docker',
    description: 'I build resilient multi-tenant platforms and high-impact SaaS. 4,000+ dealer sites, realtime inventory sync, 0→1 platform, -40% TTFB.',
    images: ['/assets/images/me.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-teal focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-bold">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <ContactDock />
        </ThemeProvider>
      </body>
    </html>
  )
}


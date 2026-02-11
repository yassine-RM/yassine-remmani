import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { SetLocaleLang } from '@/components/SetLocaleLang'

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
  icons: {
    icon: '/images/favicon.png',
  },
  title: {
    default: 'Yassine REMMANI — Backend Engineer | Spring Boot & Next.js',
    template: '%s | Yassine REMMANI',
  },
  description: 'Backend Engineer (6+ years). Spring Boot, Next.js, PostgreSQL, Docker, Kafka. Scalable APIs, event-driven systems, multi-tenant platforms. AWS, Microservices.',
  keywords: ['Backend Engineer', 'Spring Boot Developer', 'API Developer', 'Full-Stack Developer', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker', 'Kafka', 'AWS', 'Microservices', 'Event-driven systems', 'Multi-tenant'],
  authors: [{ name: 'Yassine REMMANI' }],
  creator: 'Yassine REMMANI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remmanidev.com',
    siteName: 'Yassine REMMANI — Backend Engineer',
    title: 'Yassine REMMANI — Backend Engineer | Spring Boot & Next.js',
    description: 'Backend Engineer. Scalable APIs, event-driven systems, multi-tenant platforms. 6+ years. Spring Boot, Next.js, PostgreSQL, Docker, Kafka, AWS.',
    images: [
      {
        url: '/images/me.png',
        width: 1200,
        height: 630,
        alt: 'Yassine REMMANI — Senior Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yassine REMMANI — Backend Engineer | Spring Boot & Next.js',
    description: 'Backend Engineer. Scalable APIs, event-driven systems, multi-tenant platforms. Spring Boot, Next.js, PostgreSQL, Docker, Kafka.',
    images: ['/images/me.png'],
    creator: '@remmanidev',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'D_ju_GEJ_e_-LgpFLUTc7tqffiPnQ329x8ddiNhkSjw',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        {/* Critical: runs synchronously before paint to prevent theme flash (FOUC). Reads localStorage → system pref. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(d?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <GoogleAnalytics />
        <SetLocaleLang />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

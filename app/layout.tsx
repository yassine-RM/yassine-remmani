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
  icons: {
    icon: '/images/favicon.png',
  },
  title: {
    default: 'Yassine REMMANI — Senior Full-Stack Developer | Spring Boot & Next.js',
    template: '%s | Yassine REMMANI',
  },
  description: 'Senior Full-Stack Developer (6+ years). Spring Boot, Next.js, PostgreSQL, Docker. I build scalable APIs, multi-tenant SaaS, and production-ready systems.',
  keywords: ['Spring Boot Developer', 'Full-Stack Developer Spring Boot Next.js', 'Backend Engineer Java Spring', 'Scalable API Developer', 'Full-Stack Developer', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker', 'React', 'Java', 'TypeScript', 'SaaS'],
  authors: [{ name: 'Yassine REMMANI' }],
  creator: 'Yassine REMMANI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remmanidev.com',
    siteName: 'Yassine REMMANI — Senior Full-Stack Developer',
    title: 'Yassine REMMANI — Senior Full-Stack Developer | Spring Boot & Next.js',
    description: 'I build scalable APIs, multi-tenant SaaS, and production-ready systems. 6+ years of full-stack experience.',
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
    title: 'Yassine REMMANI — Senior Full-Stack Developer | Spring Boot & Next.js',
    description: 'I build scalable APIs, multi-tenant SaaS, and production-ready systems.',
    images: ['/images/me.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Critical: runs before paint to prevent theme flash (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(d?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
          >
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

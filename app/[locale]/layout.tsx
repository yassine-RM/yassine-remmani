import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactDock } from '@/components/ContactDock'
import { LocaleProvider } from '@/components/LocaleProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { graph, personNode, websiteNode } from '@/lib/seo-schema'
import { isValidLocale, locales, type Locale } from '@/lib/i18n'
import { inter, jakarta, themeInitScript } from '../fonts'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <SeoJsonLd data={graph(personNode(locale as Locale), websiteNode())} />
        <GoogleAnalytics />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
          >
            {locale === 'fr' ? 'Aller au contenu' : 'Skip to content'}
          </a>
          <LocaleProvider locale={locale as Locale}>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <ContactDock />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

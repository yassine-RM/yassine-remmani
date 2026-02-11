import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactDock } from '@/components/ContactDock'
import { LocaleProvider } from '@/components/LocaleProvider'
import { isValidLocale, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
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
    <LocaleProvider locale={locale as Locale}>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <ContactDock />
    </LocaleProvider>
  )
}

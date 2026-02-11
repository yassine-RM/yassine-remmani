'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { useLocale } from '@/components/LocaleProvider'
import { localePath } from '@/lib/i18n'
import { useTranslations } from '@/hooks/useTranslations'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navPaths = ['/', '/about', '/skills', '/projects', '/experience', '/resume', '/contact'] as const
const navKeys = ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'] as const

export function Navbar() {
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations()
  const navItems = navPaths.map((path, i) => ({ path, label: t.nav[navKeys[i]] }))
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={localePath(locale, '/')}
            className="flex items-center"
            aria-label="Home"
          >
            <Image
              src="/images/my-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const href = localePath(locale, item.path)
              const isActive = pathname === href || (item.path !== '/' && pathname?.startsWith(href))
              return (
                <Link
                  key={item.path}
                  href={href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent-muted text-accent'
                      : 'text-[var(--foreground-muted)] hover:text-foreground hover:bg-card'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-0.5" aria-label="Language">
              <Link
                href={pathname?.replace(/^\/fr/, '/en') ?? '/en'}
                className={cn(
                  'px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
                  locale === 'en'
                    ? 'bg-accent-muted text-accent'
                    : 'text-[var(--foreground-muted)] hover:text-foreground hover:bg-card'
                )}
                aria-current={locale === 'en' ? 'true' : undefined}
              >
                EN
              </Link>
              <Link
                href={pathname?.replace(/^\/en/, '/fr') ?? '/fr'}
                className={cn(
                  'px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
                  locale === 'fr'
                    ? 'bg-accent-muted text-accent'
                    : 'text-[var(--foreground-muted)] hover:text-foreground hover:bg-card'
                )}
                aria-current={locale === 'fr' ? 'true' : undefined}
              >
                FR
              </Link>
            </nav>
            <button
              type="button"
              role="switch"
              aria-checked={theme === 'dark'}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              tabIndex={0}
              onClick={toggleTheme}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault()
                  toggleTheme()
                }
              }}
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-foreground hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link
              href={localePath(locale, '/contact')}
              className="hidden md:inline-flex items-center px-4 py-2 bg-accent-gradient text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-[var(--foreground-muted)] hover:text-foreground hover:bg-card transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const href = localePath(locale, item.path)
                const isActive = pathname === href || (item.path !== '/' && pathname?.startsWith(href))
                return (
                  <Link
                    key={item.path}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      isActive
                        ? 'bg-accent-muted text-accent'
                        : 'text-[var(--foreground-muted)] hover:text-foreground hover:bg-card'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href={localePath(locale, '/contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4 px-4 py-3 bg-accent-gradient text-white rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

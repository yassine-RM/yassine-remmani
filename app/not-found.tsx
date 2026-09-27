import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { inter, jakarta, themeInitScript } from './fonts'

// Next.js adds <meta name="robots" content="noindex"> to 404 responses automatically.
export const metadata: Metadata = {
  title: 'Page not found',
}

/**
 * Root 404. The root layout is a pass-through (see app/layout.tsx),
 * so this page renders its own <html> and <body>.
 */
export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="font-heading text-6xl font-bold mb-4">404</h1>
          <h2 className="font-heading text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/en">Go to Yassine Remmani&apos;s homepage</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/en/projects">View projects</Link>
            </Button>
          </div>
        </main>
      </body>
    </html>
  )
}

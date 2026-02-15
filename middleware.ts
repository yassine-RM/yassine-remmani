import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DEFAULT_LOCALE = 'en'
const LOCALES = ['en', 'fr'] as const

function isValidLocale(segment: string): boolean {
  return LOCALES.includes(segment as (typeof LOCALES)[number])
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url))
  }

  // Allow static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const segment = pathname.split('/')[1]
  if (segment && !isValidLocale(segment)) {
    // First segment is not en/fr — could be old bookmark; redirect to same path with default locale
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
}

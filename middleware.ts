import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, isValidLocale } from '@/lib/i18n'

/** Permanent (308) redirect so search engines consolidate signals on the localized URL. */
function redirectTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone()
  url.pathname = pathname
  return NextResponse.redirect(url, 308)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname || '/'

  // Redirect root to default locale
  if (pathname === '/') {
    return redirectTo(request, `/${defaultLocale}`)
  }

  // Skip middleware for static assets, metadata files (robots.txt, sitemap.xml…) and Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // First path segment (e.g. "en" from "/en/blog")
  const first = pathname.slice(1).split('/')[0]
  if (first && !isValidLocale(first)) {
    return redirectTo(request, `/${defaultLocale}${pathname}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname || '/'

  // Redirect root to default locale
  if (pathname === '/') {
    const redirectUrl = request.nextUrl.origin + '/en'
    return NextResponse.redirect(redirectUrl)
  }

  // Skip middleware for static assets and Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // First path segment (e.g. "en" from "/en/blog")
  const first = pathname.slice(1).split('/')[0]
  if (first && first !== 'en' && first !== 'fr') {
    const redirectUrl = request.nextUrl.origin + '/en' + pathname
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
}

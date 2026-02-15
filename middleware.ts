import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DEFAULT_LOCALE = 'en'

function isValidLocale(segment: string): boolean {
  return segment === 'en' || segment === 'fr'
}

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl

    // Redirect root to default locale
    if (pathname === '/' || pathname === '') {
      const url = request.nextUrl.clone()
      url.pathname = `/${DEFAULT_LOCALE}`
      return NextResponse.redirect(url)
    }

    // Allow static files and Next.js internals
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/images') ||
      pathname.includes('.')
    ) {
      return NextResponse.next()
    }

    const segment = pathname.slice(1).split('/')[0]
    if (segment && !isValidLocale(segment)) {
      const url = request.nextUrl.clone()
      url.pathname = `/${DEFAULT_LOCALE}${pathname}`
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
}

'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, Suspense } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-3FW3ZVCSXF'

/** Sends page_view to GA4 on client-side route changes (Next.js App Router) */
function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname) return
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])

  return null
}

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
}

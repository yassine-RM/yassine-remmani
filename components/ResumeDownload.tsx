'use client'

import { useState, useCallback } from 'react'
import { getCvData } from '@/lib/cv-data'
import type { Locale } from '@/lib/i18n'

interface ResumeDownloadProps {
  locale: Locale
}

export function ResumeDownload({ locale }: ResumeDownloadProps) {
  const [isPreparing, setIsPreparing] = useState(false)

  const handleDownload = useCallback(async () => {
    if (isPreparing) return
    setIsPreparing(true)
    try {
      const [{ pdf }, { CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('@/components/pdf/CVDocument'),
      ])
      const photoUrl =
        typeof window !== 'undefined'
          ? `${window.location.origin}/images/me.png`
          : undefined
      const blob = await pdf(<CVDocument locale={locale} photoUrl={photoUrl} />).toBlob()
      const filename = getCvData(locale).filename
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.setAttribute('aria-hidden', 'true')
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Resume PDF generation failed:', err)
    } finally {
      setIsPreparing(false)
    }
  }, [isPreparing, locale])

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isPreparing}
      aria-label="Download resume as PDF"
      className="
        w-full sm:w-auto inline-flex items-center justify-center gap-2.5
        min-h-[48px] px-6 py-3.5
        bg-accent-gradient text-white rounded-xl font-semibold text-sm
        shadow-lg hover:shadow-xl
        hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-200 ease-out
        disabled:opacity-80 disabled:pointer-events-none disabled:scale-100
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
      "
    >
      {isPreparing ? (
        <>
          <span
            className="w-5 h-5 shrink-0 border-2 border-white/30 border-t-white rounded-full animate-spin"
            aria-hidden
          />
          <span>Preparing CV…</span>
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Download My Resume</span>
        </>
      )}
    </button>
  )
}

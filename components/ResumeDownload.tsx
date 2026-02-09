'use client'

import { useState } from 'react'

export function ResumeDownload() {
  const [isPrinting, setIsPrinting] = useState(false)

  const handleDownload = () => {
    setIsPrinting(true)
    requestAnimationFrame(() => {
      window.print()
      setTimeout(() => setIsPrinting(false), 500)
    })
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isPrinting}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-gradient text-white rounded-lg font-semibold text-sm shadow-lg hover:opacity-95 active:scale-[0.98] transition-all duration-200 min-h-[48px] disabled:opacity-70 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Download or print resume as PDF"
    >
      {isPrinting ? (
        <>
          <svg className="w-5 h-5 animate-spin shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
            <path fill="currentColor" d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z" opacity="0.75" />
          </svg>
          Opening print…
        </>
      ) : (
        <>
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download / Print PDF
        </>
      )}
    </button>
  )
}

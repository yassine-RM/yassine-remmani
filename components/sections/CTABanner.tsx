import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CTABanner() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center shadow-[var(--shadow-card)]">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Ready to Build Something Great?
        </h2>
        <p className="text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
          Open to senior full-stack, backend, or platform engineering roles. Let&apos;s discuss how I can help your team.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/resume"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 bg-accent-gradient text-white rounded-md font-bold',
              'hover:opacity-90 transition-all shadow-lg hover:-translate-y-0.5',
              'min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background'
            )}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download 1-page Resume (PDF)
          </Link>
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground border border-border rounded-md font-bold',
              'hover:border-accent hover:bg-card-hover transition-colors',
              'min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background'
            )}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book 15-min call
          </Link>
        </div>
      </div>
    </section>
  )
}


import Link from 'next/link'
import { cn } from '@/lib/utils'

const proofPoints = [
  { value: '4,000+', label: 'Dealer Sites' },
  { value: 'Realtime', label: 'Inventory Sync' },
  { value: '0→1', label: 'Platform' },
  { value: '-40%', label: 'TTFB' },
]

export function Hero() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Full-Stack Engineer
        </div>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
          Yassine Remmani — <span className="text-teal">Full-Stack Engineer</span> (Spring Boot • Next.js • PostgreSQL • Docker)
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed">
          I build resilient multi-tenant platforms and high-impact SaaS.
        </p>

        {/* Proof Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {proofPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg p-4 text-center shadow-card-hover"
            >
              <div className="text-xl font-bold text-teal mb-1">{point.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                {point.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/resume"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 bg-teal text-black rounded-md font-bold',
              'hover:bg-teal-hover transition-all shadow-accent hover:shadow-lg hover:-translate-y-0.5',
              'min-h-[44px] focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]'
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
              'inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] rounded-md font-bold',
              'hover:border-teal hover:bg-[var(--bg-surface-hover)] transition-all',
              'min-h-[44px] focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]'
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


import Image from 'next/image'
import { techStack } from '@/lib/constants'

export function TechStack() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          Tech Stack
        </div>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Technologies I <span className="text-teal">Run Every Day</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg p-4 shadow-card-hover transition-all hover:translate-y-[-2px] hover:border-teal hover:bg-[var(--bg-surface-hover)]"
          >
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={28}
                height={28}
                className="flex-shrink-0"
              />
              <span className="font-bold text-sm">{tech.name}</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-semibold">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


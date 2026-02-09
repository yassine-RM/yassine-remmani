'use client'

import { skills } from '@/lib/constants'

const categories = [
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'cloudDevops', label: 'Cloud & DevOps' },
  { key: 'architecture', label: 'Architecture' },
] as const

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {categories.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-heading text-sm font-semibold text-accent mb-4">
              {label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {(skills as Record<string, string[]>)[key].map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 text-sm text-[var(--foreground-muted)] bg-background rounded-lg border border-border"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

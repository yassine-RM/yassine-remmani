import type { Messages } from '@/lib/translations'

interface SalonSyncCaseStudyProps {
  t: Messages
  problem: string
  solution: string
}

const sectionTitle = 'font-heading text-xl font-semibold mb-4'
const body = 'text-[var(--foreground-muted)] leading-relaxed'

/** The extended SalonSync case study body (all facts verified against the SalonSync codebase). */
export function SalonSyncCaseStudy({ t, problem, solution }: SalonSyncCaseStudyProps) {
  const c = t.salonsyncCase

  return (
    <div className="space-y-12">
      <section>
        <h2 className={sectionTitle}>{c.overviewTitle}</h2>
        <p className={body}>{c.overview}</p>
      </section>

      <section>
        <h2 className={sectionTitle}>{t.caseStudy.problem}</h2>
        <p className={body}>{problem}</p>
      </section>

      <section>
        <h2 className={sectionTitle}>{t.caseStudy.solution}</h2>
        <p className={body}>{solution}</p>
      </section>

      <section>
        <h2 className={sectionTitle}>{c.featuresTitle}</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {c.features.map((f) => (
            <li key={f.name} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-heading text-base font-semibold mb-1.5">{f.name}</h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{f.desc}</p>
            </li>
          ))}
          {c.upcoming.map((f) => (
            <li key={f.name} className="rounded-xl border border-dashed border-border bg-card p-5">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h3 className="font-heading text-base font-semibold">{f.name}</h3>
                <span className="px-2 py-0.5 rounded-full bg-accent-muted text-accent text-[10px] font-semibold uppercase tracking-wider">
                  {c.comingSoon}
                </span>
              </div>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{f.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionTitle}>{c.experienceTitle}</h2>
        <p className={body}>{c.experience}</p>
      </section>

      <section id="architecture">
        <h2 className={sectionTitle}>{c.architectureTitle}</h2>
        <ul className="space-y-3">
          {c.architecture.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--foreground-muted)] leading-relaxed">
              <span className="text-accent shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionTitle}>{c.stackTitle}</h2>
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {c.stack.map((group) => (
            <div key={group.label}>
              <dt className="text-sm font-semibold text-foreground mb-2">{group.label}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-border text-xs text-[var(--foreground-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className={sectionTitle}>{c.challengesTitle}</h2>
        <div className="space-y-6">
          {c.challenges.map((ch) => (
            <div key={ch.title}>
              <h3 className="font-heading text-base font-semibold mb-1.5">{ch.title}</h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={sectionTitle}>{c.decisionsTitle}</h2>
        <ul className="space-y-3">
          {c.decisions.map((d) => (
            <li key={d} className="flex gap-3 text-[var(--foreground-muted)] leading-relaxed">
              <span className="text-accent shrink-0">→</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionTitle}>{c.statusTitle}</h2>
        <p className={body}>{c.status}</p>
      </section>
    </div>
  )
}

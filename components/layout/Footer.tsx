import Link from 'next/link'

const socialLinks = [
  { href: 'mailto:remmanidev@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/yassine-remmani/', label: 'LinkedIn', external: true },
  { href: 'https://github.com/yassine-RM', label: 'GitHub', external: true },
]

const architectureLinks = [
  { href: '/spring-boot-architecture', label: 'Spring Boot' },
  { href: '/nextjs-for-scalable-products', label: 'Next.js' },
  { href: '/event-driven-systems-kafka', label: 'Event-driven Kafka' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="text-sm text-[var(--foreground-muted)] mb-4">
              © {currentYear} Yassine REMMANI · Casablanca, Morocco · Open to relocation
            </p>
            <p className="text-xs text-[var(--foreground-muted)] max-w-sm">
              Senior Full-Stack Developer. Spring Boot, Next.js, PostgreSQL, Docker. Scalable APIs and production-grade platforms.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <nav aria-label="Architecture & technical content">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)] mb-3">Architecture</h3>
              <ul className="space-y-2">
                {architectureLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Social links">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)] mb-3">Connect</h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[var(--foreground-muted)] hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

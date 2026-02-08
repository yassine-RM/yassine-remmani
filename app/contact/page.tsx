import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Open to senior full-stack, backend, or platform engineering roles. Email, LinkedIn, GitHub.',
  pathname: '/contact',
})

const links = [
  { href: 'mailto:remmanidev@gmail.com', label: 'Email', description: 'remmanidev@gmail.com' },
  { href: 'https://www.linkedin.com/in/yassine-remmani/', label: 'LinkedIn', description: 'linkedin.com/in/yassine-remmani', external: true },
  { href: 'https://github.com/yassine-RM', label: 'GitHub', description: 'github.com/yassine-RM', external: true },
]

export default function ContactPage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: canonicalUrl('/contact') },
          ],
        }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-2xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contact</h1>
        <p className="text-[var(--foreground-muted)] mb-12">
          Open to senior full-stack, backend, or platform engineering roles.
          Reach out to discuss how I can help your team.
        </p>
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-border-hover hover:text-accent transition-colors"
            >
              <div>
                <p className="font-medium">{link.label}</p>
                <p className="text-sm text-[var(--foreground-muted)]">{link.description}</p>
              </div>
              <span className="text-sm text-[var(--foreground-muted)]">
                {link.external ? 'Open →' : 'Email →'}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

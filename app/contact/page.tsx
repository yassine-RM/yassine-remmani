import { Metadata } from 'next'
import { buildMetadata, canonicalUrl } from '@/lib/seo'
import { SeoJsonLd } from '@/components/seo/SeoJsonLd'
import { ContactForm } from '@/components/ContactForm'
import { cn } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Let\'s Build Something Great',
  description: 'Open to senior full-stack, backend, or platform engineering roles. Get in touch to discuss how I can help your team.',
  pathname: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: canonicalUrl('/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact',
              item: canonicalUrl('/contact'),
            },
          ],
        }}
      />
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-teal">Great</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Open to senior full-stack, backend, or platform engineering roles. If you want someone who designs, builds, deploys, and keeps it running — reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: 'envelope', label: 'Email', value: 'remmanidev@gmail.com', href: 'mailto:remmanidev@gmail.com' },
              { icon: 'phone', label: 'Phone', value: '+212 6 20 96 36 60', href: 'tel:+212620963660' },
              { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/yassine-remmani', href: 'https://www.linkedin.com/in/yassine-remmani/', external: true },
              { icon: 'github', label: 'GitHub', value: 'github.com/yassine-RM', href: 'https://github.com/yassine-RM', external: true },
              { icon: 'map', label: 'Location', value: 'Casablanca, Morocco', href: null },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={cn(
                  'flex items-center gap-4 p-4 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-card',
                  item.href && 'hover:border-teal hover:bg-[var(--bg-surface-hover)] transition-all'
                )}
              >
                <div className="text-2xl text-teal">
                  {item.icon === 'envelope' && '📧'}
                  {item.icon === 'phone' && '📱'}
                  {item.icon === 'linkedin' && '🔗'}
                  {item.icon === 'github' && '💻'}
                  {item.icon === 'map' && '📍'}
                </div>
                <div>
                  <div className="text-xs text-[var(--text-secondary)] mb-1">{item.label}</div>
                  <div className="font-semibold">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-6 shadow-card">
            <h2 className="font-heading text-xl font-bold mb-4">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}


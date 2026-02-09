'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const links = [
  { href: 'mailto:remmanidev@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/yassine-remmani/', label: 'LinkedIn', external: true },
  { href: 'https://github.com/yassine-RM', label: 'GitHub', external: true },
]

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl md:text-3xl font-bold mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[var(--foreground-muted)] mb-8"
        >
          Open to senior full-stack, backend, or platform engineering roles.
          Reach out to discuss how I can help your team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link) => (
            <Button key={link.href} variant="secondary" asChild>
              <Link
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

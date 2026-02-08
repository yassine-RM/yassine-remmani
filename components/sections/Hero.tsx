'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-medium text-accent mb-4">
            Senior Full-Stack Developer · Spring Boot & Next.js
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance mb-6">
            Yassine REMMANI
          </h1>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
            Senior Full-Stack Developer and Backend Engineer. I build scalable APIs and production-ready systems with Spring Boot and Next.js — backend-first architecture that ships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

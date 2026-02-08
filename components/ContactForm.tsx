'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/mblkopgg', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
          Email <span aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          placeholder="you@company.com"
          className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required="true"
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-vertical"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-teal text-black rounded-md font-bold hover:bg-teal-hover transition-all shadow-accent disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)]"
      >
        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-teal">Thanks! I&apos;ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  )
}


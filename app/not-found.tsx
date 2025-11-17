import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24 text-center">
      <h1 className="font-heading text-6xl font-bold mb-4">404</h1>
      <h2 className="font-heading text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-[var(--text-secondary)] mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-black rounded-md font-bold hover:bg-teal-hover transition-all shadow-accent"
      >
        Go Home
      </Link>
    </div>
  )
}


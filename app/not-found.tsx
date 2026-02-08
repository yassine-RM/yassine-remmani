import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-heading text-6xl font-bold mb-4">404</h1>
      <h2 className="font-heading text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-[var(--foreground-muted)] mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}

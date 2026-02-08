import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24',
        className
      )}
    >
      {children}
    </section>
  )
}

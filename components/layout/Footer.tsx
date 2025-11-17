export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-color)] py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center text-[var(--text-secondary)]">
          <p>&copy; {currentYear} Yassine Remmani. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Casablanca, Morocco · Open to relocation
          </p>
        </div>
      </div>
    </footer>
  )
}


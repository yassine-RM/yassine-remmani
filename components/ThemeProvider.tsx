'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Reads theme from DOM (set by blocking inline script before paint) or localStorage or system preference.
 * Order: 1) DOM (blocking script), 2) localStorage (persisted user choice), 3) prefers-color-scheme.
 */
function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  const fromDom = document.documentElement.getAttribute('data-theme')
  if (fromDom === 'light' || fromDom === 'dark') return fromDom
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // localStorage may be unavailable (private mode, etc.)
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // SSR-safe: always 'dark' to avoid hydration mismatch; sync on mount
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // Sync React state with DOM (blocking script already set data-theme before paint)
  useEffect(() => {
    setMounted(true)
    const initial = getInitialTheme()
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  // Persist theme to DOM + localStorage when it changes (avoids FOUC on subsequent navigations)
  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // localStorage may be unavailable
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Always provide the context, even during SSR
  // Use default 'dark' theme during SSR to avoid hydration mismatch
  const contextValue = {
    theme: mounted ? theme : 'dark',
    setTheme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}


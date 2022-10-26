import { createContext, ReactNode, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: string
  isDark: boolean
  toggleTheme: () => void
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

const getTheme = () => {
  const storedTheme = localStorage.getItem('theme')
  const preferedIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches

  if (storedTheme) return storedTheme
  if (preferedIsDark) return 'dark'

  return 'light'
}

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(getTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    isDark ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

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

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  const storedTheme = localStorage.getItem('theme')

  const [theme, setTheme] = useState(storedTheme || preferedTheme)

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    storedTheme && setTheme(storedTheme)
  }, [storedTheme])

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')

    localStorage.setItem('theme', theme)
  }, [isDark, theme])

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

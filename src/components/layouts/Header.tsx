import { useContext, ReactNode } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Loading } from '../Loading'
import { Moon, Sun } from 'phosphor-react'

interface HeaderProps {
  children: ReactNode
  isLoading?: boolean
}

export const Header = ({ children, isLoading }: HeaderProps) => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  return (
    <header
      className="min-h-[170px] flex flex-col sm:flex-row items-center gap-8 
    relative p-4 sm:p-8 rounded-xl bg-base-profile shadow-lg"
    >
      {isLoading ? <Loading /> : children}
      <button
        className="absolute top-4 right-4 sm:top-auto sm:bottom-8 sm:right-8 
        text-2xl text-base-title hover:text-primary"
        title={isDark ? 'Light' : 'Dark'}
        onClick={toggleTheme}
      >
        {isDark ? <Sun /> : <Moon />}
      </button>
    </header>
  )
}

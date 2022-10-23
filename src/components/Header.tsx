import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header
      className="min-h-40 flex flex-col sm:flex-row items-center sm:items-start 
      gap-8  p-4 sm:p-8 rounded-xl bg-base-profile shadow-lg"
    >
      {children}
    </header>
  )
}

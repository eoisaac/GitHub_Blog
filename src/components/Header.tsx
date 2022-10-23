import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header
      className="min-h-40 flex flex-col sm:flex-row items-center sm:items-start 
      gap-8 relative z-20 -top-24 p-8 rounded-xl bg-base-profile shadow-lg"
    >
      {children}
    </header>
  )
}

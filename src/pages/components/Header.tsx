import { ReactNode } from 'react'
import { Loading } from '../../components/Loading'

interface HeaderProps {
  children: ReactNode
  isLoading?: boolean
}

export const Header = ({ children, isLoading }: HeaderProps) => {
  return (
    <header
      className="min-h-[170px] flex flex-col sm:flex-row items-center sm:items-start 
      gap-8  p-4 sm:p-8 rounded-xl bg-base-profile shadow-lg"
    >
      {isLoading ? <Loading /> : children}
    </header>
  )
}

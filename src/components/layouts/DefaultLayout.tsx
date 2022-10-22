import { Outlet } from 'react-router-dom'
import { Cover } from './Cover'

export const DefaultLayout = () => {
  return (
    // p-2 md:p-4
    <div className="h-screen relative">
      <Cover />
      <div
        className="w-full min-h-full max-w-4xl mx-auto relative z-20 
        text-base-text border border-orange-500"
      >
        <Outlet />
      </div>
    </div>
  )
}

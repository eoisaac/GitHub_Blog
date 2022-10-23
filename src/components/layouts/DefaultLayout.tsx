import { Outlet } from 'react-router-dom'
import { Cover } from './Cover'

export const DefaultLayout = () => {
  // p-2 md:p-4
  return (
    <div className="h-screen">
      <Cover />
      <div className="w-full min-h-full max-w-4xl mx-auto p-2 md:p-4">
        <div
          className="w-full h-full relative z-20 
        text-base-text"
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

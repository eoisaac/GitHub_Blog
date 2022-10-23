import { Outlet } from 'react-router-dom'
import { Cover } from './Cover'

export const DefaultLayout = () => {
  // p-2 md:p-4
  return (
    <>
      <Cover />
      <div className="w-full max-w-4xl mx-auto p-2 md:p-4">
        <div
          className="w-full flex flex-col gap-4 sm:gap-16 relative -top-24 
          z-20 text-base-text"
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

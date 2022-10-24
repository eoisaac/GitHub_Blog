import { CaretLeft } from 'phosphor-react'
import { NavigationLink } from '../../components/NavigationLink'

export const NotFound = () => {
  return (
    <div className="w-screen h-screen grid place-items-center p-2 md:p-4 bg-background">
      <main
        className="flex flex-col items-center justify-between gap-2 p-4 md:p-8 
        text-center shadow-lg rounded-lg bg-base-post"
      >
        <h1 className="text-base-title text-2xl font-bold">
          Oops... Page not found
        </h1>
        <img
          src="/assets/images/error.svg"
          alt="Blue robot"
          className="w-80 h-w-80"
          loading="lazy"
        />
        <p className="text-base-text text-lg font-bold">
          It seems something went wrong.
        </p>

        <NavigationLink
          label="Return Home"
          url="/"
          icon={<CaretLeft weight="bold" />}
        />
      </main>
    </div>
  )
}

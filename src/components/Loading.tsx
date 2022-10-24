export const Loading = () => {
  return (
    <div
      className="grid place-items-center flex-1 self-center relative z-30 
    animate-spin"
    >
      <div
        className="h-11 w-11 rounded-full border-4 border-base-border
      border-t-primary"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

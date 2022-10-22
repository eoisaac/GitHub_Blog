export const Cover = () => {
  return (
    <div
      className="h-full max-h-16 sm:max-h-36 md:max-h-72 relative top-0 
      right-0 left-0 z-10 flex justify-center md:items-start md:pt-16 shadow-lg 
      bg-lines-cover bg-cover bg-center"
    >
      <h2 className="flex md:flex-col justify-center content-center gap-4">
        <img
          src="../../../public/assets/images/symbol.svg"
          alt="Terminal symbol"
          className="self-center"
        />
        <img
          src="../../../public/assets/images/title.svg"
          alt="GitHub Blog"
          className="self-center"
        />
        <span className="sr-only">GitHub Blog</span>
      </h2>
    </div>
  )
}

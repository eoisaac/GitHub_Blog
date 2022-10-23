export const Cover = () => {
  const imagesPath = import.meta.env.VITE_IMAGES_PATH

  return (
    <div
      className="h-48 md:h-72 relative top-0 
      inset-x-0 z-10 flex justify-center items-start pt-10 md:pt-16
      bg-lines-cover bg-cover bg-center"
    >
      <h2 className="flex md:flex-col justify-center content-center flex-wrap gap-6">
        <img
          src={`${imagesPath}/symbol.svg`}
          alt="Terminal symbol"
          className="h-[40px] w-[46px] self-center"
          loading="lazy"
        />
        <img
          src={`${imagesPath}/title.svg`}
          alt="GitHub Blog"
          className="h-[19px] w-[145px] self-center"
          loading="lazy"
        />
        <span className="sr-only">GitHub Blog</span>
      </h2>
    </div>
  )
}

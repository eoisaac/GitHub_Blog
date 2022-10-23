interface LinkProps {
  label: string
  url: string
  icon?: JSX.Element
  iconRight?: boolean
  newTab?: boolean
}

export const Link = ({
  label,
  url,
  icon,
  iconRight,
  newTab = true,
}: LinkProps) => {
  const flexDirection = iconRight ? 'flex-row' : 'flex-row-reverse'
  const tab = newTab ? '_blank' : '_self'

  return (
    <a
      href={url}
      target={tab}
      className={`flex ${flexDirection} items-center gap-1 cursor-pointer 
    text-primary font-bold text-xs uppercase relative pb-[1px]
    before:content-[''] 
    before:absolute before:block before:w-full before:h-[1px] 
    before:bottom-0 before:left-0 before:bg-primary
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-200`}
    >
      <span>{label}</span>
      <span className="text-xs">{icon}</span>
    </a>
  )
}

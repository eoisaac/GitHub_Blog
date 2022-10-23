import { Link } from 'react-router-dom'

interface NavigationLinkProps {
  label: string
  url: string
  icon?: JSX.Element
  iconRight?: boolean
  newTab?: boolean
  external?: boolean
}

export const NavigationLink = ({
  label,
  url,
  icon,
  iconRight,
  newTab = true,
  external = false,
}: NavigationLinkProps) => {
  const flexDirection = iconRight ? 'flex-row' : 'flex-row-reverse'
  const tab = newTab ? '_blank' : '_self'

  const linkStyle = `flex ${flexDirection} items-center gap-1 cursor-pointer 
  text-primary font-bold text-xs uppercase relative pb-[1px]
  before:content-[''] 
  before:absolute before:block before:w-full before:h-[1px] 
  before:bottom-0 before:left-0 before:bg-primary
  before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
  before:transition before:ease-in-out before:duration-200`

  return external ? (
    <a href={url} target={tab} className={linkStyle}>
      <span>{label}</span>
      <span className="text-xs">{icon}</span>
    </a>
  ) : (
    <Link to={url} className={linkStyle}>
      <span>{label}</span>
      <span className="text-xs">{icon}</span>
    </Link>
  )
}

interface InfoItemProps {
  label: string
  icon: JSX.Element
  variant?: 'primary' | 'secondary'
  title: string
}

export const InfoItem = ({
  label,
  icon,
  variant = 'primary',
  title,
}: InfoItemProps) => {
  const labelColor =
    variant === 'primary' ? 'text-base-subtitle' : 'text-base-span'

  return (
    <li className="flex items-center gap-1" title={title}>
      <span className="text-xl text-base-label ">{icon}</span>
      <span className={`${labelColor}`}>{label}</span>
    </li>
  )
}

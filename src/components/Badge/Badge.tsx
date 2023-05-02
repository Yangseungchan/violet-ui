import { HTMLAttributes } from 'react'

import { type BadgeVariants, wrapper } from './Badge.css'

type BadgeProps = BadgeVariants & HTMLAttributes<HTMLDivElement>

const Badge = ({
  children,
  color = 'primary',
  shape = 'rounded',
  hoverable = false,
  ...rest
}: BadgeProps) => {
  return (
    <div className={wrapper({ color, shape, hoverable })} {...rest}>
      {children}
    </div>
  )
}

export { Badge, type BadgeProps }

import { PropsWithChildren } from 'react'

import { type BadgeVariants, wrapper } from './Badge.css'

type BadgeProps = PropsWithChildren & BadgeVariants

const Badge = ({ children, color = 'primary', shape = 'rounded' }: BadgeProps) => {
  return <div className={wrapper({ color, shape })}>{children}</div>
}

export { Badge, type BadgeProps }

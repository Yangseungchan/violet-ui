import cx from 'classnames'
import { HTMLAttributes } from 'react'

import { fontSize } from '@/styles/theme.css'

import { type BadgeVariants, wrapper } from './Badge.css'

type BadgeProps = BadgeVariants &
  HTMLAttributes<HTMLDivElement> & {
    size: keyof typeof fontSize
  }

const Badge = ({
  children,
  color = 'primary',
  shape = 'rounded',
  hoverable = false,
  variant = 'filled',
  size = 'md',
  ...rest
}: BadgeProps) => {
  return (
    <div
      className={cx(wrapper({ color, shape, hoverable, variant }), fontSize[size])}
      {...rest}
      data-testid="badge"
    >
      {children}
    </div>
  )
}

export default Badge

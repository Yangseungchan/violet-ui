import { Meta, StoryObj } from '@storybook/react'

import { Badge } from '@/components'

const meta = {
  title: 'Badge',
  component: Badge,
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof Badge>

export const Default = {
  args: {
    children: 'Default',
  },
} satisfies Story

export const Primary = {
  args: {
    children: 'Primary',
    color: 'primary',
    hoverable: true,
  },
} satisfies Story

export const Secondary = {
  args: {
    children: 'Secondary',
    color: 'secondary',
  },
} satisfies Story

export const Squared = {
  args: {
    children: 'Secondary',
    shape: 'squared',
  },
} satisfies Story

export const Rounded = {
  args: {
    children: 'Secondary',
    shape: 'rounded',
  },
} satisfies Story

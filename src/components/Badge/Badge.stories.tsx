import { expect, jest } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { getByTestId, userEvent, within } from '@storybook/testing-library'

import { Badge } from '@/components'

const meta = {
  title: 'Atoms/Badge',
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
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByText('Primary'))
    expect(args.onClick).toHaveBeenCalled()
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

export const Hoverable = {
  args: {
    children: 'Hoverable',
    hoverable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Hoverable')).toBeInTheDocument()
  },
} satisfies Story

import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '@/styles/theme.css'

export const wrapper = recipe({
  base: {
    padding: '6px 8px',
    textAlign: 'center',
    color: 'white',
    width: 'max-content',
    border: '2px solid',
  },
  variants: {
    color: {
      primary: {
        background: vars.color.primary,
        borderColor: vars.color.primary,
        color: vars.color.primary,
      },
      secondary: {
        background: vars.color.secondary,
        borderColor: vars.color.secondary,
        color: vars.color.secondary,
      },
    },
    shape: {
      squared: { borderRadius: '4px' },
      rounded: { borderRadius: '2rem' },
    },
    hoverable: {
      true: {
        transition: 'all 0.4s ease-in',
        ':hover': {
          WebkitFilter: 'brightness(0.8)',
          cursor: 'pointer',
        },
      },
    },
    variant: {
      filled: {
        color: 'white',
      },
      outlined: {
        background: 'transparent',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    shape: 'squared',
    variant: 'filled',
  },
})

export type BadgeVariants = RecipeVariants<typeof wrapper>

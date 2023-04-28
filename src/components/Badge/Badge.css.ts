import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const wrapper = recipe({
  base: {
    padding: '6px 8px',
    textAlign: 'center',
    color: 'white',
    width: 'max-content',
  },
  variants: {
    color: {
      primary: { background: '#40407a' },
      secondary: { background: '#706fd3' },
    },
    shape: {
      squared: { borderRadius: '4px' },
      rounded: { borderRadius: '12px' },
    },
  },
  defaultVariants: {
    color: 'primary',
    shape: 'squared',
  },
})

export type BadgeVariants = RecipeVariants<typeof wrapper>

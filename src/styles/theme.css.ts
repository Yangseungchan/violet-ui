import { createGlobalTheme, styleVariants } from '@vanilla-extract/css'

const colorPalette = {
  primary: '#40407a',
  secondary: '#706fd3',
}

const vars = createGlobalTheme(':root', {
  color: colorPalette,
  fontSize: {
    xxxs: '8px',
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
  },
})

const fontSize = styleVariants(vars.fontSize, (fontSize) => ({
  fontSize,
}))

export { colorPalette as color, fontSize, vars }

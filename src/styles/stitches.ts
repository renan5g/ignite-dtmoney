import { createStitches, defaultThemeMap } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

import { colors } from './colors';

type SpaceValue = Stitches.ScaleValue<'space'>;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },

  theme: {
    colors,

    space: {
      px: '1px',
      1: '.25rem', // 4px
      2: '.5rem', // 8px
      3: '.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      8: '2rem', // 32px
      10: '2.5rem', // 40px
      12: '3rem', // 48px
      16: '4rem', // 64px
      20: '5rem', // 80px
      40: '10rem', // 160px
      64: '16rem', // 256px
      80: '20rem', // 320px
    },

    fontSizes: {
      xss: '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '4xl': '2rem', // 32px
      '5xl': '2.25rem', // 36px
      '6xl': '3rem', // 48px
      '7xl': '4rem', // 64px
      '8xl': '4.5rem', // 72px
      '9xl': '6rem', // 96px
    },

    fonts: {
      default: 'Poppins, apple-system, sans-serif',
      highlight: 'Poppins, apple-system, sans-serif',
      reading: 'Spectral, serif',
      code: 'Fira code, monospace',
    },

    fontWeights: {
      regular: 'regular',
      medium: 'medium',
      bold: 'bold',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    sizes: {
      maxWidth: '1120px', // 1120px or 70rem
      max: 'max-content',
      min: 'min-content',
      full: '100%',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      round: '50%',
      full: '9999px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      ligth: '25%',
      semiTransparent: '10%',
    },

    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  },

  media: {
    mobile: '(max-width: 375px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    desktop: '(max-width: 1440px)',
    motion: '(prefers-reduced-motion: no-preference)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },

  utils: {
    p: (value: SpaceValue) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: SpaceValue) => ({
      paddingTop: value,
    }),
    pr: (value: SpaceValue) => ({
      paddingRight: value,
    }),
    pb: (value: SpaceValue) => ({
      paddingBottom: value,
    }),
    pl: (value: SpaceValue) => ({
      paddingLeft: value,
    }),
    px: (value: SpaceValue) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: SpaceValue) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: SpaceValue) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: SpaceValue) => ({
      marginTop: value,
    }),
    mr: (value: SpaceValue) => ({
      marginRight: value,
    }),
    mb: (value: SpaceValue) => ({
      marginBottom: value,
    }),
    ml: (value: SpaceValue) => ({
      marginLeft: value,
    }),
    mx: (value: SpaceValue) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: SpaceValue) => ({
      marginTop: value,
      marginBottom: value,
    }),
    boxSize: (value: SpaceValue) => ({
      width: value,
      height: value,
    }),
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

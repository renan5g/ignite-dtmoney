import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

import { rem } from '@shared/css';

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
  theme: {
    colors: {
      blue: 'hsl(256, 67%, 48%)',
      green: 'hsl(158, 60%, 50%)',
      red: 'hsl(350, 78%, 54%)',

      blue_ligth: 'hsl(256, 100%, 60%)',

      text_body: 'hsl(227, 15%, 64%)',
      text_title: 'hsl(227, 28%, 29%)',
      text_white: 'hsl(0, 0%, 100%)',

      shape: 'hsl(0, 0%, 100%)',
      background: 'hsl(216, 20%, 95%)',
    },
    fonts: {
      body: 'Poppins, apple-system, sans-serif',
      heading: 'Poppins, apple-system, sans-serif',
    },
    space: {
      1: rem(4),
      2: rem(8),
      3: rem(16),
      4: rem(24),
      5: rem(32),
      6: rem(40),
      7: rem(56),
      8: rem(64),
      9: rem(80),
    },
    fontSizes: {
      1: rem(12),
      2: rem(14),
      3: rem(16),
      4: rem(18),
      5: rem(20),
      6: rem(24),
      7: rem(28),
      8: rem(32),
      9: rem(40),
    },
    sizes: {
      maxWidth: rem(1120),
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      xs: rem(4),
      sm: rem(8),
      md: rem(16),
      lg: rem(24),
      xl: rem(32),
      '2xl': rem(40),
      '3xl': rem(48),
      '4xl': rem(64),
      '5xl': rem(80),
      '6xl': rem(96),
      '7xl': rem(128),
      '8xl': rem(256),
    },
    radii: {
      xs: rem(2),
      sm: rem(4),
      md: rem(8),
      lg: rem(16),
      xl: rem(24),
      round: '50%',
      full: '9999px',
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
    sm: '(max-width: 375px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1440px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft' & 'paddingRight'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop' & 'paddingBottom'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft' & 'marginRight'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop' & 'marginBottom'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    boxSize: (value: Stitches.ScaleValue<'sizes'> | number) => ({
      width: value,
      height: value,
    }),
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

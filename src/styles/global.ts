import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
    overflowX: 'hidden',

    '@lg': {
      fontSize: '93.75%',
    },

    '@md': {
      fontSize: '87.5%',
    },
  },

  body: {
    backgroundColor: '$background',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  'body, input, textarea, button': {
    fontFamily: '$body',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 600,
  },

  button: {
    border: 0,
    cursor: 'pointer',
  },

  '&[disibled]': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});

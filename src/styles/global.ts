import { globalCss } from './stitches';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
    overflowX: 'hidden',

    '@laptop': {
      fontSize: '93.75%',
    },

    '@tablet': {
      fontSize: '87.5%',
    },
  },

  body: {
    backgroundColor: '$background',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
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
    opacity: '$intense',
    cursor: 'not-allowed',
  },
});

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
    color: '$text_title',
    fontFamily: '$body',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  button: {
    cursor: 'pointer',
  },

  '&[disibled]': {
    opacity: '.6',
    cursor: 'not-allowed',
  },
});

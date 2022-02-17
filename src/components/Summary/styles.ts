import { styled } from '@styles/stitches.config';

export const Container = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',

  gap: '$5',
  mt: '-$8',

  '@md': {
    gap: '$3',
    mt: '-8rem',
  },

  variants: {
    scroll: {
      true: {
        gridTemplateColumns: 'repeat(3, minmax(250px, 1fr))',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const CardWrapper = styled('article', {
  padding: '$4 $5',
  borderRadius: '$sm',
  bg: '$shape',
  color: '$text_title',

  '& strong': {
    mt: '$3',
    display: 'block',
    fontSize: '$8',
    fontWeight: 500,
    lineHeight: '3rem',
  },

  variants: {
    highlight: {
      true: {
        bg: '$green',
        color: '$text_white',
      },
    },
  },
});

export const CardHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

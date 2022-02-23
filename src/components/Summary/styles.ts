import { styled } from '@styles/stitches';

export const Container = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',

  gap: '$8',
  marginTop: '-$16',

  '@mobile': {
    gap: '$4',
    marginTop: '-$40',
  },

  variants: {
    scroll: {
      true: {
        gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const CardWrapper = styled('article', {
  padding: '$6 $8',
  borderRadius: '$sm',
  bg: '$shape',
  color: '$text_title',

  '& strong': {
    mt: '$4',
    display: 'block',
    fontSize: '$4xl',
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

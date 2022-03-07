import { styled } from '@styles/stitches';

export const Container = styled('section', {
  marginTop: '$16',
  overflowX: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const Transactions = styled('table', {
  width: '100%',
  borderSpacing: '0 0.5rem',

  '& th': {
    textAlign: 'left',
    color: '$text-body',
    padding: '$4 $8',
    fontWeight: 400,
    lineHeight: '$base',
  },
});

export const Td = styled('td', {
  bg: '$shape',
  padding: '$4 $8',
  border: 0,
  color: '$text-body',

  '&:first-child': {
    borderRadius: '$sm 0 0 $sm',
    color: '$text-title',
  },

  '&:last-child': {
    borderRadius: '0 $sm $sm 0',
  },

  variants: {
    type: {
      income: {
        color: '$green',
      },

      outcome: {
        color: '$red',
      },
    },
  },
});

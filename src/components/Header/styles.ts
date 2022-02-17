import { styled } from '@styles/stitches.config';

export const Container = styled('header', {
  background: '$blue',
});

export const Wrapper = styled('div', {
  maxWidth: '$maxWhidth',
  margin: '0 auto',
  padding: '$5 $3 10rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': {
    flexDirection: 'column',
    gap: '$4',
  },
});

export const AddButton = styled('button', {
  fontSize: '$3',
  height: '$3xl',
  padding: '0 $5',

  color: '$text_white',
  bg: '$blue_ligth',

  borderRadius: '$sm',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '@sm': {
    width: '$full',
  },
});

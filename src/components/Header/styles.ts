import { styled } from '@styles/stitches';

export const Container = styled('header', {
  background: '$blue',
});

export const Wrapper = styled('div', {
  maxWidth: '$maxWidth',
  margin: '0 auto',
  padding: '$8 $4 $40',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const AddButton = styled('button', {
  fontSize: '$md',
  fontWeight: 500,
  height: '$12',
  padding: '0 $8',

  color: '$text_white',
  bg: '$blue_ligth',

  borderRadius: '$sm',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '@mobile': {
    padding: '0 $4',
  },
});

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

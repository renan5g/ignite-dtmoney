import { styled } from '@styles/stitches';

import { darken } from 'polished';

export const Button = styled('button', {
  fontSize: '$md',
  height: '$12',
  padding: '0 $8',
  textAlign: 'center',

  borderRadius: '$sm',
  transition: 'filter 0.2s',
  fontWeight: 500,

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '&:focus': {
    boxShadow: `0 0 0 2px rgb(256 256 256 / .9)`,
  },

  '@mobile': {
    padding: '0 $4',
  },

  variants: {
    color: {
      blue: {
        bg: '$blue-ligth',
        color: '$text-white',
      },

      green: {
        bg: '$green',
        color: '$text-white',
      },
    },
  },

  defaultVariants: {
    color: 'blue',
  },
});

export const CloseButton = styled('button', {
  display: 'grid',
  placeItems: 'center',
  background: 'unset',

  position: 'absolute',
  top: 16,
  right: 16,

  color: '$text-title',
  borderRadius: '$full',
  boxSize: '$6',

  // '&:hover': { backgroundColor: violet.violet4 },
  // '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export const FormGroup = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  mt: '$8',
});

export const InputGroup = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$2',
});

export const RadioBox = styled('button', {
  $$activeColor: '#ccc',

  height: '$16',
  border: '#D7D7D7 $borderWidths$medium solid',
  borderRadius: '$sm',
  display: 'flex',
  fontSize: '$md',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$text-title',
  gap: '$4',
  transition: 'border-color .2s, background-color .2s',

  '&:hover': {
    borderColor: `${darken(0.1, '#D7D7D7')}`,
  },

  variants: {
    active: {
      true: {
        bg: '$$activeColor',
        border: '$$activeColor',
      },
    },
  },
});

export const InputField = styled('input', {
  width: '100%',
  padding: '0 $6',
  height: '$16',
  borderRadius: '$sm',
  border: '#D7D7D7 $borderWidths$thin solid',
  background: '#E7E9EE',
  fontSize: '$md',
  color: '$text-title',

  '&::placeholder': {
    color: '$text-body',
  },
});

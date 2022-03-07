import { CSS, keyframes, styled } from '@styles/stitches';
import * as DialogPrimitive from '@radix-ui/react-alert-dialog';
import type { AlertDialogContentProps } from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgb(0 0 0 / 0.6)',
  position: 'fixed',
  inset: 0,

  '@motion': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  $$maxWidth: '576px',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: '$shape',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  width: '90vw',
  maxWidth: '$$maxWidth',
  maxHeight: '85vh',
  padding: '$12',

  '@motion': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '@tablet': {
    padding: '$8',
  },

  '&:focus': { outline: 'none' },
});

const StyledTitle = styled(DialogPrimitive.Title, {
  color: '$text-title',
  fontSize: '$2xl',
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '$2 0 $5',
  color: '$text-body',
  fontSize: '$sm',
  lineHeight: '$tall',
});

type ContentProps = {
  children: React.ReactNode;
  css: CSS;
} & DialogPrimitive.AlertDialogContentProps;

function Content({ children, ...props }: ContentProps) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalAction = DialogPrimitive.Action;
export const ModalClose = DialogPrimitive.Cancel;
export const ModalContent = Content;
export const ModalTitle = StyledTitle;
export const ModalDescription = StyledDescription;

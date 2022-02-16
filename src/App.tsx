import { LogoIcon } from '@assets/icons';
import { styled } from '@styles/stitches.config';

export const Heading = styled('h1', {
  fontSize: '$8',
  color: '$heading',
});

export function App() {
  return (
    <>
      <LogoIcon />
      <Heading>DT Money</Heading>
    </>
  );
}

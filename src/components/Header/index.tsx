import { LogoIcon } from '@assets/icons';
import { NewTransactionModal } from '@components/NewTransactionModal';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <LogoIcon />

        <NewTransactionModal />
      </S.Wrapper>
    </S.Container>
  );
}

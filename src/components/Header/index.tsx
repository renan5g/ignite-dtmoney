import { LogoIcon } from '@assets/icons';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <LogoIcon />

        <S.AddButton>Nova Transação</S.AddButton>
      </S.Wrapper>
    </S.Container>
  );
}

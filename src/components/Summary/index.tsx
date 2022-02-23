import { IncomeIcon, OutcomeIcon, TotalIcon } from '@assets/icons';
import * as S from './styles';

export function Summary() {
  return (
    <S.Container scroll={{ '@mobile': 'true' }}>
      <S.CardWrapper>
        <S.CardHeader>
          <p>Entradas</p>
          <IncomeIcon />
        </S.CardHeader>

        <strong>R$1.000,00</strong>
      </S.CardWrapper>

      <S.CardWrapper>
        <S.CardHeader>
          <p>Saidas</p>
          <OutcomeIcon />
        </S.CardHeader>

        <strong> - R$500,00</strong>
      </S.CardWrapper>

      <S.CardWrapper highlight>
        <S.CardHeader>
          <p>Total</p>
          <TotalIcon />
        </S.CardHeader>

        <strong>R$500,00</strong>
      </S.CardWrapper>
    </S.Container>
  );
}

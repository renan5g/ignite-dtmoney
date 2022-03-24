import { IncomeIcon, OutcomeIcon, TotalIcon } from '@assets/icons';
import { useTransactions } from '@services/transactions';
import { formatPrice } from '@shared/utils';
import * as S from './styles';

export function Summary() {
  const { data: transactions } = useTransactions();

  const summary = transactions?.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcomes += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      outcomes: 0,
      incomes: 0,
      total: 0,
    }
  );

  return (
    <S.Container scroll={{ '@mobile': 'true' }}>
      <S.CardWrapper>
        <S.CardHeader>
          <p>Entradas</p>
          <IncomeIcon />
        </S.CardHeader>

        <strong>{formatPrice(summary?.incomes || 0)}</strong>
      </S.CardWrapper>

      <S.CardWrapper>
        <S.CardHeader>
          <p>Saidas</p>
          <OutcomeIcon />
        </S.CardHeader>

        <strong> -{formatPrice(summary?.outcomes || 0)}</strong>
      </S.CardWrapper>

      <S.CardWrapper highlight>
        <S.CardHeader>
          <p>Total</p>
          <TotalIcon />
        </S.CardHeader>

        <strong>{formatPrice(summary?.total || 0)}</strong>
      </S.CardWrapper>
    </S.Container>
  );
}

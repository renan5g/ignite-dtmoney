import { IncomeIcon, OutcomeIcon, TotalIcon } from '@assets/icons';
import { useTransactions } from '@hooks/useTransactions';
import { formatPrice } from '@shared/utils';
import { useMemo } from 'react';
import * as S from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions]);

  return (
    <S.Container scroll={{ '@mobile': 'true' }}>
      <S.CardWrapper>
        <S.CardHeader>
          <p>Entradas</p>
          <IncomeIcon />
        </S.CardHeader>

        <strong>{formatPrice(summary.incomes)}</strong>
      </S.CardWrapper>

      <S.CardWrapper>
        <S.CardHeader>
          <p>Saidas</p>
          <OutcomeIcon />
        </S.CardHeader>

        <strong> -{formatPrice(summary.outcomes)}</strong>
      </S.CardWrapper>

      <S.CardWrapper highlight>
        <S.CardHeader>
          <p>Total</p>
          <TotalIcon />
        </S.CardHeader>

        <strong>{formatPrice(summary.total)}</strong>
      </S.CardWrapper>
    </S.Container>
  );
}

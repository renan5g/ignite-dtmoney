import { useTransactions } from '@hooks/useTransactions';
import { formatDate, formatPrice } from '@shared/utils';

import * as S from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <S.Transactions>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <S.Td>{transaction.title}</S.Td>
              <S.Td type={transaction.type}>
                {formatPrice(transaction.amount)}
              </S.Td>
              <S.Td>{transaction.category}</S.Td>
              <S.Td>{formatDate(new Date(transaction.createdAt))}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.Transactions>
    </S.Container>
  );
}

import { useEffect } from 'react';
import { api } from '@lib/api';

import * as S from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data));
  }, []);

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
          <tr>
            <S.Td>Desenvolvimento de Website</S.Td>
            <S.Td type="input">R$1200,00</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>23/03/2022</S.Td>
          </tr>
          <tr>
            <S.Td>Aluguel</S.Td>
            <S.Td type="output"> - R$1200,00</S.Td>
            <S.Td>Aluguel</S.Td>
            <S.Td>23/03/2022</S.Td>
          </tr>
        </tbody>
      </S.Transactions>
    </S.Container>
  );
}

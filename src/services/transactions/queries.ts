import { http } from '@services/global';
import { QueryOptions, Transaction } from '@shared/types';
import { useQuery } from 'react-query';
import { createUseTransactionsKey } from './keys';

export async function getAllTransactions(page = 1, per_page = 10) {
  const { data } = await http.get<Transaction.GetAllResponse>('/transactions');
  return data.transactions;
}

export function useTransactions(
  page?: number,
  per_page?: number,
  options?: QueryOptions<Transaction.Model[]>
) {
  return useQuery(
    createUseTransactionsKey(page),
    () => getAllTransactions(page, per_page),
    options
  );
}

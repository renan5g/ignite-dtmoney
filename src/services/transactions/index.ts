import { queryClient } from '@services/global/query-client';
import { Transaction } from '@shared/types';
import { AxiosError } from 'axios';
import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { createUseTransactionsKey } from './keys';
import { getAllTransactions, saveTransaction } from './service';

export function useTransactions(
  options?: UseQueryOptions<Transaction.Model[], AxiosError>
) {
  return useQuery(createUseTransactionsKey(), getAllTransactions, options);
}

export function useTransactionMutation() {
  return useMutation(saveTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries('transactions');
    },
  });
}

import { http, queryClient } from '@services/global';
import { MutationOptions, Transaction } from '@shared/types';
import { useMutation } from 'react-query';
import { TRANSACTIONS_KEY } from './keys';

export async function saveTransaction(input: Transaction.CreateInput) {
  const newTransaction = { ...input, createdAt: new Date() };

  const { data } = await http.post<Transaction.CreateResponse>(
    '/transactions',
    newTransaction
  );

  return data.transaction;
}

export function useTransactionMutation(
  options?: MutationOptions<Transaction.Model, Transaction.CreateInput>
) {
  return useMutation(saveTransaction, {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries(TRANSACTIONS_KEY);
    },
  });
}

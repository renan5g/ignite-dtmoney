import { http } from '@services/global/http';
import { Transaction } from '@shared/types';

async function getAllTransactions() {
  const { data } = await http.get<Transaction.GetAllResponse>('/transactions');
  return data.transactions;
}

async function saveTransaction(input: Transaction.CreateInput) {
  const { data } = await http.post<Transaction.CreateResponse>(
    '/transactions',
    {
      ...input,
      createdAt: new Date(),
    }
  );

  return data.transaction;
}

export { getAllTransactions, saveTransaction };

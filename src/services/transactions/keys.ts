import { QueryKey } from 'react-query';

export const TRANSACTIONS_KEY = 'transactions';

export const createUseTransactionsKey = (page = 1): QueryKey => [
  TRANSACTIONS_KEY,
  page,
];

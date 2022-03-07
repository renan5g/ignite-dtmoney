import { createContext, useContext, useEffect, useState } from 'react';
import {
  CreateTransactionInput,
  CreateTransactionOutput,
  TransactionModel,
  TransactionsResponse,
} from '@shared/types';
import { api } from '@lib/api';

type ProviderProps = {
  children: React.ReactNode;
};

type ContextData = {
  transactions: TransactionModel[];
  createTransaction: (input: CreateTransactionInput) => Promise<void>;
};

const Context = createContext<ContextData>({} as ContextData);

function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);

  useEffect(() => {
    api
      .get<TransactionsResponse>('/transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(input: CreateTransactionInput) {
    const {
      data: { transaction },
    } = await api.post<CreateTransactionOutput>('/transactions', {
      ...input,
      createdAt: new Date(),
    });

    setTransactions((old) => [...old, transaction]);
  }

  return (
    <Context.Provider value={{ transactions, createTransaction }}>
      {children}
    </Context.Provider>
  );
}

const useTransactions = () => useContext(Context);

export { TransactionsProvider, useTransactions };

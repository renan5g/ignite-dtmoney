export type TransactionModel = {
  id: number;
  title: string;
  type: 'income' | 'outcome';
  amount: number;
  category: string;
  createdAt: string;
};

export type CreateTransactionInput = Omit<TransactionModel, 'id' | 'createdAt'>;
export type CreateTransactionOutput = { transaction: TransactionModel };

export type TransactionsResponse = {
  transactions: TransactionModel[];
};

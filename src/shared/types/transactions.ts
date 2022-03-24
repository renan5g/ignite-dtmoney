export namespace Transaction {
  export type Model = {
    id: number;
    title: string;
    type: 'income' | 'outcome';
    amount: number;
    category: string;
    createdAt: string;
  };

  export type GetAllResponse = {
    transactions: Model[];
  };

  export type CreateInput = Omit<Model, 'id' | 'createdAt'>;

  export type CreateResponse = {
    transaction: Model;
  };
}

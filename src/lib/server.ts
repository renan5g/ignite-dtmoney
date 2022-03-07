import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'income',
          amount: 2000,
          category: 'Dev',
          createdAt: new Date('2022-03-04 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'outcome',
          amount: 1100,
          category: 'Casa',
          createdAt: new Date('2022-02-04 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

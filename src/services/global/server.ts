import { transactions } from '@shared/data';
import { createServer, Model } from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      transaction: Model,
    },

    fixtures: {
      transactions,
    },

    seeds(server) {
      server.loadFixtures();
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/transactions');
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      });
    },
  });

  return server;
}

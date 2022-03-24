import { Dashboard } from '@components/Dashboard';
import { Header } from '@components/Header';
import { queryClient } from '@services/global/query-client';
import { makeServer } from '@services/global/server';
import { globalStyles } from '@styles/global';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

makeServer();

export function App() {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Dashboard />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

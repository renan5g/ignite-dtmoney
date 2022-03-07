import { globalStyles } from '@styles/global';

import { TransactionsProvider } from '@hooks/useTransactions';

import { Header } from '@components/Header';
import { Dashboard } from '@components/Dashboard';

export function App() {
  globalStyles();

  return (
    <TransactionsProvider>
      <Header />
      <Dashboard />
    </TransactionsProvider>
  );
}

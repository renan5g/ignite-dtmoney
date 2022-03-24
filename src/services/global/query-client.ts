import { QueryClient } from 'react-query';
import { http } from './http';

const defaultQueryFn = async ({ queryKey }: { queryKey: any }) => {
  const { data } = await http.get(`${queryKey[0]}`);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

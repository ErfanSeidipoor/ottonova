import { QueryClient, QueryClientProvider } from 'react-query';

interface IQueryProvider {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const QueryProvider: React.FC<IQueryProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

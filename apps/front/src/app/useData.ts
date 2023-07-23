import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getCities } from '../services';

export const useData = () => {
  const { isLoading, error, data } = useQuery('repoData', () => getCities);

  return {};
};

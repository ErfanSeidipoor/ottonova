import { QueryProvider } from './providers/query-provider';
import { MainPage } from './pages/main';
import { Container } from '@mui/material';

export const App = () => {
  return (
    <QueryProvider>
      <Container>
        <MainPage />
      </Container>
    </QueryProvider>
  );
};

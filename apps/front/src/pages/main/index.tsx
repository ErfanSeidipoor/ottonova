import { Button, Stack, Typography, CircularProgress } from '@mui/material';
import { useData } from './useData';
import { CityCard } from '../../components';

export const MainPage = () => {
  const { cities, error, onShowMore, showMore, isFetching } = useData();

  if (error) {
    return (
      <Typography variant="h6" color={'error'}>
        {error}
      </Typography>
    );
  }

  const renderCities = () => (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      justifyContent={'center'}
      useFlexGap
      flexWrap="wrap"
    >
      {cities.map((city) => (
        <CityCard key={city.getName()} city={city} />
      ))}
    </Stack>
  );

  const renderLoading = () => {
    if (isFetching && !cities.length) {
      return (
        <Stack
          data-testid="main-page-loading-skeleton"
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          justifyContent={'center'}
          useFlexGap
          flexWrap="wrap"
        >
          <CityCard loading />
          <CityCard loading />
          <CityCard loading />
        </Stack>
      );
    }
  };

  const renderShowMore = () => {
    if (!showMore || !cities.length) return;

    if (isFetching) return <CircularProgress />;

    return <Button onClick={onShowMore}>{'Show More'}</Button>;
  };

  return (
    <Stack
      direction="column"
      justifyContent={'center'}
      gap={4}
      alignItems={'center'}
    >
      <Typography variant="h4" component={'h1'} m={2} textAlign={'center'}>
        {'Top Cities to Live in The World'}

      </Typography>
      {renderLoading()}
      {renderCities()}
      {renderShowMore()}
    </Stack>
  );
};

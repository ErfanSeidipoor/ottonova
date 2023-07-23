import { useQuery } from 'react-query';
import { getCities } from '../../services';
import { useState } from 'react';
import { GetListOfCitiesRequest } from '@ottonova/dto';
import { CityModel, Meta } from '../../models';

export const useData = () => {
  const [query, setQuery] = useState<GetListOfCitiesRequest>({
    limit: 3,
    page: 1,
  });

  const [cities, setCities] = useState<CityModel[]>([]);
  const [meta, setMeta] = useState<Meta>();

  const handleGetCities = (query: GetListOfCitiesRequest) => async () => {
    await sleep();
    return await getCities(query);
  };

  const { isLoading, error, isFetching } = useQuery(
    ['cities', query],
    handleGetCities(query),
    {
      retryOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setMeta(data.getMeta());
        if (data.getMeta().isFirstPage()) {
          setCities(data.getModels());
        } else {
          setCities([...cities, ...data.getModels()]);
        }
      },
    }
  );

  const onShowMore = () => {
    setQuery((query) => ({ ...query, page: meta?.getNextpage() }));
  };

  const showMore = meta?.getNextpage() !== 1;

  return {
    error,
    isLoading,
    isFetching,
    cities,
    onShowMore,
    showMore,
  };
};

const sleep = (delay?: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay || 2000);
  });
};

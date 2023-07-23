import ClientApi from './clientApi';
import { GetListOfCitiesRequest, IPaginate } from '@ottonova/dto';
import { CityModel, ICityModel, Paginate } from '../models';

const axios = new ClientApi();

export const getCities = (
  query: GetListOfCitiesRequest
): Promise<Paginate<ICityModel, CityModel>> =>
  axios.http
    .get<IPaginate<ICityModel>>('/city', { params: query })
    .then((response) => new Paginate(CityModel, response.data));

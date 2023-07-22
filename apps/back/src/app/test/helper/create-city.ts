import { City } from '@ottonova/entity';
import { faker } from '@faker-js/faker';
import { DB } from './DB';

export const createCity = async (): Promise<City> => {
  const cityRepo = (await DB.getAppDataSource()).getRepository(City);

  const city = await cityRepo
    .create({
      continent: faker.word.noun({ length: 50 }),
      country: faker.location.country(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      name_native: faker.word.noun({ length: 50 }),
      name: faker.word.noun({ length: 50 }),
      founded: faker.date.past().getFullYear(),
    })
    .save();

  return city;
};

export const createMultipleCities = async (count: number): Promise<City[]> => {
  const results: Promise<City>[] = [];

  for (let index = 0; index < count; index++) {
    results.push(createCity());
  }

  return await Promise.all(results);
};

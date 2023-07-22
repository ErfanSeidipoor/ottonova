import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed1689947333736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const city of cities) {
      const {
        landmarks,
        continent,
        country,
        founded,
        latitude,
        longitude,
        name,
        name_native,
        population,
      } = city;

      await queryRunner.manager.query(`
        INSERT INTO 
            public.city(      name,      name_native,      country,      continent,     latitude,    longitude,    population,    founded )
            VALUES     ( '${name}', '${name_native}', '${country}', '${continent}',  ${latitude}, ${longitude}, ${population},  ${founded});
      `);

      const [{ id: cityId }] = await queryRunner.manager.query(
        `SELECT id FROM public.city where name='${name}';`
      );

      for (const landmark of landmarks) {
        await queryRunner.query(
          `INSERT INTO  public.landmark(name,city_id) VALUES ($1, $2)`,
          [landmark, cityId]
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (const city of cities) {
      const { name } = city;

      const cityEntities = await queryRunner.manager.query(
        `SELECT id FROM public.city where name='${city.name}';`
      );

      if (cityEntities.length) {
        const [cityEntity] = cityEntities;
        await queryRunner.manager.query(
          `DELETE FROM public.city WHERE id='${cityEntity.id}';`
        );

        await queryRunner.manager.query(
          `DELETE FROM public.landmark WHERE city_id='${cityEntity.id}';`
        );
      }
    }
  }
}

const cities = [
  {
    name: 'Sydney',
    name_native: 'Sydney',
    country: 'Australia',
    continent: 'Australia',
    latitude: -33.865143,
    longitude: 151.2099,
    population: 5312000,
    founded: 1788,
    landmarks: [
      'Sydney Opera House',
      'Sydney Harbour Bridge',
      'Queen Victoria Building',
    ],
  },
  {
    name: 'New York City',
    name_native: 'New York City',
    country: 'USA',
    continent: 'North America',
    latitude: 40.73061,
    longitude: -73.935242,
    population: 8419000,
    founded: 1624,
    landmarks: [
      'Chrysler Building',
      'Brooklyn Bridge',
      'Madison Square Garden',
    ],
  },
  {
    name: 'Madrid',
    name_native: 'Madrid',
    country: 'Spain',
    continent: 'Europe',
    latitude: 40.416775,
    longitude: -3.70379,
    population: 3223000,
    founded: 1083,
    landmarks: ['Royal Palace', 'Plaza Mayor', 'Plaza de Cibeles'],
  },
  {
    name: 'Moscow',
    name_native: 'Москва',
    country: 'Russia',
    continent: 'Europe',
    latitude: 55.751244,
    longitude: 37.618423,
    population: 11920000,
    founded: 1147,
    landmarks: ["Saint Basil's Cathedral", 'Kremlin', 'Bolshoi Theatre'],
  },
  {
    name: 'Tokyo',
    name_native: '東京',
    country: 'Japan',
    continent: 'Asia',
    latitude: 35.652832,
    longitude: 139.839478,
    population: 13960000,
    founded: 1603,
    landmarks: ['Meji Shrine', 'Asakusa', 'Tokyo Skytree'],
  },
  {
    name: 'Lagos',
    name_native: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    latitude: 6.465422,
    longitude: 3.406448,
    population: 14800000,
    founded: 1914,
    landmarks: [
      'Iga Idungaran',
      'Freedom Park',
      'The Cathedral Church of Christ',
    ],
  },
  {
    name: 'Sao Paulo',
    name_native: 'São Paulo',
    country: 'Brazil',
    continent: 'South America',
    latitude: -23.533773,
    longitude: -46.62529,
    population: 12330000,
    founded: 1554,
    landmarks: ['Mosteiro De Sao Bento', 'Italian Building', 'Farol Santander'],
  },
  {
    name: 'Munich',
    name_native: 'München',
    country: 'Germany',
    continent: 'Europe',
    latitude: 48.137154,
    longitude: 11.576124,
    population: 1472000,
    founded: 1158,
    landmarks: ['Bavaria statue', 'Marienplatz', 'ottonova office'],
  },
];

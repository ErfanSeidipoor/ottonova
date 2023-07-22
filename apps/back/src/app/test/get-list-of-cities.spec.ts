import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';
import { createMultipleCities } from './helper/create-city';
import { DB } from './helper/DB';
import { City } from '@ottonova/entity';

const url = '/city';

describe('/api/city: Controller (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    await DB.clearDatabase();
  });

  describe('GET /city gettting list of city', () => {
    it('should return 200', async () => {
      const count = 10;
      const limit = 6;
      const page = 1;

      await createMultipleCities(count);

      const response = await request(app.getHttpServer()).get(
        url + `?page=${page}&limit=${limit}`
      );

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('meta');
      expect(response.body.meta.totalItems).toBe(count);
      expect(response.body.meta.itemsPerPage).toBe(limit);
      expect(response.body.meta.currentPage).toBe(page);

      expect(response.body.items.length).toBe(limit);

      for (const columnName of await DB.getColumns(City)) {
        expect(response.body.items[0]).toHaveProperty(columnName);
      }
    });
  });
});

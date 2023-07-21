import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../app.module';

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

  describe('GET /city gettting list of city', () => {
    it('should return 201', async () => {
      const response = await request(app.getHttpServer()).get(url).expect(200);

      expect(response.body).toHaveLength(0);
    });
  });
});

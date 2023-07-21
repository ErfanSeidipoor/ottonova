import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetListOfCitiesRequest } from '@ottonova/dto';
import { City } from '@ottonova/entity';
import { Repository } from 'typeorm';
import { IPaginate, paginate } from '../helper';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(City)
    private cityRepo: Repository<City>
  ) {}

  async get(query: GetListOfCitiesRequest): Promise<IPaginate<City>> {
    const { limit, page } = query;

    const queryBuilder = await this.cityRepo
      .createQueryBuilder('city')
      .leftJoinAndSelect('city.landmarks', 'landmarks');

    return paginate<City>(queryBuilder, limit, page);
  }
}

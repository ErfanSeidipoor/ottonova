import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '@ottonova/entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(City)
    private cityRepo: Repository<City>
  ) {}

  get(): Promise<City[]> {
    return this.cityRepo.find({ relations: ['landmarks'] });
  }
}

import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { GetListOfCitiesRequest } from '@ottonova/dto';

@Controller('/city')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query() query: GetListOfCitiesRequest) {
    return this.appService.get(query);
  }
}

import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Max } from 'class-validator';

export class GetListOfCitiesRequest {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  @Max(50)
  limit?: number;
}

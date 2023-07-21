import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { City } from './city.entity';

@Index('landmark_pkey', ['id'], { unique: true })
@Entity('landmark', { schema: 'public' })
export class Landmark extends BaseModel {
  @Column('varchar', {
    name: 'name',
    nullable: false,
    length: 50,
    unique: false,
  })
  name: string;

  @ManyToOne(() => City, (city) => city.landmarks, {
    nullable: false,
  })
  @JoinColumn({
    name: 'city_id',
    referencedColumnName: 'id',
  })
  city: City;
}

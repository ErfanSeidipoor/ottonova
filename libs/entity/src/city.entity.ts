import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Landmark } from './landmark.entity';

@Index('city_pkey', ['id'], { unique: true })
@Entity('city', { schema: 'public' })
export class City extends BaseModel {
  @Column('varchar', {
    name: 'name',
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Column('varchar', {
    name: 'name_native',
    nullable: true,
    length: 50,
    unique: false,
  })
  name_native: string;

  @Column('varchar', {
    name: 'country',
    nullable: true,
    length: 50,
    unique: false,
  })
  country: string;

  @Column('varchar', {
    name: 'continent',
    nullable: true,
    length: 50,
    unique: false,
  })
  continent: string;

  @Column('float', { name: 'latitude', nullable: true })
  latitude: number;

  @Column('float', { name: 'longitude', nullable: true })
  longitude: number;

  @Column('integer', { name: 'population', nullable: true })
  population: number;

  @Column('integer', { name: 'founded', nullable: true })
  founded: number;

  @OneToMany(() => Landmark, (landmark) => landmark.city, {
    cascade: true,
  })
  landmarks: Landmark[];
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class City1689947295458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'city',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamptz',
            isNullable: true,
            default: null,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'name_native',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'country',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'continent',
            type: 'varchar',
            length: '50',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'latitude',
            type: 'float',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'longitude',
            type: 'float',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'population',
            type: 'integer',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'founded',
            type: 'integer',
            isUnique: false,
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}

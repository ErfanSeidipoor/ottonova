import { BaseEntity, DataSource, EntityTarget } from 'typeorm';
import { Landmark, City, entities } from '@ottonova/entity';

console.log({
  type: 'postgres',
  password: process.env['TYPEORM_PASSWORD'],
  host: process.env['TYPEORM_HOST'],
  username: process.env['TYPEORM_USERNAME'],
  database: process.env['TYPEORM_DATABASE'],
  synchronize: true,
  port: Number(process.env['TYPEORM_PORT']),
});

export class DB {
  static appDataSource: DataSource | null;

  static async getAppDataSource() {
    if (!DB.appDataSource) {
      DB.appDataSource = new DataSource({
        type: 'postgres',
        password: process.env['TYPEORM_PASSWORD'],
        host: process.env['TYPEORM_HOST'],
        username: process.env['TYPEORM_USERNAME'],
        database: process.env['TYPEORM_DATABASE'],
        synchronize: true,
        port: Number(process.env['TYPEORM_PORT']),
        entities,
      });
      await DB.appDataSource.initialize();
    }
    return DB.appDataSource;
  }

  static async clearDatabase() {
    (await DB.getAppDataSource()).getRepository(City).delete({});
    (await DB.getAppDataSource()).getRepository(Landmark).delete({});
  }

  static async getColumns(target: EntityTarget<BaseEntity>): Promise<string[]> {
    return Object.keys(
      (await DB.getAppDataSource()).getMetadata(target).propertiesMap
    );
  }
}

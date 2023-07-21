import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvEnum } from '../enum/env.enum';
import { entities } from '@ottonova/entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>(EnvEnum.TYPEORM_HOST),
        username: config.get<string>(EnvEnum.TYPEORM_USERNAME),
        password: config.get<string>(EnvEnum.TYPEORM_PASSWORD),
        database: config.get<string>(EnvEnum.TYPEORM_DATABASE),
        port: Number(config.get<string>(EnvEnum.TYPEORM_PORT)),
        synchronize: !!config.get<string>(EnvEnum.TYPEORM_PORT),
        entities,
      }),
    }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

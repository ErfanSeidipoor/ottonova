import { INestApplication, ValidationPipe } from "@nestjs/common";
import { urlencoded, json } from "express";

export const setupApp = (app: INestApplication): void => {
  app.use(json({ limit: "50mb" }));
  app.enableCors();
  app.use(urlencoded({ extended: true, limit: "50mb" }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidUnknownValues: true,
    })
  );
};

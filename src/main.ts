import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initWinston } from './api_logger';

async function bootstrap() {
  initWinston(process.env.API_Name)

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //initialize Swagger
  const config = new DocumentBuilder()
  .setTitle('Users API')
  .setDescription('The Users API description')
  .setVersion('1.0')
  .addTag('Users')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/', app, document);

  await app.listen(3000);
}

bootstrap()

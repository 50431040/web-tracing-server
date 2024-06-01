import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'prod';
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const msg = isProduction
          ? 'Invalid params!'
          : Object.values(errors[0].constraints)[0];
        return new BadRequestException({
          message: msg,
          code: HttpStatus.BAD_REQUEST,
        });
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();

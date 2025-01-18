import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita a validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Remove propriedades não decoradas
    forbidNonWhitelisted: true,  // Lança erro se enviar propriedades extras
    transform: true         // Transforma os dados recebidos para o tipo correto
  }));

  await app.listen(3000);
}
bootstrap();
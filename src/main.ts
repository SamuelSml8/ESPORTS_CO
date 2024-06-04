import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
/* Swagger implementation in main.ts to project documentation */
  const config = new DocumentBuilder()
    .setTitle('ESPORTS API')
    .setDescription('Company dedicated to the management of video game (esports) tournaments in Colombia, has the need to implement an API for tournament management. | Tournament Van Rossum')
    .setVersion('1.0')
    .addTag('eSports')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function main() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000, () => {
    console.log('\nServer is running on http://localhost:3000');
  });
}

main();

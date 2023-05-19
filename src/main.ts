import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HealthController } from './health/health.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  await app.listen(3000, '0.0.0.0');
}
bootstrap().finally(() => {
  console.table(new HealthController().checkHealth());
});

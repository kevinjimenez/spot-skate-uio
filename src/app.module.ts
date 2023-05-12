import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { HealthModule } from './health/health.module';
import { SpotModule } from './spot/spot.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
    HealthModule,
    SpotModule,
    LocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { HealthModule } from './health/health.module';
import { LocationsModule } from './locations/locations.module';
import { SpotsModule } from './spots/spots.module';
import pino from 'pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        // customProps: (req, res) => ({
        //   context: 'HTTP',
        // }),
        messageKey: 'message',
        transport: {
          target: 'pino-pretty',
          options: {
            messageKey: 'message',
            singleLine: true,
            translateTime: 'yyyy-dd-mm, h:MM:ss TT',
          },
        },
        // stream: pino.destination({
        //   dest: `./my-file.log`, // omit for stdout
        //   sync: true,
        //   // minLength: 4096, // Buffer before writing
        //   // sync: true, // Asynchronous logging
        // }),
      },
    }),
    HealthModule,
    LocationsModule,
    SpotsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

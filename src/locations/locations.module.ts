import { Module } from '@nestjs/common';
import { LocationsService } from './services/locations.service';
import { LocationsController } from './controllers/locations.controller';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}

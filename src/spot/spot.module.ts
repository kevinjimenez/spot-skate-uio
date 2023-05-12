import { Module } from '@nestjs/common';
import { AddressController } from './controllers/address.controller';
import { SpotController } from './controllers/spot.controller';
import { AddressService } from './services/address.service';
import { SpotService } from './services/spot.service';

@Module({
  controllers: [AddressController, SpotController],
  providers: [AddressService, SpotService]
})
export class SpotModule {}

import { Module } from '@nestjs/common';
import { SpotsService } from './services/spots.service';
import { SpotsController } from './controllers/spots.controller';

@Module({
  controllers: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}

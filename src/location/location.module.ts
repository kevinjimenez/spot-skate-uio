import { Module } from '@nestjs/common';
import { CityController } from './controllers/city.controller';
import { CountryController } from './controllers/country.controller';
import { ProvinceController } from './controllers/province.controller';
import { CityService } from './services/city.service';
import { CountryService } from './services/country.service';
import { ProvinceService } from './services/province.service';

@Module({
  controllers: [CountryController, ProvinceController, CityController],
  providers: [CityService, CountryService, ProvinceService],
})
export class LocationModule {}

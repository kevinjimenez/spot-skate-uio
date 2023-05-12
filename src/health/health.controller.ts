import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return {
      environment: process.env.NODE_ENV || 'local',
      message: 'app-monolito is up and running',
      port: process.env.PORT || '3000',
    };
  }
}

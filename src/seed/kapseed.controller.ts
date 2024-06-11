import { Controller, Post } from '@nestjs/common';
import { KapSeedService } from './kapseed.service';

@Controller('api/seed')
export class KapSeedController {
  constructor(private readonly seedService: KapSeedService) {}

  @Post()
  seed() {
    return this.seedService.seed();
  }
}

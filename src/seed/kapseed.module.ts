import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KapSeedService } from './kapseed.service';
import { KapSeedController } from './kapseed.controller';
import { KapProduct } from '../module/kapproductos/kapentities/kapProduct.entity';
import { KapGama } from '../module/kapgamma/kapentities/kapGama.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([KapProduct, KapGama]),
  ],
  controllers: [KapSeedController],
  providers: [KapSeedService],
})
export class KapSeedModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KapGamasService } from './kapgamma.service';
import { KapGamasController } from './kapgamma.controller';
import { KapGama } from './kapentities/kapGama.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KapGama])],
  controllers: [KapGamasController],
  providers: [KapGamasService],
  exports: [KapGamasService, TypeOrmModule],  // Exporta el servicio y el TypeOrmModule si es necesario
})
export class KapGamasModule {}

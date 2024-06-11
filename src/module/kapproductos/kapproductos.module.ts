import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KapProductosService } from './kapproductos.service';
import { KapProductosController } from './kapproductos.controller';
import { KapProduct } from './kapentities/kapProduct.entity';
import { KapGamasModule } from '../kapgamma/kapgamma.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([KapProduct]),
    KapGamasModule,
  ],
  controllers: [KapProductosController],
  providers: [KapProductosService],
  exports: [KapProductosService],  // Exporta el servicio si es necesario
})
export class KapProductosModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { KapGamasService } from './kapgamma.service';

@Controller('api/gama')
export class KapGamasController {
  constructor(private readonly gamasService: KapGamasService) {}

  @Get(':nombre')
  findByName(@Param('nombre') nombre: string) {
    return this.gamasService.findByName(nombre);
  }
}

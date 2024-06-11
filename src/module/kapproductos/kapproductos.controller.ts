import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { KapProductosService } from './kapproductos.service';
import { KapCreateProductDto } from './kapdto/kapproducto.dto';

@Controller('api/productos')
export class KapProductosController {
  constructor(private readonly productsService: KapProductosService) {}

  @Post()
  create(@Body() createProductDto: KapCreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}

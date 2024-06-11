import { PartialType } from '@nestjs/mapped-types';
import { KapCreateProductDto } from './kapproducto.dto';

export class UpdateProductoDto extends PartialType(KapCreateProductDto) {}
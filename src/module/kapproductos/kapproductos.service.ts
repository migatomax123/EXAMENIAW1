import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KapCreateProductDto } from './kapdto/kapproducto.dto';
import { KapProduct } from './kapentities/kapProduct.entity';
import { KapGama } from '../kapgamma/kapentities/kapGama.entity';

@Injectable()
export class KapProductosService {
  constructor(
    @InjectRepository(KapProduct)
    private productsRepository: Repository<KapProduct>,
    @InjectRepository(KapGama)
    private gamasRepository: Repository<KapGama>,
  ) {}

  async create(createProductDto: KapCreateProductDto): Promise<KapProduct> {
    const gama = await this.gamasRepository.findOne({ where: { id: createProductDto.codgama } });
    if (!gama) {
      throw new Error('Gama not found');
    }
    const product = this.productsRepository.create({
      ...createProductDto,
      codgama: gama,
    });
    return this.productsRepository.save(product);
  }

  findAll(): Promise<KapProduct[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<KapProduct> {
    return this.productsRepository.findOne({ where: { codigo: id }, relations: ['codgama'] });
  }
}

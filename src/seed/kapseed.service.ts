import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KapProduct } from '../module/kapproductos/kapentities/kapProduct.entity';
import { KapGama } from '../module/kapgamma/kapentities/kapGama.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class KapSeedService {
  constructor(
    @InjectRepository(KapProduct)
    private productsRepository: Repository<KapProduct>,
    @InjectRepository(KapGama)
    private gamasRepository: Repository<KapGama>,
  ) {}

  async seed() {
    const gamasPath = path.join(__dirname, 'data', 'gamas.json');
    const productosPath = path.join(__dirname, 'data', 'productos.json');

    const gamas = JSON.parse(fs.readFileSync(gamasPath, 'utf8'));
    const productos = JSON.parse(fs.readFileSync(productosPath, 'utf8'));

    for (const gamaData of gamas) {
      const gama = this.gamasRepository.create(gamaData);
      await this.gamasRepository.save(gama);
    }

    for (const productData of productos) {
      const gama = await this.gamasRepository.findOne({ where: { nombre: productData.codgama } });
      if (gama) {
        const product = this.productsRepository.create({
          ...productData,
          codgama: gama,
        });
        await this.productsRepository.save(product);
      }
    }

    return { message: 'Seed completed' };
  }
}

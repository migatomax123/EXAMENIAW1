import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KapGama } from './kapentities/kapGama.entity';

@Injectable()
export class KapGamasService {
  constructor(
    @InjectRepository(KapGama)
    private gamasRepository: Repository<KapGama>,
  ) {}

  findByName(nombre: string): Promise<KapGama> {
    return this.gamasRepository.findOne({
      where: { nombre },
      relations: ['products'],
    });
  }
}

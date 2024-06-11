import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { KapGama } from '../../kapgamma/kapentities/kapGama.entity';

@Entity()
export class KapProduct {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column()
  proveedor: string;

  @Column('int')
  stock: number;

  @Column()
  poste: string;

  @Column()
  imagen: string;

  @Column('decimal')
  pvp: number;

  @ManyToOne(() => KapGama, (gama) => gama.products)
  codgama: KapGama;
}

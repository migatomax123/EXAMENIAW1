import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { KapProduct } from '../../kapproductos/kapentities/kapProduct.entity';

@Entity()
export class KapGama {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column()
  imagen: string;

  @OneToMany(() => KapProduct, (product) => product.codgama)
  products: KapProduct[];
}

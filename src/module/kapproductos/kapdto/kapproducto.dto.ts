export class KapCreateProductDto {
    codigo: number;
    nombre: string;
    descripcion: string;
    proveedor: string;
    stock: number;
    poste: string;
    imagen: string;
    pvp: number;
    codgama: number; // ID of the related gama
  }
  
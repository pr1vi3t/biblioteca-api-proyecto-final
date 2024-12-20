import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Libro } from './libro';
 
@Entity('categoria')
export class Categoria {
 
  @PrimaryGeneratedColumn({ name: 'id_categoria' })
  idCategoria: number;
 
  @Column({ name: 'descripcion' })
  descripcion: string;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: number;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(()=>Libro, (libro)=>libro.categoria)
  cetegorias: Categoria[];
}
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
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
}
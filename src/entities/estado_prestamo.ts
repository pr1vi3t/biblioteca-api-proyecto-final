import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Prestamo } from './prestamo';
 
@Entity('estados_prestamo')
export class EstadoPrestamo {
 
  @PrimaryGeneratedColumn({ name: 'id_estado_prestamo' })
  idEstadoPrestamo: number;
 
  @Column({ name: 'descripcion' })
  descripcion: string;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: number;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(()=>Prestamo, (prestamo)=>prestamo.estadoPrestamo)
  estadosPrestamo: EstadoPrestamo[];
}
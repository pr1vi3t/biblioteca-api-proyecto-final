import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Libro } from './libro';
import { Prestamo } from './prestamo';

@Entity('ejemplares')
export class Ejemplar {

  @PrimaryGeneratedColumn({ name: 'id_ejemplar' })
  idEjemplar: number;

  @ManyToOne(() => Libro, (libro) => libro.libros)
  @JoinColumn({ name: 'id_libro' })
  libro: Libro;

  @Column({ name: 'numero' })
  numero: number;

  @Column({ name: 'estado' })
  estado: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.ejemplar)
  ejemplares: Ejemplar[];
}
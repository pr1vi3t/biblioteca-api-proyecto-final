import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Libro } from './libro';
 
@Entity('editorial')
export class Editorial {
 
  @PrimaryGeneratedColumn({ name: 'id_editorial' })
  idEditorial: number;
 
  @Column({ name: 'nombre' })
  nombre: string;
 
  @Column({ name: 'pais_origen' })
  paisOrigen: string;
 
  @Column({ name: 'representante' })
  representante: string;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: number;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(()=>Libro, (libro)=>libro.editorial)
  editoriales: Editorial[];
}
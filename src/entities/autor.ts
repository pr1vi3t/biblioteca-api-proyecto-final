import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Libro } from './libro';
 
@Entity('autor')
export class Autor {
 
  @PrimaryGeneratedColumn({ name: 'id_autor' })
  idAutor: number;
 
  @Column({ name: 'nombres' })
  nombres: string;
 
  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;
 
  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;
 
  @CreateDateColumn({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;
 
  @Column({ name: 'nacionalidad' })
  nacionalidad: string;

  @Column({ name: 'correo_electronico' })
  correoElectronico: string;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: number;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(()=>Libro, (libro)=>libro.autor)
  autores: Autor[];
}
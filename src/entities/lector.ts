import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('lector')
export class Lector {
 
  @PrimaryGeneratedColumn({ name: 'id_lector' })
  idLector: number;
 
  @Column({ name: 'nombres' })
  nombres: string;
 
  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;
 
  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;
 
  @Column({ name: 'correo' })
  correo: string;
 
  @Column({ name: 'celular' })
  celular: string;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: number;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario';
 
@Entity('rol')
export class Rol {
 
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  idRol: number;
 
  @Column({ name: 'descripcion' })
  descripcion: string;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: string;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(()=>Usuario, (usuario)=>usuario.rol)
  roles: Rol[];
}
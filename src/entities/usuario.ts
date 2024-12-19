import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from './rol';
 
@Entity('usuario')
export class Usuario {
 
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;
 
  @Column({ name: 'nombres' })
  nombres: string;
 
  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;
 
  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;
 
  @Column({ name: 'username' })
  username: string;
 
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'correo' })
  correo: string;

  @Column({ name: 'celular' })
  celular: string;

  @ManyToOne(()=>Rol, (rol)=>rol.roles)
  @JoinColumn({name: 'id_rol'})
  rol: Rol;
 
  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: string;
 
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}
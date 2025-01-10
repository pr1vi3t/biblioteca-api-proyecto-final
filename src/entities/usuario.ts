import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from './rol';
import { Prestamo } from './prestamo';

@Entity('usuarios')
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

  @ManyToOne(() => Rol, (rol) => rol.roles)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.usuario)
  usuarios: Usuario[];
}
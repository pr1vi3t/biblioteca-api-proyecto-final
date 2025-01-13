import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ejemplar } from "./ejemplar";
import { Lector } from "./lector";
import { Usuario } from "./usuario";
import { EstadoPrestamo } from "./estado_prestamo";

@Entity('prestamos')
export class Prestamo {

    @PrimaryGeneratedColumn({ name: 'id_prestamo' })
    idPrestamo: number;
     
    @ManyToOne(()=>Ejemplar, (ejemplar)=>ejemplar.ejemplares)
    @JoinColumn({name: 'id_ejemplar'})
    ejemplar : Ejemplar;

    @ManyToOne(()=>Lector, (lector)=>lector.lectores)
    @JoinColumn({name: 'id_lector'})
    lector : Lector;

    @ManyToOne(()=>Usuario, (usuario)=>usuario.usuarios)
    @JoinColumn({name: 'id_usuario'})
    usuario : Usuario;

    @CreateDateColumn({ name: 'fecha_prestamo' })
    fechaPrestamo: Date;

    @CreateDateColumn({ name: 'fecha_devolucion' })
    fechaDevolucion: Date;

    @CreateDateColumn({ name: 'fecha_devolucion_real' })
    fechaDevolucionReal: Date;

    @Column({ name: 'estado_entregado' })
    estadoEntregado: string;
     
    @Column({ name: 'estado_recibido' })
    estadoRecibido: string;
     
    @ManyToOne(()=>EstadoPrestamo, (estados_prestamo)=>estados_prestamo.estadosPrestamo)
    @JoinColumn({name: 'id_estado_prestamo'})
    estadoPrestamo : EstadoPrestamo;
     
    @Column({ name: 'estado_auditoria'})
    estadoAuditoria: number;
 
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Editorial } from "./editorial";
import { Autor } from "./autor";
import { Categoria } from "./categoria";

@Entity('libro')
export class Libro {

    @PrimaryGeneratedColumn({ name: 'id_libro' })
    idLibro: number;
     
    @Column({ name: 'isbn' })
    isbn: string;
     
    @Column({ name: 'titulo' })
    titulo: string;
     
    @Column({ name: 'imagen_url' })
    imagenUrl: string;
     
    @Column({ name: 'edicion' })
    edicion: string;
     
    @Column({ name: 'paginas' })
    paginas: string;
    
    @ManyToOne(()=>Editorial, (editorial)=>editorial.editoriales)
    @JoinColumn({name: 'id_editorial'})
    editorial : Editorial;
    
    @ManyToOne(()=>Autor, (autor)=>autor.autores)
    @JoinColumn({name: 'id_autor'})
    autor: Autor;
    
    @ManyToOne(()=>Categoria, (categoria)=>categoria.cetegorias)
    @JoinColumn({name: 'id_categoria'})
    categoria: Categoria;
     
    @Column({ name: 'idioma'})
    idioma: string;
     
    @Column({ name: 'estado_auditoria'})
    estadoAuditoria: number;
 
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}
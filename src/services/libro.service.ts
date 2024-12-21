import { AppDataSource } from "../config/db.config";
import { Libro } from "../entities/libro";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Libro);

export const insertarLibro = async (data: Partial<Libro>): Promise<Libro> => {
    const newLibro : Libro = await repository.save(data);
    return await repository.findOne({where: {idLibro: newLibro.idLibro, editorial: {estadoAuditoria: EstadoAuditoria.ACTIVO}, 
        autor: {estadoAuditoria: EstadoAuditoria.ACTIVO}, categoria: {estadoAuditoria: EstadoAuditoria.ACTIVO}}})
    
}

export const listarLibro = async (): Promise<Libro[]>=>{
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO, editorial:{estadoAuditoria: EstadoAuditoria.ACTIVO}, autor:{estadoAuditoria:EstadoAuditoria.ACTIVO}, categoria:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['editorial','autor','categoria']
    })
}

export const obtenerLibro = async (idLibro: number) : Promise<Libro> => {
    return await repository.findOne({
        where: {idLibro, estadoAuditoria: EstadoAuditoria.ACTIVO, editorial:{estadoAuditoria: EstadoAuditoria.ACTIVO}, autor:{estadoAuditoria:EstadoAuditoria.ACTIVO}, categoria:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['editorial','autor','categoria']
    })
}

export const actualizarLibro = async (idLibro: number, data: Partial<Libro>) : Promise<Libro> => {
    await repository.update(idLibro,data);
    return obtenerLibro(idLibro);
}

export const darbajaLibro = async (idLibro: number): Promise<void> => {
    await repository.update(idLibro, { estadoAuditoria: EstadoAuditoria.INACTIVO});
}
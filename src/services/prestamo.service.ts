import { AppDataSource } from "../config/db.config";
import { Prestamo } from "../entities/prestamo";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Prestamo);

export const insertarPrestamo = async (data: Partial<Prestamo>):Promise<Prestamo> => {
    const newPrestamo: Prestamo = await repository.save(data);
    return await repository.findOne({where: {idPrestamo: newPrestamo.idPrestamo, estadoPrestamo: {estadoAuditoria: EstadoAuditoria.ACTIVO}}})
}

export const listarPrestamo = async (): Promise<Prestamo[]>=>{
    return await repository.find({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO, estadoPrestamo: {estadoAuditoria: EstadoAuditoria.ACTIVO}}, 
        relations: ['estadoPrestamo']
    })
}

export const obtenerPrestamo = async (idPrestamo: number) => {
    return await repository.findOne({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO,idPrestamo, estadoPrestamo: {estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['estadoPrestamo']
    })    
}

export const actualizarPrestamo = async (idPrestamo: number, data: Partial<Prestamo>): Promise<Prestamo> => {
    await repository.update(idPrestamo, data);
    return obtenerPrestamo(idPrestamo);
}

export const darbajaPrestamo = async (idPrestamo: number): Promise<void> => {
    await repository.update(idPrestamo, { estadoAuditoria: EstadoAuditoria.INACTIVO});
}
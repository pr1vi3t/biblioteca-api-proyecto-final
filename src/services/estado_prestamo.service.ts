import { AppDataSource } from "../config/db.config";
import { EstadoPrestamo } from "../entities/estado_prestamo";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(EstadoPrestamo);

export const insertarEstadoPrestamo = async (data: Partial<EstadoPrestamo>): Promise<EstadoPrestamo> => {
    const newEstadoPrestamo: EstadoPrestamo = await repository.save(data);
    return await repository.findOne({where: { idEstadoPrestamo: newEstadoPrestamo.idEstadoPrestamo }});  
};

export const listarEstadoPrestamo = async ():Promise<EstadoPrestamo[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }})
};

export const obtenerEstadoPrestamo = async (idEstadoPrestamo: number):Promise<EstadoPrestamo> => {
    return await repository.findOne({where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idEstadoPrestamo}})    
};

export const actualizarEstadoPrestamo = async (idEstadoPrestamo: number, data: Partial<EstadoPrestamo>): Promise<EstadoPrestamo> => {
    await repository.update(idEstadoPrestamo, data);
    return obtenerEstadoPrestamo(idEstadoPrestamo);
};

export const darBajaEstadoPrestamo = async (idEstadoPrestamo: number): Promise<void> => {
    await repository.update(idEstadoPrestamo, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};

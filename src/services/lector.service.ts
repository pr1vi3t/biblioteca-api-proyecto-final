import { AppDataSource } from "../config/db.config";
import { Lector } from "../entities/lector";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Lector);

export const insertarLector = async (data: Partial<Lector>): Promise<Lector> => {
    const newLector: Lector = await repository.save(data);
    return await repository.findOne({where: { idLector: newLector.idLector }});  
};

export const listarLector = async ():Promise<Lector[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }})
};

export const obtenerLector = async (idLector: number):Promise<Lector> => {
    return await repository.findOne({where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idLector}})    
};

export const actualizarLector = async (idLector: number, data: Partial<Lector>): Promise<Lector> => {
    await repository.update(idLector, data);
    return obtenerLector(idLector);
};

export const darBajaLector = async (idLector: number): Promise<void> => {
    await repository.update(idLector, { estadoAuditoria: EstadoAuditoria.INACTIVO});
};

import { AppDataSource } from "../config/db.config";
import { Editorial } from "../entities/editorial";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Editorial);

export const insertarEditorial = async (data: Partial<Editorial>): Promise<Editorial> => {
    const newEditorial: Editorial = await repository.save(data);
    return await repository.findOne({where: { idEditorial: newEditorial.idEditorial }});  
};

export const listarEditorial = async ():Promise<Editorial[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }})
};

export const obtenerEditorial = async (idEditorial: number):Promise<Editorial> => {
    return await repository.findOne({where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idEditorial}})    
};

export const actualizarEditorial = async (idEditorial: number, data: Partial<Editorial>): Promise<Editorial> => {
    await repository.update(idEditorial, data);
    return obtenerEditorial(idEditorial);
};

export const darBajaEditorial = async (idEditorial: number): Promise<void> => {
    await repository.update(idEditorial, { estadoAuditoria: EstadoAuditoria.INACTIVO});
};

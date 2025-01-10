import { AppDataSource } from "../config/db.config";
import { Ejemplar } from "../entities/ejemplar";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Ejemplar);

export const insertarEjemplar = async (data: Partial<Ejemplar>):Promise<Ejemplar> => {
    const newEjemplar: Ejemplar = await repository.save(data);
    return await repository.findOne({where: {idEjemplar: newEjemplar.idEjemplar, libro: {estadoAuditoria: EstadoAuditoria.ACTIVO}}})
}

export const listarEjemplar = async (): Promise<Ejemplar[]>=>{
    return await repository.find({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO, libro: {estadoAuditoria: EstadoAuditoria.ACTIVO}}, 
        relations: ['libro']
    })
}

export const obtenerEjemplar = async (idEjemplar: number) => {
    return await repository.findOne({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO,idEjemplar, libro: {estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['libro']
    })    
}

export const actualizarEjemplar = async (idEjemplar: number, data: Partial<Ejemplar>): Promise<Ejemplar> => {
    await repository.update(idEjemplar, data);
    return obtenerEjemplar(idEjemplar);
}

export const darbajaEjemplar = async (idEjemplar: number): Promise<void> => {
    await repository.update(idEjemplar, { estadoAuditoria: EstadoAuditoria.INACTIVO});
}
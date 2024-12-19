import { AppDataSource } from "../config/db.config";
import { Autor } from "../entities/autor";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Autor);

export const insertarAutor = async (data: Partial<Autor>) : Promise<Autor>=> {
    const newAutor : Autor = await repository.save(data);
    return await repository.findOne({where: {idAutor: newAutor.idAutor}});
};

export const listarAutor = async () => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO}})
};

export const obtenerAutor = async (idAutor: number) => {
    return await repository.findOne({where: {estadoAuditoria: EstadoAuditoria.ACTIVO, idAutor}});
};

export const actualizarAutor = async (idAutor: number, data: Partial<Autor>): Promise<Autor> => {
    await repository.update(idAutor, data);
    return obtenerAutor(idAutor);
};

export const darBajaAutor = async (idAutor: number) : Promise<void> => {
    await repository.update(idAutor, { estadoAuditoria: EstadoAuditoria.INACTIVO});
};

import { AppDataSource } from "../config/db.config";
import { Lector } from "../entities/lector";

const repository = AppDataSource.getRepository(Lector);

export const insertarLector = async (data: Partial<Lector>): Promise<Lector> => {
    console.log('insertarLector::service',data)
    const newLector: Lector = await repository.save(data);
    return await repository.findOne({where: { idLector: newLector.idLector }});  
};

export const listarLector = () => {
    return {accion: 'listarLector'};
};

export const obtenerLector = (idLector: number) => {
    return {accion: `obtenerLector:${idLector}`};
};

export const actualizarLector = (idLector: number, data: any) => {
    return {accion: `actualizarLector:${idLector}`};
};

export const darBajaLector = (idLector: number) => {
    return {accion: `darBajaLector:${idLector}`};
};

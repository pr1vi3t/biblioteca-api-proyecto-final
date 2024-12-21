import { AppDataSource } from "../config/db.config";
import { Rol } from "../entities/rol";
import { Usuario } from "../entities/usuario";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Rol);
const usuarioRepository = AppDataSource.getRepository(Usuario);

export const insertarRol = async (data: Partial<Rol>): Promise<Rol> => {
    const newRol: Rol = await repository.save(data);
    return await repository.findOne({where: { idRol: newRol.idRol }});  
};

export const listarRol = async ():Promise<Rol[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }})
};

export const obtenerRol = async (idRol: number):Promise<Rol> => {
    return await repository.findOne({where: { estadoAuditoria: EstadoAuditoria.ACTIVO, idRol}})    
};

export const actualizarRol = async (idRol: number, data: Partial<Rol>): Promise<Rol> => {
    await repository.update(idRol, data);
    return obtenerRol(idRol);
};

export const darBajaRol = async (idRol: number): Promise<void> => {
    await repository.update(idRol, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};

export const verificarRelaciones = async (idRol: number): Promise<boolean> => {
    const usuariosAsociados = await usuarioRepository.find({
        where: { rol: { idRol }, estadoAuditoria: EstadoAuditoria.ACTIVO },
    });
    return usuariosAsociados.length > 0; 
};
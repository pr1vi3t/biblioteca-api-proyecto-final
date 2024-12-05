export const insertarLector = (data: any) => {
    return {accion: 'insertarLector'};
};

export const listarLectores = () => {
    return {accion: 'listarLectores'};
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

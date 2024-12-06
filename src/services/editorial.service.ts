export const insertarEditorial = (data: any) => {
    return {accion: 'insertarEditorial'};
};

export const listarEditorial = () => {
    return {accion: 'listarEditorial'};
};

export const obtenerEditorial = (idEditorial: number) => {
    return {accion: `obtenerEditorial:${idEditorial}`};
};

export const actualizarEditorial = (idEditorial: number, data: any) => {
    return {accion: `actualizarEditorial:${idEditorial}`};
};

export const darBajaEditorial = (idEditorial: number) => {
    return {accion: `darBajaEditorial:${idEditorial}`};
};

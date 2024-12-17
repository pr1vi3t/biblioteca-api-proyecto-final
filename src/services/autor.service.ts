export const insertarAutor = (data: any) => {
    return {accion: 'insertarAutor'};
};

export const listarAutor = () => {
    return {accion: 'listarAutor'};
};

export const obtenerAutor = (idAutor: number) => {
    return {accion: `obtenerAutor:${idAutor}`};
};

export const actualizarAutor = (idAutor: number, data: any) => {
    return {accion: `actualizarAutor:${idAutor}`};
};

export const darBajaAutor = (idAutor: number) => {
    return {accion: `darBajaAutor:${idAutor}`};
};

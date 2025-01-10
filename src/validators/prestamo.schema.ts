import Joi from "joi";

export const insertarPrestamoSchema = Joi.object({
    ejemplar: Joi.object({
        idEjemplar: Joi.number()
            .integer()
            .required()
    }).required(),
    lector: Joi.object({
        idLector: Joi.number()
            .integer()
            .required()
    }).required(),
    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .required()
    }).required(),
    fechaPrestamo: Joi.date()
        .required(),
    fechaDevolucion: Joi.date()
        .greater(Joi.ref('fechaPrestamo'))
        .required(),
    fechaDevolucionReal: Joi.date()
        .optional(),
    estadoEntregado: Joi.string()
        .min(3)
        .max(100)
        .optional(),
    estadoRecibido: Joi.string()
        .min(3)
        .max(100)
        .optional(),
    estadoPrestamo: Joi.object({
        idEstadoPrestamo: Joi.number()
            .integer()
            .required()
    }).required()
})

export const actualizarPrestamoSchema = Joi.object({
    ejemplar: Joi.object({
        idEjemplar: Joi.number()
            .integer()
            .optional()
    }).optional(),
    lector: Joi.object({
        idLector: Joi.number()
            .integer()
            .optional()
    }).optional(),
    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .optional()
    }).optional(),
    fechaPrestamo: Joi.date()
        .optional(),
    fechaDevolucion: Joi.date()
        .greater(Joi.ref('fechaPrestamo'))
        .optional(),
    fechaDevolucionReal: Joi.date()
        .optional(),
    estadoEntregado: Joi.string()
        .min(3)
        .max(100)
        .optional(),
    estadoRecibido: Joi.string()
        .min(3)
        .max(100)
        .optional(),
    estadoPrestamo: Joi.object({
        idEstadoPrestamo: Joi.number()
            .integer()
            .optional()
    }).optional()
})
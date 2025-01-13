import Joi from 'joi';

export const insertarEstadoPrestamoSchema = Joi.object({
    descripcion: Joi.string()
        .min(3)
        .max(50)
        .required()
});

export const actualizarEstadoPrestamoSchema = Joi.object({
    descripcion: Joi.string()
        .min(3)
        .max(50)
        .optional()
});

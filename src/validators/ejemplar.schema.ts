import Joi from 'joi';

export const insertarEjemplarSchema = Joi.object({
    libro: Joi.object({
        idLibro: Joi.number()
            .integer()
            .required()
    }).required(),
    numero: Joi.number()
        .integer()
        .min(1)
        .required(),
    estado: Joi.string()
        .min(3)
        .max(50)
        .required()
});

export const actualizarEjemplarSchema = Joi.object({
    libro: Joi.object({
        idLibro: Joi.number()
            .integer()
            .optional()
    }).optional(),
    numero: Joi.number()
        .integer()
        .min(1)
        .optional(),
    estado: Joi.string()
        .min(3)
        .max(50)
        .optional()
});

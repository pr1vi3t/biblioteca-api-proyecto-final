import Joi from 'joi';

export const insertarEditorialSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(100)
                    .required(),
    paisOrigen: Joi.string()
                        .min(3)
                        .max(20)
                        .optional(),
    representante: Joi.string()
                        .min(3)
                        .max(100)
                        .optional()
});

export const actualizarEditorialSchema = Joi.object({
    nombre: Joi.string()
                    .min(3)
                    .max(100)
                    .optional(),
    paisOrigen: Joi.string()
                        .min(3)
                        .max(20)
                        .optional(),
    representante: Joi.string()
                        .min(3)
                        .max(100)
                        .optional()
});

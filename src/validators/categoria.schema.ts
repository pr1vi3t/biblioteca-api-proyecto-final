import Joi from 'joi';

export const insertarCategoriaSchema = Joi.object({
    descripcion: Joi.string()
                    .min(3)
                    .max(100)
                    .required()
});

export const actualizarCategoriaSchema = Joi.object({
    descripcion: Joi.string()
                    .min(3)
                    .max(100)
                    .optional()
});

import Joi from "joi";

export const insertarRolSchema = Joi.object({
    descripcion: Joi.string()
                    .min(5)
                    .max(50)
                    .required()
})

export const actualizarRolSchema = Joi.object({
    descripcion: Joi.string()
                    .min(5)
                    .max(50)
                    .optional()
})
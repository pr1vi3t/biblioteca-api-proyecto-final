import Joi from 'joi';

export const insertarLectorSchema = Joi.object({
        nombres: Joi.string()
                .min(3)
                .max(100)
                .required(),
        apellidoPaterno: Joi.string()
                .min(3)
                .max(50)
                .required(),
        apellidoMaterno: Joi.string()
                .min(3)
                .max(50)
                .required(),
        correo: Joi.string()
                .min(9)
                .max(50)
                .email()
                .optional(),
        celular: Joi.string()
                .min(9)
                .max(9)
                .optional()
                .pattern(new RegExp('^[0-9]{9,9}$'))
});

export const actualizarLectorSchema = Joi.object({
        nombres: Joi.string()
                .min(3)
                .max(100)
                .optional(),
        apellidoPaterno: Joi.string()
                .min(3)
                .max(50)
                .optional(),
        apellidoMaterno: Joi.string()
                .min(3)
                .max(50)
                .optional(),
        correo: Joi.string()
                .min(9)
                .max(50)
                .email()
                .optional(),
        celular: Joi.string()
                .min(9)
                .max(9)
                .optional()
                .pattern(new RegExp('^[0-9]{9,9}$'))
});

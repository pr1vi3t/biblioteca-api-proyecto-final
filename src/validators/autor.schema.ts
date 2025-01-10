import Joi from 'joi';

export const insertarAutorSchema = Joi.object({
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
    fechaNacimiento: Joi.date()
        .less('now')
        .optional(),
    nacionalidad: Joi.string()
        .min(3)
        .max(50)
        .optional(),
    correoElectronico: Joi.string()
        .min(9)
        .max(50)
        .email()
        .optional()
});

export const actualizarAutorSchema = Joi.object({
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
    fechaNacimiento: Joi.date()
        .less('now')
        .optional(),
    nacionalidad: Joi.string()
        .min(3)
        .max(50)
        .optional(),
    correoElectronico: Joi.string()
        .min(9)
        .max(50)
        .email()
        .optional()
});

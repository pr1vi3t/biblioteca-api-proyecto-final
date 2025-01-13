import Joi from 'joi';

export const insertarUsuarioSchema = Joi.object({
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
    username: Joi.string()
        .min(3)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,20}$')),
    password: Joi.string()
        .min(6)
        .max(20)
        .required()
        .pattern(new RegExp('^.{6,20}$')),
    correo: Joi.string()
        .min(9)
        .max(50)
        .email()
        .optional(),
    celular: Joi.string()
        .min(9)
        .max(9)
        .optional()
        .pattern(new RegExp('^9[0-9]{8}$')),
    rol: Joi.object({
        idRol: Joi.number()
            .integer()
            .required()
    }).required()
});

export const actualizarUsuarioSchema = Joi.object({
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
    username: Joi.string()
        .min(3)
        .max(20)
        .optional()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,20}$')),
    password: Joi.string()
        .min(6)
        .max(20)
        .optional()
        .pattern(new RegExp('^.{6,20}$')),
    correo: Joi.string()
        .min(9)
        .max(50)
        .email()
        .optional(),
    celular: Joi.string()
        .min(9)
        .max(9)
        .optional()
        .pattern(new RegExp('^9[0-9]{8}$')),
    rol: Joi.object({
        idRol: Joi.number()
            .integer()
            .optional()
    }).optional()
});

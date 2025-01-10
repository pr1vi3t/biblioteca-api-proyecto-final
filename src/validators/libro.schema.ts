import Joi from "joi";

export const insertarLibroSchema = Joi.object({
    isbn: Joi.string()
        .min(10)
        .max(13)
        .required(),
    titulo: Joi.string()
        .min(3)
        .max(200)
        .required(),
    imagenUrl: Joi.string()
        .uri()
        .max(500)
        .optional(),
    edicion: Joi.string()
        .min(3)
        .max(50)
        .optional(),
    paginas: Joi.number()
        .integer()
        .min(1)
        .optional(),
    editorial: Joi.object({
        idEditorial: Joi.number()
            .integer()
            .required()
    }).required(),
    autor: Joi.object({
        idAutor: Joi.number()
            .integer()
            .required()
    }).required(),
    categoria: Joi.object({
        idCategoria: Joi.number()
            .integer()
            .required()
    }).required(),
    idioma: Joi.string()
        .min(3)
        .max(30)
        .optional(),
})

export const actualizarLibroSchema = Joi.object({
    isbn: Joi.string()
        .min(10)
        .max(13)
        .optional(),
    titulo: Joi.string()
        .min(3)
        .max(200)
        .optional(),
    imagenUrl: Joi.string()
        .uri()
        .max(500)
        .optional(),
    edicion: Joi.string()
        .min(3)
        .max(50)
        .optional(),
    paginas: Joi.number()
        .integer()
        .min(1)
        .optional(),
    editorial: Joi.object({
        idEditorial: Joi.number()
            .integer()
            .optional()
    }).optional(),
    autor: Joi.object({
        idAutor: Joi.number()
            .integer()
            .optional()
    }).optional(),
    categoria: Joi.object({
        idCategoria: Joi.number()
            .integer()
            .optional()
    }).optional(),
    idioma: Joi.string()
        .min(3)
        .max(30)
        .optional()
})
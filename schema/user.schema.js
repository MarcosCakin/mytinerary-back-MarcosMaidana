import Joi from "joi"

const email = Joi.string()
.required()
        .email({
            minDomainSegments: 2,
            maxDomainSegments: 3
})
        .messages({
            'any.required': 'El e-mail es requerido'
        });

const password = Joi.string().required()
        .min(8)
        .max(30)
        .alphanum()
        .messages({
            'any.required': 'La clave es requerida',
            'string.min': 'La clave es muy corta (minimo 8 caracteres)',
            'string.max': 'La clave es muy larga (maximo 30 caracteres)'
        });



export const userSignup = Joi.object({
    email,
    password,
    name: Joi.string().required()
    .min(2)
    .max(35)
    .messages({
        'any.required': 'El nombre es requerido',
        'string.max': 'El nombre es muy largo (maximo 35 caracteres)'
    }),

    image: Joi.string().required()
    .uri()
    .messages({
        'any.required': 'La imagen es requerida'
    }),
})


export const userSignin = Joi.object({
    email,
    password,
})
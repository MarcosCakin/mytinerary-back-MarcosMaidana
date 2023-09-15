import Joi from "joi"

const email = Joi.string()
.required()
        .email({
            minDomainSegments: 2,
            maxDomainSegments: 3,
            tlds: {allow: ['com', 'net', 'ar', 'org']}
})
        .messages({
            'any.required': 'Email required'
        });

const password = Joi.string().required()
        .min(8)
        .max(30)
        .alphanum()
        .messages({
            'any.required': 'Password required',
            'string.min': 'Password is short(min 8 chars)',
            'string.max': 'Password is to long (max 30 chars)'
        });



export const userSignup = Joi.object({
    email,
    password,
    name: Joi.string().required()
    .min(5)
    .max(35)
    .messages({
        'any.required': 'Name required',
        'string.max': 'Name is too long(max 35 chars)',
        'string.min' : 'Name is too short (insert name and lastname)'
    }),

    photo: Joi.string().required()
    .uri()
    .messages({
        'any.required': 'La imagen es requerida'
    }),

    country: Joi.string().required()
    .messages({
        'any.required': 'Country required'
    })
})


export const userSignin = Joi.object({
    email,
    password
})
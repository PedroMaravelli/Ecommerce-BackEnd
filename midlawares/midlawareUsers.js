const { body } = require('express-validator')

const validationsRegister = [
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('cpf').notEmpty().isNumeric().isLength({min: 11, max:11}),
    body('senha').notEmpty().isLength({min:3, max:20}),
    body('data_nascimento').isDate(),
    body('confirma_senha').notEmpty().isLength({min:3, max:20}),
    body('telefone').notEmpty().isNumeric().isLength({min:5, max:11})

]

module.exports = validationsRegister
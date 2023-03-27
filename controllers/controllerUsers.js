const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const { sequelize, Usuario} = require('../models/Usuario')
const controllerUsers = {
    register: async ( req,res ) => {
        let  { 
            nome, 
            sobrenome, 
            email, 
            data_nascimento, 
            sexo,
            cpf, 
            telefone, 
            senha, 
            confirma_senha, 
            promocoes } = req.body
            
            let erro = validationResult(req)

            if(!erro.isEmpty()){
                res.status(400)
            }else{
                const passwordEncrypted = bcrypt.hashSync(senha, 10)
                senha = passwordEncrypted

                const confirmedPasswordEncrypted = bcrypt.hashSync(confirma_senha, 10)
                confirma_senha = confirmedPasswordEncrypted

                const createNewUserinDatabase = await Usuario.create({
                    nome,
                    sobrenome,
                    email,
                    data_nascimento,
                    sexo,
                    cpf,
                    senha,
                    confirma_senha,
                    promocoes

                })
                const newUserData = {
                nome, 
                sobrenome, 
                email,
            } 

                return res.status(200).json(newUserData)

            }

            

    },
    

}
module.exports = controllerUsers
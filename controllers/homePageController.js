
const {sequelize, Produto} = require('../models')


const homePageController = {
    homeProductsMasc: async (req,res)=>{
        const produtosMasc = await Produto.findAll({limit:3})

        return res.json(produtosMasc)
    },
    homeProductsFem: async(req,res) =>{
        const produtosFem = await  Produto.findAll({
            where:{genero: 'Feminino'}
        })

        return res.json(produtosFem)

    }

    
    

    
    
}

module.exports = homePageController
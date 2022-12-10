
const {sequelize, Produto} = require('../models')


const homePageController = {
    homeProductsMasc: async (req,res)=>{
        const produtosMasc = await Produto.findAll({limit:3})
        const produtosFem = await  Produto.findAll({
            where:{genero: 'Feminino'}
        })



        res.json([produtosMasc, produtosFem])
        
    }
    
    

    
    
}

module.exports = homePageController
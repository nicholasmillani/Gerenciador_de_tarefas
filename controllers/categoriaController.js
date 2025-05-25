const categoriaModel = require('../models/categoriaModel')

const categoriaController = {
    async criarCat(req, res){
        try{
            const {nome_categoria} = req.body
            const categoria = await categoriaModel.criarCategoria(nome_categoria);
            res.status(200).json(categoria)
        }
        catch(error){
            console.error(error)
            res.status(500).json({erro:'Erro, não foi possivel crias a categoria'});
        }
    },

    async listarCat(req, res){
        try{
            const categoria = await categoriaModel.listarCat();
            res.status(200).json(categoria)
        }
        catch(error){
            console.error(error);
            res.status(500).json({erro: 'nao foi possivel listar as categorias'})
        }
    },

    async buscarId(req, res){
        try{
            const {id} = req.params
            const categoria = await categoriaModel.buscarCatId(id)
            if(!categoria){
                res.status(404).json({erro: 'categoria nao encontrada'})
            }
            res.status(200).json(categoria)
        }
        catch(error){
            console.error(error)
            res.status(500).json({erro:'Não foi possivel buscar por id'})
        }
        
    },

    async deletarCat(req, res){
        try{
            const{id} = req.params
            const categoria = await categoriaModel.deletar(id)
            if(!categoria){
                res.status(404).json({erro: 'categoria nao encontrada'})
            }
            res.status(200).json(categoria)
        }
        catch(error){
            console.error(error)
            res.status(500).json({erro: 'Não foi possivel deletar'})
        }
    }

     
}
module.exports = categoriaController;
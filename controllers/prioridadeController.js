const prioridadeModel = require('../models/prioridadeModel');

const prioridadeController = {
    async listarPrioridades(req, res){
        try{
            const prioridade = prioridadeModel.listarPrioridades()
            res.status(200).json(prioridade);
        }
        catch(error){
            console.error(error);
            res.status(500).json({erro:'Nao foi possivel listar prioridades'})
        }
    },

    async listarPorId(req, res){
        try{
            const {id} = req.params
            const prioridade = prioridadeModel.listarPorId(id)
            if(!prioridade){
                res.status(404).json({erro: 'Id nao encontrado'})
            }
            res.status(200).json(prioridade)
        }
        catch(error){
            console.error(error)
            res.status(500).json({erro:'Não foi possivel listar por id'})
        }
        
    }
}
module.exports = prioridadeController;
const taskModel = require('../models/taskModel'); // Importa o modelo de usuários

const taskController = {
  // Lista todos os usuários
  async listarTasks(req, res) {
    try {
      const tasks = await taskModel.getAll(); // Busca todos os usuários no banco
      return res.status(200).json(tasks); // Retorna os usuários com status 200
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao listar usuários' }); // Erro interno
    }
  },

  // Busca um usuário pelo ID
  async obterTask(req, res) {
    try {
      const {id} = req.params; // Pega o id da URL
      const tasks = await taskModel.getById(id); // Busca o usuário

      if (!tasks) {
        return res.status(404).json({ erro: 'Usuário não encontrado' }); // Se não achou, erro 404
      }

      return res.status(200).json(tasks); // Retorna o usuário encontrado
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao buscar o usuário' });
    }
  },
  
  // Cria um novo usuário
  async criarTask(req, res) {
    try {
      const novotasks = await taskModel.create(req.body); // Cria com base no corpo da requisição
      return res.status(201).json(novotasks); // Retorna o usuário criado com status 201
    }
     catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
  },

  // Deleta um usuário pelo ID
  async deletarTask(req, res) {
    try {
      const { id } = req.params; // Pega o id da URL
      const deletado = await taskModel.delete(id); // Chama o delete no model

      if (!deletado) {
        return res.status(404).json({ erro: 'Usuário não encontrado para deletar' });
      }
      return res.status(200).json(deletado); // Retorna o usuário deletado
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao deletar o usuário' });
    }
  },

  // Atualiza informações de um usuário
  async atualizarInfo(req, res) {
    try {
      const { id } = req.params; // Pega o ID da URL
      const { nome } = req.body; // Pega o novo nome do corpo da requisição
      const atualizado = await taskModel.update(nome, id); // Chama o update no model

      if (!atualizado) {
        return res.status(404).json({ erro: 'Usuário não encontrado para atualizar' });
      }

      return res.status(200).json(atualizado); // Retorna o usuário atualizado
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Não foi possível atualizar a informação' });
    }
  },
  
};

module.exports = taskController; // Exporta o controller para ser usado nas rotas

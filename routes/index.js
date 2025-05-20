//Essa parte é a API!!!

const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/TarefaController');

//endpoint para listar todas as tasks
router.get('/tasks', usuarioController.listarTasks);

//endpoint para pegar task por id
router.get("/tasks/:id", usuarioController.obterTask);

//endpoint para criar task
router.post('/tasks', usuarioController.criarTask);

//endpoint para deletar task
router.delete('/tasks/:nome_task', usuarioController.deletarTask);

//endpoint para atualizar task
router.put('/usuarios', usuarioController.atualizarInfo);

module.exports = router;
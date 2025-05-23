//Essa parte é a API!!!

const express = require('express')
const router = express.Router();
const taskController = require('../controllers/TarefaController');
const userController = require('../controllers/usuarioController');

//endpoint para listar todas as tasks
router.get('/tasks', taskController.listarTasks);

//endpoint para pegar task por id
router.get("/tasks/:id", taskController.obterTask);

//endpoint para criar task
router.post('/tasks', taskController.criarTask);

//endpoint para deletar task
router.delete('/tasks/:nome_task', taskController.deletarTask);

//endpoint para atualizar task
router.put('/tasks', taskController.atualizarInfo);


router.get('/usuarios', userController.listarUsuarios);

router.get('/usuarios/:id', userController.buscarPorId);

router.get('/usuarios/:nome', userController.buscarPorNome)

router.post('/usuarios', userController.criarUsuario);

router.delete('/usuarios/delete', userController.deletarUsuario);

router.put('/usuarios/:attE', userController.atualizarEmail);

router.put('/usuarios/:attS', userController.atualizarSenha);

module.exports = router;
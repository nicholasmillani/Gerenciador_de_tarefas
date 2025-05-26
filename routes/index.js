//Essa parte é a API!!!

const express = require('express')
const router = express.Router();
const taskController = require('../controllers/TarefaController');
const userController = require('../controllers/usuarioController');
const categoriaController = require('../controllers/categoriaController');
const prioridadeController = require('../controllers/prioridadeController');
const app = express();
const path = require('path');

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


//endpoints dos usuarios
router.get('/usuarios', userController.listarUsuarios);

router.get('/usuarios/:id', userController.buscarPorId);

router.get('/usuarios/nome/:nome', userController.buscarPorNome)

router.post('/usuarios', userController.criarUsuario);

router.delete('/usuarios/delete', userController.deletarUsuario);

router.put('/usuarios/:attE', userController.atualizarEmail);

router.put('/usuarios/:attS', userController.atualizarSenha);


//endpoints prioridades
router.get('/prioridades', prioridadeController.listarPrioridades)

router.get('/prioridades/:id', prioridadeController.listarPorId)


//endpoints categorias
router.get('/categorias', categoriaController.listarCat)

router.get('/categorias/:id', categoriaController.buscarId)

router.post('/categorias', categoriaController.criarCat)

router.delete('/categorias/:id', categoriaController.deletarCat)

module.exports = router;



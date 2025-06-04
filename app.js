const express = require('express');
const app = express();
const expressSession = require('express-session')



const autenticar = require("./middlewares/autenticar")

const rotas = require('./routes/index');
const usuarioController = require('./controllers/usuarioController');
const taskController = require('./controllers/TarefaController');
const renderController = require('./controllers/renderController');


// Middleware para ler JSON no corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
  secret: 'MbSxksAdJ28TCm',
  resave: false,
  saveUninitialized: false,
  cookie:{maxAge: 1000*60*60}//sessão dura 1 hora
}))

// Rotas da API com prefixo /api
app.use('/api', rotas);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}, localhost:${PORT}`);
});

app.use(express.static('public')); // pasta onde está seu CSS
app.set('view engine', 'ejs'); 
app.set('views', 'views'); // pasta onde estão os arquivos de view

app.get('/', renderController.renderizarLogin);
app.get('/criarConta', renderController.renderizarCriarConta);
app.post('/criarConta', usuarioController.criarUsuario);
app.get('/home',autenticar, renderController.renderizarHome );
app.post('/', usuarioController.login)
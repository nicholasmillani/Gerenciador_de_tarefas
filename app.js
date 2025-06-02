const express = require('express');
const app = express();
const rotas = require('./routes/index');
const usuarioController = require('./controllers/usuarioController')

// Middleware para ler JSON no corpo da requisição
app.use(express.json());

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

app.get('/', usuarioController.listarUsuarios);

const express = require('express');
const app = express();
const rotas = require('./routes/index');

// Middleware para ler JSON no corpo da requisição
app.use(express.json());

// Rotas da API com prefixo /api
app.use('/api', rotas);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}, localhost:${PORT}`);
});


app.set('view engine', 'ejs'); 
app.set('views', 'views'); // pasta onde estão os arquivos de view

app.get('/', (req, res) => {
  res.render('index');
});
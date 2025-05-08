const express = require('express');
const router = express.Router();

// Defina aqui suas rotas, por exemplo:
router.get('/', (req, res) => {
  res.send('Rota raiz funcionando!');
});

// **Importante:** ao final, exporte o router:
module.exports = router;
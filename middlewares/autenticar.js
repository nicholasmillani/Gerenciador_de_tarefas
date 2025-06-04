// middlewares/autenticar.js
function autenticar(req, res, next) {
  if (req.session.usuario) {
    next(); // Continua para a rota
  } else {
    res.redirect('/'); // Redireciona se não estiver logado
  }
}

module.exports = autenticar
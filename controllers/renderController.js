const renderController = {
    async renderizarHome(req, res){
    try{
      return res.render('Home')
    }
    catch(error){
      return console.error(error)
    }
  },

  async renderizarLogin(req, res) {
        try {
            return res.render('Login');
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao renderizar o login' });
        }
    },
    async renderizarCriarConta(req, res) {
        try {
            return res.render('CriarConta');
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao renderizar o Criar conta' });
        }
    },
    
}

module.exports = renderController
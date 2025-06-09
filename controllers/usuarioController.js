const usuarioModel = require('../models/usuariosModel');

const usuarioController = {
    async listarUsuarios(req, res) {
        try {
            const usuarios = await usuarioModel.buscarUsuarios();
            return res.status(200).json(usuarios)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar usuarios' });
        }
    },
    async buscarPorId(req, res) {
        try {
            const {id} = req.params;
            const usuario = await usuarioModel.buscarPorId(id);
            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            return res.render('usuarios', {usuario});
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar usuário' });
        }
    },

    async buscarPorNome(req, res) {
        try {
            const { nome } = req.body;
            const usuarios = await usuarioModel.buscarPorNome(nome);
            if (!usuarios) {
                return res.status(404).json({ erro: 'Usuário não encontrado' });
            }
            return res.render('usuarios', {usuarios});
        } 
        catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao buscar usuário' });
        }
    },

    async criarUsuario(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const usuario = await usuarioModel.criarUsuario(nome, email, senha);
            return res.render('sucessoCriar')
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao criar usuário' });
        }
    },

    async deletarUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await usuarioModel.deletarUsuario(id);
            if (!usuario) {
                return res.status(404).json({ erro: 'Usuário não encontrado' });
            }
            return res.render('usuarios', {usuario});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao deletar usuário' });
        }
    },

    async atualizarEmail(req, res) {
        try {
            const { id } = req.params;
            const { email } = req.body;
            const usuario = await usuarioModel.atualizarEmail(email, parseInt(id));
            return res.render('usuarios', {usuario});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar o email' });
        }
    },

    async atualizarSenha(req, res) {
        try {
            const { id } = req.params;
            const { senha } = req.body;
            const usuario = await usuarioModel.atualizarSenha(senha, parseInt(id));
            return res.render('usuarios', {usuario});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar senha' });
        }
    },
    async login(req, res){
        try{
            const {email, senha} = req.body;
            const usuario = await usuarioModel.autenticarUsuario(email, senha);
            if(!usuario){
               return res.status(401).render('erroVerificar')
            }
            req.session.usuario = {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            };
            return res.redirect('/home')
        }
        catch(error){
            console.error(error)
            res.status(500).render('Login',{erro: 'erro interno do servidor, nao foi possivel achar usuario'});
        }
    }
};

module.exports = usuarioController;

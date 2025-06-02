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
            return res.status(200).json(usuario)
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
    }
};

module.exports = usuarioController;

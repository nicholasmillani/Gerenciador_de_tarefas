const db = require('../config/database');
const bcrypt = require('bcrypt') //criptografador

class Usuario{
    //método para buscar todos os usuários
    static async buscarUsuarios(){
        const result = await db.query('SELECT * FROM usuarios');
        return result.rows
    }
    //buscar usuario por id
    static async buscarPorId(id){
        const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return result.rows[0];
    }
    //buscar por nome
    static async buscarPorNome(nome){
        const result = await db.query('SELECT * FROM usuarios WHERE nome = $1',[nome]); 
        return result.rows[0]
    }

    static async criarUsuario(nome, email, senha) {
        try {
            const saltRounds = 10;
            const senhaHash = await bcrypt.hash(senha, saltRounds);

            const result = await db.query(
                'INSERT INTO usuarios(nome, email, senha) VALUES($1, $2, $3) RETURNING *',
                [nome, email, senhaHash]
            );

            return result.rows[0];
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    }

    //deletar usuario
    static async deletarUsuario(id){
        const result = await db.query('DELETE FROM usuarios WHERE id = $1',[id]);
        return result.rows[0]
    }
    //atualizar email
    static async updateEmail(email,id){
        const result = await db.query('UPDATE usuarios SET email = $1 WHERE id = $2 RETURNIN *',[email, id])
        return result.rows[0]
    }
    //atualizar senha
    static async updateSenha(senha, id){
        const result = await db.query('UPDATE usuarios SET senha = $1 WHERE id = $2',[senha, id])
        return result.rows[0]
    }
    static async autenticarUsuario(email, senha){
         try {
            //Buscar usuário pelo email
            const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
            
            if (result.rows.length === 0) {
                return null; // Email não encontrado
            }
            const usuario = result.rows[0];

            //Comparar senha digitada com a senha criptografada do banco
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

            //Retornar usuário se a senha estiver correta
            return senhaCorreta ? usuario : null;

        } 
        catch (error) {
            console.error('Erro ao autenticar usuário:', error);
        }
    }
}

module.exports = Usuario //Torna possivel a classe usuario ser usada em outros arquivos
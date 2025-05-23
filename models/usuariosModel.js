const db = require('../config/database');

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
    //criar usuario
    static async criarUsuario(nome, email, senha){
        const result = await db.query(
            'INSERT INTO usuarios(nome, email, senha) VALUES($1, $2, $3) RETURNING *',
        [nome, email, senha]
    )
    return result.rows
    }
    //deletar usuario
    static async deletarUsuario(id){
        const result = await db.query('DELETE FROM usuarios WHERE id = $1',[id]);
        return result.rows[0]
    }
    //atualizar email
    static async updateEmail(email,id){
        const result = await db.query('UPDATE usuarios SET email = $1 WHERE id = $2 RETURNIN *',[email, id])
        return 
    }
    //atualizar senha
    static async updateSenha(senha, id){
        const result = await db.query('UPDATE usuarios SET senha = $1 WHERE id = $2',[senha, id])

    }
}
module.exports = Usuario //Torna possivel a classe usuario ser usada em outros arquivos
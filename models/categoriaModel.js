const db = require('../config/database')

class Categoria{
    static async criarCategoria(nome_categoria){
        const result = await db.query(
            'INSERT INTO categorias (nome_categoria) VALUES($1) RETURNING*',
            [nome_categoria]
        );
        return result.rows[0];
    }

    static async listarCat(){
        const result = await db.query(
            'SELECT * FROM categorias'
        )
        return result.rows
    }

    static async buscarCatId(id){
        const result = await db.query(
            'SELECT*FROM categorias WHERE id = $1',
            [id]
        )
        return result.rows[0]
    }

    static async deletar(id){
        const result = await db.query(
            'DELETE FROM categorias WHERE id = $1',
            [id]
        )
    }
}
module.exports = Categoria
const db = require('../config/database')

class Prioridade{
    static async listarPrioridades(){
        const result = await db.query(
            'SELECT * FROM prioridades'
        );
        return result.rows;
    }

    static async buscarPorId(id){
        const result = await db.query(
            'SELECT * FROM prioridade WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }
}

module.exports = Prioridade
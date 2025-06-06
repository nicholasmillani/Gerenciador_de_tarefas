const db = require('../config/database'); // Importa a conexão com o banco de dados

class Task {
  // Método para buscar todas as tasks da tabela
  static async getAll() {
    const result = await db.query('SELECT * FROM tasks'); 
    return result.rows; 
  }

  // Busca uma task pelo ID do usuário
  static async getById(usuarios_id) {
    const result = await db.query(
      'SELECT * FROM tasks WHERE usuarios_id = $1',
      [usuarios_id] 
    );
    return result.rows[0]; 
  }

  // Cria uma nova task
  static async create(nome_task, descricao, prazo, usuarios_id, categoria_id) {
  const result = await db.query(
    `INSERT INTO tasks (nome_task, descricao, prazo, usuarios_id, categoria_id)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`, 
    [nome_task, descricao, prazo, usuarios_id, categoria_id]
  );
  return result.rows[0]; 
}

  // Deleta uma task pelo ID do usuário
  static async delete(usuarios_id) {
    const result = await db.query(
      'DELETE FROM tasks WHERE usuarios_id = $1 RETURNING *',
      [usuarios_id]
    );
    return result.rows[0]; 
  }

  // Atualiza o nome da task pelo ID da task
  static async update(nome_task, id) {
    const result = await db.query(
      'UPDATE tasks SET nome_task = $1 WHERE id = $2 RETURNING *',
      [nome_task, id]
    );
    return result.rows[0]; 
  }

  static async buscarTaskIdUs(usuarios_id){
    const result = await db.query(
      'SELECT * FROM tasks WHERE usuarios_id = $1',
      [usuarios_id]
    );
      return result.rows
  }
}

module.exports = Task; // Exporta a classe para ser usada em outros arquivos

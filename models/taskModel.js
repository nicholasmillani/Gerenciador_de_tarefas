const db = require('../config/database'); // Importa a conexão com o banco de dados

class Task {
  // Método para buscar todas as tasks da tabela
  static async getAll() {
    const result = await db.query('SELECT * FROM tasks'); // Executa SELECT no banco
    return result.rows; // Retorna todas as linhas encontradas
  }

  // Busca uma task pelo ID do usuário
  static async getById(usuario_id) {
    const result = await db.query(
      'SELECT * FROM tasks WHERE usuario_id = $1',
      [usuario_id] // Passa o ID como parâmetro para evitar SQL Injection
    );
    return result.rows[0]; // Retorna apenas a primeira task encontrada
  }

  // Cria uma nova task
  static async create(nome_task, descricao, prazo, usuario_id, categoria_id) {
    const result = await db.query(
      `INSERT INTO tasks (nome_task, descricao, prazo, usuario_id, categoria_id)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`, // Retorna a task recém-criada
      [nome_task, descricao, prazo, usuario_id, categoria_id]
    );
    return result.rows[0]; // Retorna a linha inserida
  }

  // Deleta uma task pelo ID do usuário
  static async delete(usuario_id) {
    const result = await db.query(
      'DELETE FROM tasks WHERE usuario_id = $1 RETURNING *',
      [usuario_id]
    );
    return result.rows[0]; // Retorna a task deletada (ou null se não encontrou)
  }

  // Atualiza o nome da task pelo ID da task
  static async update(nome_task, id) {
    const result = await db.query(
      'UPDATE tasks SET nome_task = $1 WHERE id = $2 RETURNING *',
      [nome_task, id]
    );
    return result.rows[0]; // Retorna a task atualizada
  }
}

module.exports = Task; // Exporta a classe para ser usada em outros arquivos

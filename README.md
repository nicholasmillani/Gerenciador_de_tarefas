#  Gerenciador de tarefas

Um gerenciador de tarefas completo com frontend e backend integrados. Ele permite criar, editar, excluir, marcar tarefas como concluídas e definir prioridades. Dessa forma, o usuário consegue organizar suas atividades de maneira mais eficiente, conciliando a vida pessoal e profissional.

##  Tecnologias Utilizadas

### Frontend
- HTML
- CSS
- JAVASCRIPT
### Backend
- PostgreSQL
- SQL
- node
- express
## Estrutura de pastas:
A estrutura das pastas segue o formato MVC (Model, View, Controller), as pastas estão a baixo:
```
├── config/               
│   └── database.js
├── controllers/           
│   └── TarefaController.js
│   └── categoriaController.js
│   └── prioridadeController.js
│   └── renderController.js
│   └── userController.js
├── middlewares/
│   └──autenticar.js
├── models/                
│   └── UserModel.js
│   └── categoriaModel.js
│   └── prioridadeModel.js
│   └── taskModel.js
├── routes/                
│   └── index.js                
├── scripts/
│   └── init.sql
│   └── runSQLScripts.js         
├── public/
│   └──/images
│   └──/stylesheets
│   └──/scripts           
├── tests/                 
├──views/
│   └── CriarConta.ejs
│   └── erroVerificar.ejs
│   └── Home.ejs
│   └── login.ejs
│   └── sucessoCriar.ejs
├── .gitignore             
├── .env
├── app.js           
├── jest.config.js         
├── package-lock.json      
├── package.json           
├── readme.md              
├── server.js                           
```

##  Funcionalidades

-  Criar tarefas
-  Editar título 
-  Excluir tarefas
-  Marcar como concluída ou pendente
-  Filtrar por status
-  Priorizar tarefas

## Como rodar localmente
### 1: Clone esse repositório
### 2: instale as dependências(npm i)
### 3: Coloque esse comando no terminal(node app.js)

##  Contato
Desenvolvido por **Nicholas A.K Millani**

email: **Nicholas_millani@outlook.com**

# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Nicholas Anantha Krishnan Millani



## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

Neste WAD (Web Application Development), será registrada toda a trajetória de desenvolvimento do meu projeto individual: um gerenciador de tarefas pensado para ajudar na organização e produtividade do dia a dia. A proposta é criar uma aplicação web simples e funcional, onde o usuário consiga cadastrar, editar, visualizar e excluir tarefas de forma prática. A ideia é que ele consiga acompanhar tudo o que precisa fazer sem se perder, organizando melhor o tempo e as prioridades.
O projeto será construído utilizando tecnologias de front-end como HTML, CSS e JavaScript, que vão cuidar da parte visual e da interação com o usuário. Já no back-end, serão usadas tecnologias voltadas para banco de dados, permitindo que as tarefas e informações fiquem salvas de forma segura e possam ser acessadas sempre que necessário. Com isso, o sistema não será apenas visual, mas também funcional de verdade.
---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)
![Persona Fabiola (1)](https://github.com/user-attachments/assets/a473730a-cf07-42bc-a13b-f6dfa041df39)





### 2.2. User Stories (Semana 01)
 identificação | US01
--- | ---
User Story| Como estudante universitária,quero receber notificações de tarefas próximas do prazo,para que eu não perca datas importantes de entrega.
Critério de aceite 01 | Receber notificações de tarefas perto de vencer
Critério de aceite 02 | O prazo das tarefas tem que poder expirar.

Identificação | US02
--- | --- 
User story | Como usuário iniciante,quero ter acesso a um tutorial rápido de como criar e gerenciar tarefas,para que eu possa começar a usar o site sem dificuldades.
Critério de aceite 01 | O tutorial tem que ser fácil de se entender.
Critério de aceite 02 | O site deve ter uma opção para abrir o tutorial.

 Identificação | US03
--- | ---
User story | Como pessoa com muitos compromissos pessoais e profissionais,quero filtrar minhas tarefas por prioridade,para que eu possa focar primeiro no que é mais urgente.
Critério de aceite 01 | O filtro deve conseguir deixar as tarefas com mais prioridade em uma posição acima das com menor.
Critério de aceite 02 | O filtro deve funcionar corretamente.
INVEST | **Idependente:** é idependente pois para ser adicionada nenhuma outra tarefa é necessária. **Negociavel:** é negociavel pois o jeito que ele será implementado pode mudar,pode ser desde um vídeo explicativo ate um passo a passo em imagens. **Valiosa:** é valiosa pois com um tutorial, a retenção de novos usuários é maior, além de ocorrer uma diminuição na curva de aprendizado. **Estimavel:** é fácil de estimar, tendo em vista que essa não é uma tarefa muito grande. **Pequeno:** é uma tarefa não muito complexa, portanto não deve consumir muito tempo, entretanto pode acabar sendo um pouco maior que uma sprint. **Testavel:** é muito facil de ser testado, basta apenas alguns usuários novos.



---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

### **Modelo conceitual**
- Um usuário possui muitas tasks(1:N)
- Uma task pode possuir uma categoria(1:1)
- Uma categoria pode pertencer a varias tasks(1:N)
- uma task pode ter pode ser prioritária(1:1)

### **Modelo relacional:**
#### TABELA usuários:
- **id(pk)**
- **nome TEXT**
- **email TEXT**
- **senha TEXT**

#### TABELA categoria:
- **id(pk)**
- **categoria TEXT**

#### Tabela prioridade:
- **id(pk)**
- **prioridade TEXT**

#### TABELA tasks:
- **id(pk)**
- **nome TEXT** 
- **descricao TEXT**
- **finalizado BOOLEAN**
- **prioridade_id (fk -> prioridade.id**
- **data_criacao TIMESTAMP** 
- **usuario_id (fk -> usuários.id)**
- **categoria_id (fk -> categoria.id)**
- **prazo DATE** 

### **Modelo físico:**
<img src="https://github.com/user-attachments/assets/67e0bdd6-1469-4c85-9c20-17839f6753d3" height=500px width=700px>


### 3.1.1 BD e Models (Semana 5)
Models são a parte do código que interagem diretamente com o banco de dados, o gerenciador de tarefas contará com 4 deles:
#### Tasks model: 
Esses códigos serão responsáveis pela parte de gerenciamento das tasks. Ele possibilita criar, deletar, atualizar e consultar as tarefas.

#### Usuários model:
Esses códigos tem a mesma função do task model, entretanto ele é responsável pelos usuários. Ele torna possivel criar, atualizar, deletar e consultar, desse modo alterando a tabela do banco de dados.

#### Categorias model:
Aqui ocorrerá todas as funções para modificar/consultar a tabela de categorias. Ela torna possivel consultar, criar, deletar 
dados das tabelas.

#### Prioridade model: 
Aqui permite a interação com a prioridade. Esse model só serve para consultar qual a prioridade pelo id.

### 3.2. Arquitetura (Semana 5)

<img src='https://github.com/user-attachments/assets/1f2c7fac-9b98-42e0-9e0c-28fb1998d838'>
O view chama uma requisição http(get, post, delete, put), os controllers a analisam e aplicam as regras de negócio, agora essa requisição chega nos models, que interagem diretamente com o banco, e executam efetivamente a requisição.

**Link para o figma: https://www.figma.com/design/GSg8ScaVHAvnHnH9Wqd7tk/Site-individual?node-id=0-1&p=f&t=n19Lr4doCdtDZ7pM-0**

### 3.3. Wireframes (Semana 03)

Wireframe é uma representação simplificada de uma página web, tela de sistema ou aplicativo. Seu propóito é mostrar a estrutura básica do conteúdo, facilitando a comunicação entre designers, clientes e desenvolvedores.

#### Tela de login:
![login](https://github.com/user-attachments/assets/5aa74dce-6d5a-45ba-ba8a-6a3243c4142f)

#### Tela de tarefas(US03):
![tela principal](https://github.com/user-attachments/assets/c8eeaef3-e032-4218-b45b-3f6c1fb0c777)

#### popup de clique em tarefa(US01):
![clique em tarefa](https://github.com/user-attachments/assets/0ba30b09-f1dc-475a-8bc6-fb2068f250cb)

Link para o figma contendo as imagens: https://www.figma.com/design/GSg8ScaVHAvnHnH9Wqd7tk/Wireframe-site-de-tarefas?node-id=1-122&t=Ti0a0eFgdQrkGAo0-0



### 3.4. Guia de estilos (Semana 05)
![guia de estilo (1)](https://github.com/user-attachments/assets/03238d5d-a441-44cb-8222-beace8040918)

Link para o figma contendo a imagem: https://www.figma.com/design/GSg8ScaVHAvnHnH9Wqd7tk/Wireframe-site-de-tarefas?node-id=1-122&t=Ti0a0eFgdQrkGAo0-0





### 3.5. Protótipo de alta fidelidade (Semana 05)

#### Tela principal:
![Prototipo de alta fidelidade (1)](https://github.com/user-attachments/assets/83e46ad9-462b-4838-9941-72474ce7843b)

#### Tela de login:
![Prototipo tela de login](https://github.com/user-attachments/assets/453d8392-6a7e-4a4a-a6cf-69c7e04b8fe6)

#### Popup da task:
![Popup da task](https://github.com/user-attachments/assets/67e21d26-d9d2-40d0-8de2-3bd61a734231)



Link para o figma que contem a imagem: https://www.figma.com/design/GSg8ScaVHAvnHnH9Wqd7tk/Site-individual?node-id=20-108&t=pAAs5NtZFk4eueKo-0



### 3.6. WebAPI e endpoints (Semana 05)

#### GET /tasks
Descrição: Lista todas as tasks cadastradas

#### GET /tasks/:id
Descrição: Retorna os dados de uma tarefa específica pelo ID.

#### POST /tasks
Descrição: Cria uma nova tarefa.

#### DELETE /tasks/:nome_task
Descrição: Deleta uma tarefa com base no nome

#### PUT /tasks
Descrição: Atualiza as informações de uma tarefa.

#### GET /usuarios
Descrição: Lista todos os usuários cadastrados.

#### GET /usuarios/:id
Descrição: Retorna os dados de um usuário pelo ID.

#### GET /usuarios/nome/:nome
Descrição: Retorna os dados de um usuário pelo ID.

#### POST /usuarios
Descrição: Cria um novo usuário.

#### DELETE /usuarios/delete
Descrição: Deleta um usuário.

#### PUT /usuarios/:attE
Descrição: Atualiza o e-mail de um usuário.

#### PUT /usuarios/:attS
Descrição: Atualiza a senha de um usuário.

#### GET /categorias
Descrição: Lista todas as categorias cadastradas.

#### GET /categorias/:id
Descrição: Retorna uma categoria específica pelo ID.

#### POST /categorias
Descrição: Cria uma nova categoria.

#### DELETE /categorias/:id
Descrição: Remove uma categoria pelo ID.

#### GET /prioridades
Descrição: Lista todas as prioridades disponíveis (ex: alta, média, baixa).

#### GET /prioridades/:id
Descrição: Retorna uma prioridade específica pelo ID.


### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---

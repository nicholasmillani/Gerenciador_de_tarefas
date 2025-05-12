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

#### TABELA tasks:
- **id(pk)**
- **nome TEXT** 
- **descricao TEXT**
- **finalizado BOOLEAN**
- **prioridade TEXT**
- **data_criacao TIMESTAMP** 
- **usuario_id (fk -> usuários(id))**
- **categoria_id (fk -> categoria(id))**
- **prazo DATE** 

### **Modelo físico:**
<img src="https://github.com/user-attachments/assets/a01c00a9-9c20-4f52-9003-be460eee0992" height=500px width=700px>

Link para o figma contendo as imagens: https://www.figma.com/design/GSg8ScaVHAvnHnH9Wqd7tk/Wireframe-site-de-tarefas?node-id=1-122&t=Ti0a0eFgdQrkGAo0-0



### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

Wireframe é uma representação simplificada de uma página web, tela de sistema ou aplicativo. Seu propóito é mostrar a estrutura básica do conteúdo, facilitando a comunicação entre designers, clientes e desenvolvedores.

#### Tela de login:
![login](https://github.com/user-attachments/assets/5aa74dce-6d5a-45ba-ba8a-6a3243c4142f)

#### Tela de tarefas(US03):
![tela principal](https://github.com/user-attachments/assets/c8eeaef3-e032-4218-b45b-3f6c1fb0c777)

#### popup de clique em tarefa(US01):
![clique em tarefa](https://github.com/user-attachments/assets/0ba30b09-f1dc-475a-8bc6-fb2068f250cb)



### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

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

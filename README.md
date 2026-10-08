# Meu Primeiro Projeto NEXT  -  TodoList

## Introdução ao Desenvolvimento de uma aplicação To-Do com Next.js e MongoDB

## Objetivos
Aplicação de Lista de Tarefas completa, integrando o front do Next.js com backend em API Routes e o MongoDB. Consolidando ideais de arquitetura Full-Stack dentro de um mesmo framework

- Criar e configurar um projeto Next.js com Typescript
- Configurar a conexão com o MongoDB usando Mongoose
- Criar uma modelagem de dados 
- implementar rotas de API (Listar, Cadastrar, atualizar e excluir tarefas)
- Consumir essa rotas a partir do frontEnd
- Compreender o fluxo do CRUD na aplicação

## Contextualização

A aplicação deve permitir que o usuário:
- Adicione uma nova tarefa
- Visualize todas as tarefas cadastradas
- Marque uma tarefa como concluída ou pendente
- Remova itens da lista
- Tenha persistência de dados em banco

## Visão Geral da Arquitetura

```mermaid
flowchart TB
    Frontend["FrontEnd<br/>React+Next.js<br/>Componentes e interface"]
    API["API Routes (Next.js)<br/>/api/todos"]
    MongoDB["MongoDB<br/>Armazenamento de Tarefas"]

    Frontend -->|HTTP / fetch|API
    API --> |Solicitação Mongoose| MongoDB
    MongoDB --> | Devolve a solicitação | API
    API -->| Response HTTP / fetch | Frontend
```

## Escopo do Projeto

### FrontEnd (Next.js/React)


- exibição da lista de tarefas;
- formulário para adicionar novas tarefas;
- botão para alternar status (concluída ou pendente);
- botão para excluir tarefas;
- atualização dinâmica da interface sem recarregar a página.

### BackEnd (Next.js API Routes)

- `GET /api/todos`: retorna todas as tarefas;
- `POST /api/todos`: cria uma nova tarefa;
- `PUT /api/todos/[id]`: atualiza uma tarefa existente;
- `DELETE /api/todos/[id]`: remove uma tarefa.


### Banco De Dados (MongoDB)

- armazenamento das tarefas;
- persistência do título e do status de conclusão;
- conexão segura e reutilizável com o banco.

## Estrutura do Projeto

```text
todo-app/
|-- public/
|-- scr/
|   |-- app/
|   |   |-- pages/
|   |   |-- componentes/
|   |   |-- model/
```

## Dependências


npm install mongoose
> Permite conectar a aplicação ao MongoDB, definir Modelos para os dados e realizar operações do CRUD

npm install -D @types/react @types/node
> Adiciona definições para o TypeScript dos componentes react e node
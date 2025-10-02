API de simulação bancária - Node.js + Express + JSON

1. Descrição:

API de banco simples desenvolvida com Node.js, Express e JSON como banco de dados.
Permite funcionalidades básicas de um banco, incluindo:

- Cadastro de usuários

- Login de usuários

- Consulta de saldo

- Saque de dinheiro

- Transferência entre usuários

O banco de dados é armazenado em um arquivo JSON (database.json) para persistência simples.

2. Estrutura do Projeto:

O projeto está organizado de forma a separar responsabilidades:

bank/server.js: servidor Express principal

bank/src/backend/controllers: controladores conectando rotas aos serviços

bank/src/backend/services: lógica das operações do banco

bank/src/backend/repository: banco de dados JSON e funções de leitura/escrita

bank/src/frontend: opcional, caso seja criada interface

3. Banco de Dados:

Localizado em bank/src/backend/repository/database.json

Armazena todos os usuários e seus saldos

Operações de cadastro, saque e transferência alteram esse arquivo automaticamente

4. Funcionalidades / Endpoints:

- Cadastro de usuário
- Criação de novo usuário, salvando nome, CPF e saldo inicial.

- Login de usuário
- Verificação da existência de um usuário pelo nome e CPF.

- Consulta de saldo
- Consulta do saldo atual de um usuário pelo CPF.

- Saque
- Permite retirar dinheiro de um usuário, desde que haja saldo suficiente.

- Transferência
- Permite transferir dinheiro de um usuário para outro, utilizando o CPF do destinatário para identificar a conta correta.

5. Observações:

Todos os valores de dinheiro devem ser números positivos.

O CPF do destinatário precisa estar cadastrado para que a transferência seja realizada.

Não há autenticação real; o CPF enviado nas requisições identifica o usuário.

CORS está habilitado para permitir que diferentes clientes, como Thunder Client ou frontends, acessem a API sem problemas de bloqueio.

6. Testando a API

Ferramentas como Thunder Client ou Postman podem ser utilizadas para testar a API.

Requisições POST devem ter os dados no corpo em formato JSON.

Requisições GET devem enviar os parâmetros necessários na URL.

As respostas da API retornam mensagens de sucesso ou erro de cada operação.

7. Possíveis Melhorias Futuras

- Implementar autenticação JWT para maior segurança

- Adicionar login persistente com sessão

- Criar frontend interativo para os usuários

- Suporte a múltiplas moedas ou múltiplas contas por usuário

- Melhoria das transferências oferecidas

- Adicional de uma API externa para investimentos fictícios
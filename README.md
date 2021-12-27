# Boas vindas ao repositório Games Store (Frontend)

### Introdução:

Essa aplicação é um **E-commerce** de uma **Loja de Jogos**.

**Observação**: Por ora o projeto não teve foco na estética, pois ainda está em fase de desenvolvimento.

### BACKEND:

O **backend** é uma API que desenvolvi para ser usada (consumida) com essa aplicação. Basicamente um Express com MongoDB. No entanto a API se encontra em [outro](https://github.com/becauro/games-store-back) repositório. Apenas siga as instruções de cada um e conseguirá integrar ambos.

### Funcionalidades básicas:


#### Produtos

* **Visualização** de todos produtos cadastrados na Loja.
* **Visualização** de todos produtos que inclui em seu nome o valor de busca no Filtro de pesquisa.
* **Inserção** de novo produto (Brevemente).
  * Apenas o `usuário ADM` pode realizar esta operação.
* **Remoção** de um produto (Brevemente).
  * Apenas o `usuário ADM` pode realizar esta operação.
* **Atualização** de um produto (Brevemente).
  * Apenas o `usuário ADM` pode realizar esta operação.


#### Carrinho

* **Visualização** de todos produtos no Carrinho da Loja. (Brevemente).
* **Inserção** de um produto no Carrinho (Brevemente). (Brevemente).
* **Remoção** de um produto do Carrinho (Brevemente). (Brevemente).
* **Atualização** de quantidade de um produto no Carrinho (Brevemente).

#### Checkout

* **Visualização** de todos produtos em Checkout. (Brevemente).
* **Retorno** Retorno para o carrinho sem perder dados. (Brevemente).
* **Cancelamento** Cancelamento de compra. (Brevemente).


#### Usuário

* **Visualização** de todos usuário cadastradoos na Loja. (Brevemente).
* **Inserção** de um usuário na Loja. (Brevemente).
* **Remoção** de um Usuário na Loja. (Brevemente).
  * Apenas o `próprio usuário (cliente))` ou `usuário ADM` pode realizar esta operação.
* **Atualização** de dados de Usuário (Brevemente).
  * Apenas o `próprio usuário (cliente))` ou ` usuário ADM`  pode realizar esta operação.

### Tecnologias usadas

* **Java Script**
* **React**
* **Redux**
* **CSS**

### Requisitos para configurar e rodar o projeto em modo desenvolvimento:

1. Ter **Node.js** para baixar as dependências via NPM.
2. Ter um **Browser** compatível com as últimas tecnologias de mercado ( ex.: _Chrome_ ou _Firefox_) para interação com a interface da Aplicação.

### Como configurar as dependências do projeto:

Um vez que no arquivo `package.json` é listado as dependências necessárias, basta digitar o seguinte comando, estando na pasta do repositório clonado:

    `npm install`

### Como executar o projeto:

1. Estando dentro pasta do projeto, basta executar o comando: `npm start`
2. Em seguida, abra o navegador e digite: **http://127.0.0.1:3000** ( ou use com a porta que o Sistema Operacional escolher, caso a 3000 (padrão do `create react-app`) já esteja em uso).


## Futuras Funcionalidades:

**Cadastro** e **Login** de Usuários (Clientes) na plataforma, cada um tendo sua própria conta para gerenciamento de compras.
Além das funcionalidades já especificadas como "brevemente" na seção Funcionalidades básicas

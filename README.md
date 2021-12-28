# Boas vindas ao repositório Games Store (Frontend)

### Introdução:

Essa aplicação é um **E-commerce** de uma **Loja de Jogos**.

**Observação**: Por ora o projeto não teve foco na estética, pois ainda está em fase de desenvolvimento.

### BACKEND:

O **backend** é uma API que desenvolvi para ser usada (consumida) com essa aplicação. Basicamente um Express com MongoDB. No entanto a API se encontra em [outro](https://github.com/becauro/games-store-back) repositório. Apenas siga as instruções de cada um e conseguirá integrar ambos.

### Funcionalidades básicas


#### Produtos

* **Visualização** de todos produtos cadastrados na Loja.
* **Visualização** de todos produtos que inclui em seu nome o valor de busca no Filtro de pesquisa.
* **Inserção** de novo produto (BREVEMENTE).
  * Apenas o `usuário ADM` pode realizar esta operação.
* **Remoção** de um produto (BREVEMENTE).
  * Apenas o `usuário ADM` pode realizar esta operação.
* **Atualização** de um produto (BREVEMENTE).
  * Apenas o `usuário ADM` pode realizar esta operação.


#### Carrinho

* **Visualização** de todos produtos no Carrinho da Loja. 
* **Inserção** de um produto no Carrinho. 
* **Remoção** de um produto do Carrinho.
* **Atualização** de quantidade de um produto no Carrinho.

#### Checkout

* **Visualização** de todos produtos em Checkout. (BREVEMENTE).
* **Retorno** Retorno para o carrinho sem perder dados. (BREVEMENTE).
* **Cancelamento** Cancelamento de compra. (BREVEMENTE).


#### Usuário

* **Visualização** de todos usuário cadastrados na Loja. (BREVEMENTE).
* **Inserção** de um usuário na Loja. (BREVEMENTE).
* **Remoção** de um Usuário na Loja. (BREVEMENTE).
  * Apenas o `próprio usuário (cliente))` ou `usuário ADM` pode realizar esta operação.
* **Atualização** de dados de Usuário (BREVEMENTE).
  * Apenas o `próprio usuário (cliente))` ou ` usuário ADM`  pode realizar esta operação.

### Tecnologias usadas

* **Java Script**
* **React**
* **Redux**
* **CSS**

### Requisitos para configurar e rodar o projeto em modo desenvolvimento:

1. Ter **Node.js** instalado para que seja possível baixar as dependências necessaŕias via NPM.
2. Ter o servidor da [API de BackEnd](https://github.com/becauro/games-store-back) baixado.
3. Ter um **Browser** compatível com as últimas tecnologias de mercado ( ex.: _Chrome_ ou _Firefox_) para interação com a interface da Aplicação.

### Como configurar as dependências do projeto:

Um vez que no arquivo `package.json` é listado as dependências necessárias, basta digitar o seguinte comando, estando na pasta do repositório clonado:

    `npm install`

### Como configurar e executar o projeto:

1. Estando dentro pasta do projeto, basta executar o comando: `npm start` para que seja instalada e configurada as dependências necessárias.
2. Execute o servidor da [API de BackEnd](https://github.com/becauro/games-store-back) seguindo as orientações que constam no seu Readme.
3. Verifique no arquivo `src/api/backend_api.js` se a porta que aponta para o **servidor backend** está correta de acordo com a porta que de fato o servidor backend estar rodando. Caso contrário, mude da forma que achar melhor.
4. Em seguida, estando dentro da pasta do projeto, execute-o com o comando `npm start` e, caso o navegador não seja aberto  automáticamente com a aplicação, abra-o, manualmente, e digite: **http://127.0.0.1:3000** ( ou use com a porta que o Sistema Operacional escolher, caso a 3000 (padrão do `create react-app`) já esteja em uso).


## Futuras Funcionalidades:

**Cadastro** e **Login** de Usuários (Clientes) na plataforma, cada um tendo sua própria conta para gerenciamento de compras.

Além das funcionalidades já especificadas como "BREVEMENTE", na seção [Funcionalidades básicas](#funcionalidades-básicas), lembra ?

---

Chegou até ? Obrigado.
Aproveita e dê quele `code Review` pra ajudar ;-)

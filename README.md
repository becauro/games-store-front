# Boas vindas ao repositório Games Store (Frontend)

### Introdução:

Essa aplicação é um **E-commerce** de uma **Loja de Jogos**.

**Observação**: Por ora o projeto não teve foco na estética, pois ainda está em fase de desenvolvimento.

### Tem BACK ?

O **backend** é uma API que desenvolvi para ser utilizado pelo Frontend. Basicamente na API usei um Express com MongoDB. No entanto se encontra em [outro](https://github.com/becauro/games-store-back) repositório. 

Siga as instruções de cada repositório e conseguirá integrar ambos projetos.

### Funcionalidades


#### Produtos

* **Visualização** de todos produtos cadastrados na Loja.
* **Visualização** de todos produtos que inclui em seu nome a string digitada no campo do Filtro de busca.
* **Cadastro*** de novo produto na plataforma. (BREVEMENTE)
* **Remoção*** de um produto da plataforma. (BREVEMENTE)
* **Atualização*** de um produto na plataforma. (BREVEMENTE)

<span style="font-size: 12px"> (*) Apenas o `usuário ADM` pode realizar esta operação. </span>(BREVEMENTE)

#### Carrinho

* **Visualização*** de todos produtos no Carrinho da Loja.
* **Inserção*** de um produto no Carrinho.
* **Remoção*** de um produto do Carrinho.
* **Atualização*** de quantidade de um produto no Carrinho.
* **Encaminhamento*** para página de Checkout.

<span style="font-size: 12px"> (*) Apenas o `próprio usuário (cliente)` pode realizar esta operação. </span> (BREVEMENTE)

#### Checkout

* **Inserção*** de dados do cliente para compra do(s) produto(s).
* **Comprar*** os produtos.
* **Cancelamento*** de compra. (BREVEMENTE)

<span style="font-size: 12px"> (*) Apenas o `próprio usuário (cliente)` pode realizar esta operação. </span> (BREVEMENTE)

#### Usuário

* **Visualização** de todos usuário cadastrados na Loja. (BREVEMENTE)
  * Apenas o `usuário ADM` pode realizar esta operação. 
* **Cadastro** de usuário na Loja. (BREVEMENTE)
* **Remoção*** de um Usuário na Loja. (BREVEMENTE)
* **Atualização*** de dados de Usuário (BREVEMENTE)

<span style="font-size: 12px"> (*) Apenas o `próprio usuário (cliente)` ou `usuário ADM` pode realizar esta operação. </span> (BREVEMENTE)

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

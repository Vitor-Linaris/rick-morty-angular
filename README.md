# Rick and Morty Angular App

Este projeto é uma aplicação Angular que consome a API de Rick and Morty para exibir uma lista de personagens e detalhes de cada personagem. A aplicação permite realizar filtros múltiplos e possui scroll infinito para carregar mais personagens conforme o usuário rola a página.

## Requisitos

- Node.js (versão 12 ou superior)
- Angular CLI (versão 18 ou superior)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/Vitor-Linaris/rick-morty-angular.git
   cd rick-and-morty-angular-app

   ```

2. Instale as dependências:

   ```sh
   npm install

   ```

3. Executando a Aplicação

- Para executar a aplicação localmente, use o seguinte comando:

  ```sh
  ng serve

  ```

- A aplicação estará disponível em http://localhost:4200.

## Estrutura do Projeto

src/app/

- character-list/ - Componente para listar personagens com filtros e scroll infinito.
- character-detail/ - Componente para exibir os detalhes de um personagem.
- episode-list/ - Componente para listar episódios com filtros.
- episode-detail/ - Componente para exibir os detalhes de um episódio
- home/ - Componente para a página inicial com estatísticas gerais.
- rick-and-morty.service.ts - Serviço para consumir a API de Rick and Morty.

## Funcionalidades

Lista de Personagens
O componente CharacterListComponent exibe uma lista de personagens com a capacidade de aplicar múltiplos filtros e possui scroll infinito para carregar mais personagens.

- Filtros disponíveis:
- Nome
- Status
- Espécie

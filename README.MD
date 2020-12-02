

# Space X App

Esse projeto tem por finalidade mostrar todos os lançamentos de foguetes, buscando
da API disponibilizada pelo SpaceX, assistir um vídeo e ler um artigo sobre cada
lançamento, assim como aplicar um filtro de busca pelos resultados encontrados.

## Instalação
  - Baixe o arquivo ZIP do repositório ou faça um clone deste em sua máquina.
  - Escolha o package manager que irá utilizar para baixar as dependências
  - Caso esteja utilizando yarn, rode o comando:
    ```sh
       yarn
    ```
    Após isso, é só subir o projeto com o comando:
    ```sh
       react-native run-android
    ```

  - Caso esteja utilizando npm, rode o comando:
    ```sh
       npm i
    ```
    Após isso, é só subir o projeto com o comando:
    ```sh
       npx react-native run-android
    ```

    Para rodar os testes da aplicação, basta rodar:
    ```sh
       jest nomeTeste
    ```

### Detalhes

A Aplicação foi montada com 5 telas, uma HomePage Introdutória, que irá levar
à funcionalidade principal do aplicativo, que é o consumo da API utilizando [Axios](https://github.com/axios/axios). Toda a paginação foi feita utilizando o ***Stack Navigator*** biblioteca [React Navigation](https://reactnavigation.org/) 

A requisição é feita dentro do store da aplicação, que foi desenvolvido
utilizando o [redux](https://redux.js.org/).

Ao clicar em um componente, a aplicação abre uma tela mostrando os detalhes dos
lançamentos, e o usuário pode visualizar um artigo sobre o lançamento, ou
visualizar um vídeo do mesmo. Nessas telas, foram utilizados os componentes 
[react-native-webview](https://github.com/react-native-community/react-native-webview) e
[react-native-youtube](https://github.com/davidohayon669/react-native-youtube/tree/v1.1.0).

Por fim, foram implementados alguns testes simples para a aplicação, utilizando as
bibliotecas [jest](https://github.com/react-native-community/react-native-webview) e [react-native-testing-library](https://github.com/callstack/react-native-testing-library) para montar os testes, 
[axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) e [redux-mock-store](https://www.npmjs.com/package/redux-mock-store) para simular a busca dentro do store.

### Demonstração
Para ilustrar a utilização do aplicativo, seguem abaixo alguns prints.
<div class="row">
  <img src="https://imgur.com/9qc7TEU" width="20%" height="20%" />
  <img src="https://imgur.com/6RHtBC0" width="20%" height="20%" />
  <img src="https://imgur.com/undefined" width="20%" height="20%" />
  <img src="https://imgur.com/d56Gbca" width="20%" height="20%" />
  <img src="https://imgur.com/oLdMk7C" width="20%" height="20%" />
<div>
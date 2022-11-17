** Fase inicial de uma criação de API com Express **

1 - instalação do typescript, express e types para dependência de desenvolvimento

2 - instalação do ts-node para compilação do código TS para JS.

3 - instalação do nodemon para rodar o código sem precisar parar o servidor

4 - setup do eslint e editorconfig

5 - inicialização do server express

---

** Inicialização do container com docker para banco de dados **

1 - instalação do docker

2 - inicialização do docker com o comando `sudo service docker start`

3 - criação do container rodando o DB `docker run --name <nome do container> -p 27017:27017 - <nome da imagem>`

4 - estabelecer a comunicação com o db, será utilizado o mongoose

5 - instalação do mongoose `npm i mongoose`

6 - fazer a conexão com o db através do mongoose apontando para o local onde a imagem do db está rodando

---

** Após conexão com db e server estar rodando **

1 - fazer a criação dos models, rotas e usecase

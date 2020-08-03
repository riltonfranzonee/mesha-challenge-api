# Atividade 01 - API REST

Esse repositório contém o código referente à API REST da atividade 01 do processo seletivo da Mesha.

## :information_source: Instruções
É necessário ter instalado Docker, Node.js, e git.

Primeiramente, inicialize o container com o banco de dados PostgreSQL

```bash
$ docker run --name mesha-db -e POSTGRES_PASSWORD=meshachallenge -p 5432:5432 -d postgres
```

Com o container devidamente inicializado, vamos clonar o repositório e rodar as migrations:

```bash
# Clone o repositório
$ git clone https://github.com/riltonfranzonee/mesha-challenge-api

# Mude para a branch da versão final
$ git checkout final-version

# Entre na pasta
$ cd mesha-challenge-api

# Instale as dependências
$ yarn

# Rode as migrations
$ yarn sequelize db:migrate:all
```

Agora basta adicionar o arquivo .env na raíz do projeto com os seguintes valores:

```bash
APP_URL=http://localhost:3333
NODE_ENV=development

# Database

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=meshachallenge
DB_NAME=postgres
DB_DIALECT=postgres
```

Pronto! Para inicializar a API basta rodar o seguinte comando:

```bash
$ yarn dev
```


const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// Antes de todas as requisições, fazer o json ser compreendido pelo JS (via node)
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * npm: Instala um pacote
 * npx: Executa um pacote
*/

/** 
 * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no  back-end
 * DELETE: Deletar uma informação do backeend
*/

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Banco de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder (utilizando JS): table('users).select('*').where()
 *  utilizando Knex.js - http://knexjs.org/
*/
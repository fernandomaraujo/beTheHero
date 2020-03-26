const knex = require('knex');
const configuration = require('../../knexfile');

/**
 * Passando a configuração de desenvolvimento 
 * (pode-se checar arquivo knexfile.js)
*/
const connection = knex(configuration.development);

module.exports = connection;

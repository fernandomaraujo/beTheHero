
// Método up é responsável pela criação da tabela
exports.up = function(knex) {
  
  // Tabela e campos
  return knex.schema.createTable('ongs', function(table) {

    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// Método down: E se der algum problema e eu precisar voltar atrás?
// Caso queira deletar a criação da tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

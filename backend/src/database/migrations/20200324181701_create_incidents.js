exports.up = function(knex) {
  
  // Tabela e campos
  return knex.schema.createTable('incidents', function(table) {

    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('value').notNullable();

    // Coluna pra armazenar qual ong criou esse incident (caso)
    table.string('ong_id').notNullable();

    // Criando chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

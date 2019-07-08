exports.up = function(knex, Promise) {
  return knex.schema.createTable('types', types => {
    types
      .increments('type_id')
      .primary()
      .unsigned();
    types.string('type_desc').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('types');
};

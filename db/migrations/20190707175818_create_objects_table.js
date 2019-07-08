exports.up = function(knex, Promise) {
  return knex.schema.createTable('objects', objects => {
    objects
      .increments('object_id')
      .primary()
      .unsigned();
    objects
      .integer('object_type')
      .references('types.type_id')
      .notNullable();
    objects.string('object_brand');
    objects.string('object_model');
    objects.string('object_info', 10000);
    objects.string('object_imageurl');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('objects');
};

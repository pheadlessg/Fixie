exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users
      .increments('user_userid')
      .primary()
      .unsigned();
    users
      .string('user_username')
      .unique()
      .notNullable();
    users.string('user_name').notNullable();
    users.integer('user_canfix').references('objects.object_id');
    users.string('user_avatarurl');
    users.string('user_profile', 10000);
    users.string('user_location').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

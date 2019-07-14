exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments('id');
    users.string('email');
    users.string('password');
    users.string('role');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
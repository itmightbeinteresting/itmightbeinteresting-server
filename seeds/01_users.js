exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([{
        id: 1,
        email: `thoughts@itmightbeinteresting.com`,
        password: ``,
        role: `Admin`
      }]);
    })
    .then(() => knex.raw(`ALTER SEQUENCE users_id_seq RESTART WITH 2;`));
};
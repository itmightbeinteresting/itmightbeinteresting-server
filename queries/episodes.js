const database = require('../database-connection');

module.exports = {
  list() {
    return database('episodes').select();
  },
  read(slug) {
    return database('episodes').select().where('slug', slug).first();
  },
  create(slug) {
    return database('episodes')
      .insert()
      .where('slug', slug)
      .returning('*')
      .then(record => record[0]);
  },
  update(slug) {
    return database('episodes')
      .update()
      .where('slug', slug)
      .returning('*')
      .then(record => record[0]);
  },
  delete(slug) {
    return database('episodes').delete().where('slug', slug);
  }
};
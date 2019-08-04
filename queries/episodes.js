const database = require('../database-connection');

module.exports = {
  list() {
    return database('episodes').select();
  },
  read(slug) {
    return database('episodes').select().where('slug', slug).first();
  },
  create(id) {
    return database('episodes')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('episodes')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('episodes').delete().where('id', id);
  }
};
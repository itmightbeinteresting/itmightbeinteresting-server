exports.up = function (knex, Promise) {
  return knex.schema.createTable('episodes', episodes => {
    episodes.increments('id');
    episodes.datetime('added');
    episodes.string('title');
    episodes.string('slug');
    episodes.string('website_url');
    episodes.string('download_url');
    episodes.string('embed_url');
    episodes.string('itunes_url');
    episodes.string('youtube_url');
    episodes.string('spotify_url');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('episodes');
};
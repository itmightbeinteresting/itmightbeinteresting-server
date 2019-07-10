exports.seed = function (knex, Promise) {
  return knex('episodes').del()
    .then(function () {
      return knex('episodes').insert([{
        id: 1,
        added: `2019-07-01`,
        title: `Ep. 01: The State of Religion in America`,
        slug: `the-state-of-religion-in-america`,
        website_url: `https://itmightbeinteresting.com/01-the-state-of-religion-in-america`,
        download_url: `https://www.podbean.com/site/EpisodeDownload/PBB626E9UKDAR`,
        embed_url: `https://www.podbean.com/media/player/ukdar-b626e9&amp;?from=usersite&amp;vjs=1&amp;skin=2&amp;fonts=Helvetica&amp;auto=0&amp;download=1`,
        itunes_url: `https://podcasts.apple.com/us/podcast/ep-01-the-state-of-religion-in-america/id1471161206?i=1000443444097`,
        youtube_url: `https://www.youtube.com/watch?v=rHaUVgfpYEU`,
        spotify_url: `https://open.spotify.com/episode/6ekrpB011NxUt4VCZZoJ53?si=XZB2dR1ITaufYgGNGSfQvQ`
      }]);
    })
    .then(() => knex.raw(`ALTER SEQUENCE episodes_id_seq RESTART WITH 2;`));
};
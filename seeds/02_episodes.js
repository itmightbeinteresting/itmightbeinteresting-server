exports.seed = function (knex, Promise) {
  return knex('episodes').del()
    .then(function () {
      return knex('episodes').insert([
        {
          id: 1,
          added: `July 01, 2019`,
          title: `Ep. 01: The State of Religion in America`,
          slug: `01-the-state-of-religion-in-america`,
          website_url: `https://itmightbeinteresting.com/01-the-state-of-religion-in-america`,
          download_url: `https://www.podbean.com/site/EpisodeDownload/PBB626E9UKDAR`,
          embed_url: `https://www.podbean.com/media/player/ukdar-b626e9&amp;?from=usersite&amp;vjs=1&amp;skin=2&amp;fonts=Helvetica&amp;auto=0&amp;download=1`,
          itunes_url: `https://podcasts.apple.com/us/podcast/ep-01-the-state-of-religion-in-america/id1471161206?i=1000443444097`,
          youtube_url: `https://www.youtube.com/watch?v=rHaUVgfpYEU`,
          spotify_url: `https://open.spotify.com/episode/6ekrpB011NxUt4VCZZoJ53?si=XZB2dR1ITaufYgGNGSfQvQ`
        },
        {
          id: 2,
          added: `July 15, 2019`,
          title: `Ep. 02: The Decline of the American Economy`,
          slug: `02-the-decline-of-the-american-economy`,
          website_url: `https://itmightbeinteresting.com/02-the-decline-of-the-american-economy`,
          download_url: `https://www.podbean.com/site/EpisodeDownload/PBB74A29A7P3A`,
          embed_url: `https://www.podbean.com/media/player/a7p3a-b74a29?from=usersite&skin=1&share=1&fonts=Helvetica&auto=0&download=1&version=1`,
          itunes_url: `https://podcasts.apple.com/us/podcast/ep-02-the-decline-of-the-american-economy/id1471161206?i=1000444508279`,
          youtube_url: `https://www.youtube.com/watch?v=M94kN9eIbpM`,
          spotify_url: `https://open.spotify.com/episode/5cq7cg2blWVep4J8AkI3iQ?si=e9CUqPh9RVaahaRyw0qpcA`
        },
        {
          id: 3,
          added: `July 22, 2019`,
          title: `Ep. 03: The Media Diet - Part 1`,
          slug: `03-the-media-diet-part-1`,
          website_url: `https://itmightbeinteresting.com/03-the-media-diet-part-1`,
          download_url: `https://mcdn.podbean.com/mf/download/ifb7cr/It_Might_Be_Interesting_Ep_03.mp3`,
          embed_url: `https://www.podbean.com/media/player/audio/postId/12058157?url=https%3A%2F%2Fwww.podbean.com%2Few%2Fpb-i9f6i-b7fe2d&version=1`,
          itunes_url: `https://podcasts.apple.com/us/podcast/ep-03-the-media-diet-part-1/id1471161206?i=1000445030884`,
          youtube_url: `https://www.youtube.com/watch?v=VC-hXt_MJz0`,
          spotify_url: `https://open.spotify.com/episode/65HojaK5E1skSjsBpy5RbM?si=cyI-o6LERN2fFJxobTCKbg`
        },
        {
          id: 4,
          added: `July 29, 2019`,
          title: `Ep. 04: The Media Diet - Part 2`,
          slug: `04-the-media-diet-part-2`,
          website_url: `https://itmightbeinteresting.com/04-the-media-diet-part-2`,
          download_url: null,
          embed_url: null,
          itunes_url: null,
          youtube_url: null,
          spotify_url: null
        }
      ]);
    })
    .then(() => knex.raw(`ALTER SEQUENCE episodes_id_seq RESTART WITH 3;`));
};
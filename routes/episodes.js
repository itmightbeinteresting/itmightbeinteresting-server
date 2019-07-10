const express = require('express');
const router = express.Router();

const queries = require('../queries/episodes');

router.get('/', (request, response, next) => {
  queries.list('episodes').then(episodes => {
    response.json({
      episodes
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(episode => {
    episode
      ?
      response.json({
        episode
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(episode => {
    response.status(201).json({
      episode: episode
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(episode => {
    response.json({
      episode: episode[0]
    });
  }).catch(next);
});

module.exports = router;
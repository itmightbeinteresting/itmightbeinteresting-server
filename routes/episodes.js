const express = require('express');
const knex = require('../database-connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const router = module.exports = require('express').Router();

app.use(bodyParser.json());
app.use(cors());

router.get('/', getAll)
router.get('/:slug', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

function getAll(req, res, next) {
  knex('episodes')
    .select('*')
    .then(episodes => res.status(200).send({
      episodes: episodes
    }))
    .catch(next)
}

function getOne(req, res, next) {
  knex('episodes')
    .select('*')
    .limit(1)
    .where({
      slug: req.params.slug
    })
    .then(([episode]) => {
      if (!episode) return res.status(404).send({
        message: 'Item not found.'
      })
      res.status(200).send({
        episode: episode
      })
    })
    .catch(next)
}

function create(req, res, next) {
  knex('episodes')
    .insert(req.body)
    .then(() => res.status(201).json({
      episode: req.body
    }))
    .catch(next)
}

function update(req, res, next) {
  knex('episodes')
    .where({
      id: req.params.id
    })
    .update(req.body)
    .then(count => count >= 1 ?
      res.status(200).json({
        episode: req.body
      }) :
      res.status(410).json())
    .catch(next)
}

function remove(req, res, next) {
  knex('episodes').where({
      id: req.params.id
    })
    .delete()
    .then(count => count >= 1 ?
      res.status(204).json() :
      res.status(404).json({
        message: 'Unable to delete episode!'
      }))
    .catch(next)
}
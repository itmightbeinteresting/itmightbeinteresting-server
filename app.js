const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const episodes = require('./routes/episodes');
const users = require('./routes/users');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/episodes', episodes);
app.use('/api/users', users);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  });
});

module.exports = app;
const express = require('express');
const app = express();
const db = require('./models');
const fs = require('fs');
const path = require('path');
app.use(express.urlencoded());
app.use(express.json());
const { logger } = require('./winston');
const morgan = require('morgan');

const directors = db.directors;
const movies = db.movies;

const PORT = 9000;

//  Morgan logging
app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join('./logs/', 'access.log'), {
      flags: 'a'
    })
  })
);

// GET : to retrieve all directors

app.get('/directors', function(req, res) {
  directors
    .findAll()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      logger.error(err.stack);
      res.send(500);
    });
});

// GET : to retrieve a director

app.get('/directors/:directorId', function(req, res) {
  directors
    .findOne({ where: { id: req.params.directorId } })
    .then(results => {
      if (results !== null) {
        res.send(results);
      } else if (results === null) {
        res.sendStatus(404);
        logger.error({ message: 'id not found' });
      }
    })
    .catch(error => {
      logger.error({ message: `${error} enter correct id` });
      res.sendStatus(500);
    });
});

// POST : to add a new director

app.post('/directors', function(req, res) {
  directors
    .create({
      name: req.body.name
    })
    .then(function(results) {
      res.send(`Added on id ${results.null}`);
    })
    .catch(error => {
      logger.error({ message: `${error} in adding director` });
      res.sendStatus(500);
    });
});

// DELETE : to remove a director

app.delete('/directors/:directorId', function(req, res) {
  directors
    .destroy({ where: { id: req.params.directorId } })
    .then(results => {
      if (results === 1) {
        res.send('Deleted');
      } else if (results === 0) {
        res.sendStatus(404);
        logger.error({ message: 'id not found' });
      }
    })
    .catch(error => {
      logger.error({ message: `${error} in deleting this id` });
      res.sendStatus(500);
    });
});

// PUT : to update details of a director

app.put('/directors/:directorId', function(req, res) {
  directors
    .update(
      { name: req.body.director },
      { where: { id: req.params.directorId } }
    )
    .then(function(results) {
      if (results[0] === 0) {
        res.sendStatus(403);
        logger.error({ message: 'choose different id' });
      } else {
        res.sendStatus(202);
      }
    })
    .catch(error => {
      logger.error({ message: `${error} in updating director by id` });
      res.sendStatus(500);
    });
});

// GET : to retrieve all movies

app.get('/movies', function(req, res) {
  movies
    .findAll()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      logger.log(err.stack);
      res.sendStatus(500);
    });
});

// POST : to add a new movie

app.post('/movies', function(req, res) {
  movies
    .create({
      rank: req.body.rank,
      title: req.body.title,
      description: req.body.description,
      runtime: req.body.runtime,
      genre: req.body.genre,
      rating: req.body.rating,
      metascore: req.body.metascore,
      votes: req.body.votes,
      gross: req.body.gross,
      director: req.body.director,
      actor: req.body.actor,
      year: req.body.year
    })
    .then(function(results) {
      res.send(`Added on id ${results.null}`);
    })
    .catch(error => {
      logger.error({ message: `${error} in adding movie` });
      res.sendStatus(500);
    });
});

// DELETE : to remove a movie

app.delete('/movies/:moviesId', function(req, res) {
  movies
    .destroy({ where: { id: req.params.moviesId } })
    .then(function(results) {
      if (results === 1) {
        res.send('Deleted');
      } else if (results === 0) {
        res.sendStatus(404);
        logger.error({ message: 'id not found' });
      }
    })
    .catch(error => {
      logger.error({ message: `${error} in deleting this id` });
      res.sendStatus(500);
    });
});

// GET : to retrieve a movie

app.get('/movies/:moviesId', function(req, res) {
  movies
    .findOne({ where: { id: req.params.moviesId } })
    .then(results => {
      if (results !== null) {
        res.send(results);
      } else if (results === null) {
        res.sendStatus(404);
        logger.error({ message: 'id not found' });
      }
    })
    .catch(error => {
      logger.error({ message: `${error} enter correct id` });
      res.sendStatus(500);
    });
});

// PUT : to update details of a movie

app.put('/movies/:moviesId', function(req, res) {
  movies
    .update(
      {
        rank: req.body.rank,
        title: req.body.title,
        description: req.body.description,
        runtime: req.body.runtime,
        genre: req.body.genre,
        rating: req.body.rating,
        metascore: req.body.metascore,
        votes: req.body.votes,
        gross: req.body.gross,
        director: req.body.director,
        actor: req.body.actor,
        year: req.body.year
      },
      { where: { id: req.params.moviesId } }
    )
    .then(results => {
      if (results[0] === 0) {
        res.sendStatus(403);
      } else {
        res.sendStatus(202);
      }
    })
    .catch(error => {
      logger.error({ message: `${error} in updating movie by id` });
      res.sendStatus(500);
    });
});

app.listen(PORT, console.log(`Server started at ${PORT}`));

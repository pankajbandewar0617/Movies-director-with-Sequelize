/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');

const movie = fs.readFileSync('movies.json');
const movieData = JSON.parse(movie);

const movieDirector = [];
const insertMovie = () => {
  for (const i of movieData) {
    movieDirector.push({ name: i.Director });
  }
  return movieDirector;
};
insertMovie();

module.exports = { movieDirector };

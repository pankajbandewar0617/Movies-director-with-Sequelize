/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');

const movie = fs.readFileSync('movies.json');
const movieData = JSON.parse(movie);

const movieDetail = [];
const insertMovie = () => {
  for (const i of movieData) {
    for (let j in i) {
      if (i[j] === 'NA') {
        i[j] = 0;
      }
    }
    movieDetail.push({
      rank: i.Rank,
      title: i.Title,
      description: i.Description,
      runtime: i.Runtime,
      genre: i.Genre,
      rating: i.Rating,
      metascore: i.Metascore,
      votes: i.Votes,
      gross: i.Gross_Earning_in_Mil,
      director: i.Director,
      actor: i.Actor,
      year: i.Year
    });
  }
  return movieDetail;
};
insertMovie();

module.exports = { movieDetail };

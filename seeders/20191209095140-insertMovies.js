'use strict';

const { movieDetail } = require('../insertMovieData');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', movieDetail);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};

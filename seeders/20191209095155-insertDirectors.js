'use strict';

const { movieDirector } = require('../insertMovieDirector');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('directors', movieDirector);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};

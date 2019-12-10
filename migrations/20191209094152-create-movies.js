'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'movies',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        rank: {
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        runtime: {
          type: Sequelize.INTEGER
        },
        genre: {
          type: Sequelize.STRING
        },
        rating: {
          type: Sequelize.FLOAT
        },
        metascore: {
          type: Sequelize.FLOAT
        },
        votes: {
          type: Sequelize.INTEGER
        },
        gross: {
          type: Sequelize.FLOAT
        },
        director: {
          type: Sequelize.STRING
        },
        actor: {
          type: Sequelize.STRING
        },
        year: {
          type: Sequelize.INTEGER
        }
      },
      { timestamps: false }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};

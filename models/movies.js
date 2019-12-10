'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define(
    'movies',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      rank: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      runtime: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      metascore: DataTypes.FLOAT,
      votes: DataTypes.INTEGER,
      gross: DataTypes.FLOAT,
      director: DataTypes.STRING,
      actor: DataTypes.STRING,
      year: DataTypes.INTEGER
    },
    { timestamps: false }
  );
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};

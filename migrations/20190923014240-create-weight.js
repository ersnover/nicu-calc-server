'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Weights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      babyId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      deltaDay: {
        type: Sequelize.FLOAT
      },
      deltaBirthWeight: {
        type: Sequelize.FLOAT
      },
      avg7day: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Weights');
  }
};
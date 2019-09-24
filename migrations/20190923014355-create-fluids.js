'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fluids', {
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
      intake: {
        type: Sequelize.FLOAT
      },
      output: {
        type: Sequelize.FLOAT
      },
      net: {
        type: Sequelize.FLOAT
      },
      uop: {
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
    return queryInterface.dropTable('Fluids');
  }
};
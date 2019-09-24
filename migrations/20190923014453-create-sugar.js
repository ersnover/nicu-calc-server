'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sugars', {
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
      weight: {
        type: Sequelize.FLOAT
      },
      fluidRate: {
        type: Sequelize.FLOAT
      },
      dextroseConc: {
        type: Sequelize.FLOAT
      },
      gir: {
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
    return queryInterface.dropTable('Sugars');
  }
};
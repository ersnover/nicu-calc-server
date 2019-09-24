'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('biliTools', {
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
      birthDate: {
        type: Sequelize.DATE
      },
      currentAge: {
        type: Sequelize.INTEGER
      },
      bilirubin: {
        type: Sequelize.FLOAT
      },
      riskLevel: {
        type: Sequelize.STRING
      },
      onPhototherapy: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('biliTools');
  }
};
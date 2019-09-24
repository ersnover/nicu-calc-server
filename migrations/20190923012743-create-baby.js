'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Babies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomNum: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      birthWeight: {
        type: Sequelize.FLOAT
      },
      gestAge: {
        type: Sequelize.INTEGER
      },
      correctedGestAge: {
        type: Sequelize.INTEGER
      },
      lifeDay: {
        type: Sequelize.INTEGER
      },
      docId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Babies');
  }
};
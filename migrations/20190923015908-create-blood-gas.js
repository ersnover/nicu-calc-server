'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BloodGas', {
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
      pH: {
        type: Sequelize.FLOAT
      },
      co2: {
        type: Sequelize.FLOAT
      },
      bicarb: {
        type: Sequelize.FLOAT
      },
      pao2: {
        type: Sequelize.FLOAT
      },
      apm: {
        type: Sequelize.FLOAT
      },
      fio2: {
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
    return queryInterface.dropTable('BloodGas');
  }
};
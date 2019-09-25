'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Weights',
      'weight',
      {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Weights',
      'weight',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    )
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Babies',
        'lifeDay'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Babies',
      'lifeDay',
      {
        type: Sequelize.INTEGER,
      }
    )
  }
};

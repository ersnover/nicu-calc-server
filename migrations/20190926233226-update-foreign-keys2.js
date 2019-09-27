'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'Weights',
        'babyId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Babies',
            key: 'id'
          }
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Weights',
      'babyId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    )
  }
};

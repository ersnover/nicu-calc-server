'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define('Weight', {
    babyId: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    date: DataTypes.DATE,
    deltaDay: DataTypes.FLOAT,
    deltaBirthWeight: DataTypes.FLOAT,
    avg7day: DataTypes.FLOAT
  }, {});
  Weight.associate = function(models) {
    Weight.belongsTo(models.Baby, {as: 'baby', foreignKey: 'babyId'})
  };
  return Weight;
};
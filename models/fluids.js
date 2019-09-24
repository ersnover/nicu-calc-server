'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fluids = sequelize.define('Fluids', {
    babyId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    intake: DataTypes.FLOAT,
    output: DataTypes.FLOAT,
    net: DataTypes.FLOAT,
    uop: DataTypes.FLOAT
  }, {});
  Fluids.associate = function(models) {
    Fluids.belongsTo(models.Baby, {as: 'baby', foreignKey: 'babyId'})
  };
  return Fluids;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sugar = sequelize.define('Sugar', {
    babyId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    weight: DataTypes.FLOAT,
    fluidRate: DataTypes.FLOAT,
    dextroseConc: DataTypes.FLOAT,
    gir: DataTypes.FLOAT
  }, {});
  Sugar.associate = function(models) {
    Sugar.belongsTo(models.Baby, {as: 'baby', foreignKey: 'babyId'})
  };
  return Sugar;
};
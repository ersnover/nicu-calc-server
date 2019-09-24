'use strict';
module.exports = (sequelize, DataTypes) => {
  const BloodGas = sequelize.define('BloodGas', {
    babyId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    pH: DataTypes.FLOAT,
    co2: DataTypes.FLOAT,
    bicarb: DataTypes.FLOAT,
    pao2: DataTypes.FLOAT,
    apm: DataTypes.FLOAT,
    fio2: DataTypes.FLOAT
  }, {});
  BloodGas.associate = function(models) {
    BloodGas.belongsTo(models.Baby, {as: 'baby', foreignKey: 'babyId'})
    };
  return BloodGas;
};
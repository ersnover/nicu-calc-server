'use strict';
module.exports = (sequelize, DataTypes) => {
  const Baby = sequelize.define('Baby', {
    roomNum: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    birthWeight: DataTypes.FLOAT,
    gestAge: DataTypes.INTEGER,
    docId: DataTypes.INTEGER
  }, {});
  Baby.associate = function(models) {
    Baby.belongsTo(models.User, {as: 'doctor', foreignKey: 'docId'})
    
    Baby.hasMany(models.Weight, {as: 'weights', foreignKey: 'babyId'})
    Baby.hasMany(models.Fluids, {as: 'fluids', foreignKey: 'babyId'})
    Baby.hasMany(models.Sugar, {as: 'sugars', foreignKey: 'babyId'})
    Baby.hasMany(models.biliTool, {as: 'biliTools', foreignKey: 'babyId'})
    Baby.hasMany(models.BloodGas, {as: 'bloodGases', foreignKey: 'babyId'})
  };
  return Baby;
};
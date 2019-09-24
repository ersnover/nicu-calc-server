'use strict';
module.exports = (sequelize, DataTypes) => {
  const biliTool = sequelize.define('biliTool', {
    babyId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    birthDate: DataTypes.DATE,
    currentAge: DataTypes.INTEGER,
    bilirubin: DataTypes.FLOAT,
    riskLevel: DataTypes.STRING,
    onPhototherapy: DataTypes.BOOLEAN
  }, {});
  biliTool.associate = function(models) {
    biliTool.belongsTo(models.Baby, {as: 'baby', foreignKey: 'babyId'})
  };
  return biliTool;
};
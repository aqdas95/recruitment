'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cities = sequelize.define('Cities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING ,
      allowNull: false,
    },  
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    }
  });

  Cities.associate = function (models) {
    Cities.hasMany(models.Areas, { as: 'Areas', foreignKey: 'cityId' });

  }
  return Cities;
};
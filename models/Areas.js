'use strict';
module.exports = (sequelize, DataTypes) => {
  var Areas = sequelize.define('Areas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name:{ 
    	type: DataTypes.STRING
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Cities',
          key: 'id'
        }
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
  },
   {
    freezeTableName: true,
    tableName: 'Areas'

  });
  Areas.associate = function(models) {
  	Areas.belongsTo(models.Cities, {
      as: 'Cities', 
        onDelete: "CASCADE",
        foreignKey: 'cityId'
    });
    Areas.hasMany(models.CandidateAreas, { as: 'CandidateAreas', foreignKey: 'areaId' });
    Areas.hasMany(models.HospitalSubSites, { as: 'HospitalSubSites', foreignKey: 'areaId' });
  }
  return Areas;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var CandidateAreas = sequelize.define('CandidateAreas', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    areaId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Areas',
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
  });
  CandidateAreas.associate = function (models) {
    CandidateAreas.belongsTo(models.CandidatesProfile, { onDelete: "CASCADE", foreignKey: 'candidateId' });
    CandidateAreas.belongsTo(models.Areas, {  as: 'Areas',onDelete: "CASCADE", foreignKey: 'areaId' });
  }
  return CandidateAreas;
};
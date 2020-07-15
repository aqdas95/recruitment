'use strict';
module.exports = (sequelize, DataTypes) => {
  var CandidateNotIntrestedHospitals = sequelize.define('CandidateNotIntrestedHospitals', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },

    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Hospitals',
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
  }, {
      tableName: 'CandidateNotIntrestedHospitals'
    });
  return CandidateNotIntrestedHospitals;
};
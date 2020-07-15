'use strict';
module.exports = (sequelize, DataTypes) => {
  var CandidateComplianceStatus = sequelize.define('CandidateComplianceStatus', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    documentTypeId: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      references: {
        model: 'DocumentTypes',
        key: 'id'
      },
    },
    expiryStatus: {
      type: DataTypes.ENUM('Expired', 'Almost Expired', 'Valid', 'Default'),
      defaultValue: 'Default'
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
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
      tableName: 'CandidateComplianceStatus'

    });

  CandidateComplianceStatus.associate = function (models) {
    CandidateComplianceStatus.belongsTo(models.CandidatesProfile, {
      as: 'CandidatesProfile',
      onDelete: "CASCADE",
      foreignKey: 'candidateId'
    });

    CandidateComplianceStatus.belongsTo(models.DocumentTypes, {
      as: "DocumentTypes",
      onDelete: "CASCADE",
      foreignKey: 'documentTypeId'
    });
  }

  return CandidateComplianceStatus;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlacklistCandidates = sequelize.define('BlacklistCandidates', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    blacklistHospitalSiteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BlacklistCandidatesHospitalsSites',
        key: 'id'
      }
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    }
  }, {
      tableName: 'BlacklistCandidates',
      freezeTableName: true,
    });
  BlacklistCandidates.associate = function (models) {
    BlacklistCandidates.belongsTo(models.CandidatesProfile, {
      onDelete: "CASCADE",
      foreignKey: 'candidateId'
    });

    BlacklistCandidates.belongsTo(models.BlacklistCandidatesHospitalsSites, {
      as: "BlacklistCandidatesHospitalsSites",
      foreignKey: 'blacklistHospitalSiteId',
      onDelete: "CASCADE"
    });
  };
  return BlacklistCandidates;
};
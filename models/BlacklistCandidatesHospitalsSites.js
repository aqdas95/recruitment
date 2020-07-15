module.exports = function (sequelize, DataTypes) {
  var BlacklistCandidatesHospitalsSites = sequelize.define('BlacklistCandidatesHospitalsSites', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Hospitals',
        key: 'id'
      }
    },
    hospitalSubSitesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HospitalSubSites',
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
      tableName: 'BlacklistCandidatesHospitalsSites',
      freezeTableName: true
    });

  BlacklistCandidatesHospitalsSites.associate = function (models) {
    BlacklistCandidatesHospitalsSites.belongsTo(models.Hospitals, {
      as: 'Hospitals',
      onDelete: "CASCADE",
      foreignKey: 'hospitalId'
    });

    BlacklistCandidatesHospitalsSites.belongsTo(models.HospitalSubSites, {
      as: 'HospitalSubSites',
      onDelete: "CASCADE",
      foreignKey: 'hospitalSubSitesId'
    });

    BlacklistCandidatesHospitalsSites.hasMany(models.BlacklistCandidates, {
      as: "BlacklistCandidates",
      foreignKey: 'blacklistHospitalSiteId',
      onDelete: "CASCADE"
    });
  }

  return BlacklistCandidatesHospitalsSites;
};

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var JobBroadCasts = sequelize.define(
    "JobBroadCasts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      vacancieId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Vacancies",
          key: "id",
        },
      },
      recruiterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
      },
      candidateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "CandidatesProfile",
          key: "id",
        },
      },
      candidateResponce: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0",
      },
      jobRead: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      isSentToClient: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAtManualSentClient: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: null,
      },
      isFailure: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "JobBroadCasts",
      freezeTableName: true,
    }
  );

  JobBroadCasts.associate = function (models) {
    JobBroadCasts.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });

    JobBroadCasts.belongsTo(models.CandidatesProfile, {
      as: "CandidatesProfile",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    JobBroadCasts.belongsTo(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "recruiterId",
    });

    JobBroadCasts.hasOne(models.CandidateAppliedJobs, {
      as: "CandidateAppliedJobs",
      foreignKey: "jobBroadCastsId",
    });
    JobBroadCasts.hasOne(models.Negotiations, {
      as: "Negotiations",
      foreignKey: "jobBroadCastsId",
    });
  };

  return JobBroadCasts;
};

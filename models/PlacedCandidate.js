/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var PlacedCandidate = sequelize.define(
    "PlacedCandidate",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      vacancieId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Vacancies",
          key: "id",
        },
      },
      documentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
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
      candidateAppliedJobId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "CandidateAppliedJobs",
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
      jobRead: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
      },
    },
    {
      tableName: "PlacedCandidate",
    }
  );

  PlacedCandidate.associate = function (models) {
    PlacedCandidate.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });

    PlacedCandidate.belongsTo(models.Documents, {
      as: "Documents",
      onDelete: "CASCADE",
      foreignKey: "documentId",
    });

    PlacedCandidate.belongsTo(models.CandidateAppliedJobs, {
      as: "CandidateAppliedJobs",
      onDelete: "CASCADE",
      foreignKey: "candidateAppliedJobId",
    });

    PlacedCandidate.belongsTo(models.CandidatesProfile, {
      as: "CandidatesProfile",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });
  };

  return PlacedCandidate;
};

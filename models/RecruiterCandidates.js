/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var RecruiterCandidates = sequelize.define(
    "RecruiterCandidates",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      tableName: "RecruiterCandidates",
    }
  );
  RecruiterCandidates.associate = function (models) {
    RecruiterCandidates.belongsTo(models.CandidatesProfile, {
      as: "CandidatesProfile",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });
    RecruiterCandidates.belongsTo(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "recruiterId",
    });
  };
  return RecruiterCandidates;
};

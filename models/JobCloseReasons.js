"use strict";
module.exports = function (sequelize, DataTypes) {
  var JobCloseReasons = sequelize.define(
    "JobCloseReasons",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      reason: {
        type: DataTypes.STRING,
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
      reasonType: {
        type: DataTypes.ENUM,
        values: ["Close", "Pending"],
      },
    },
    {
      tableName: "JobCloseReasons",
    }
  );

  JobCloseReasons.associate = function (models) {
    JobCloseReasons.hasMany(models.JobClose, {
      as: "JobClose",
      onDelete: "CASCADE",
      foreignKey: "jobCloseReasonsId",
    });

    JobCloseReasons.hasMany(models.CandidateAppliedJobs, {
      as: "CandidateAppliedJobs",
      onDelete: "CASCADE",
      foreignKey: "jobCloseReasonsId",
    });
  };

  return JobCloseReasons;
};

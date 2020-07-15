"use strict";
module.exports = function (sequelize, DataTypes) {
  var JobClose = sequelize.define(
    "JobClose",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comments: {
        type: DataTypes.STRING,
      },
      jobCloseReasonsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: "JobCloseReasons",
          key: "id",
        },
      },
      vacancieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      isSystemClosed: {
        type: DataTypes.BOOLEAN,
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
      tableName: "JobCloses",
    }
  );

  JobClose.associate = function (models) {
    JobClose.belongsTo(models.JobCloseReasons, {
      as: "JobCloseReasons",
      onDelete: "CASCADE",
      foreignKey: "jobCloseReasonsId",
    });

    JobClose.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });

    JobClose.belongsTo(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "recruiterId",
    });
  };

  return JobClose;
};

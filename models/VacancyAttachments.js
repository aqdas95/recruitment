"use strict";
module.exports = (sequelize, DataTypes) => {
  var VacancyAttachments = sequelize.define(
    "VacancyAttachments",
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
      filePath: {
        type: DataTypes.STRING,
      },
      fileName: {
        type: DataTypes.STRING,
      },
      modifiedFileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileType: {
        type: DataTypes.STRING,
      },
      isInternalFile: {
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
      tableName: "VacancyAttachments",
    }
  );

  VacancyAttachments.associate = function (models) {
    VacancyAttachments.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });
  };

  return VacancyAttachments;
};

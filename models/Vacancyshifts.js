"use strict";
module.exports = (sequelize, DataTypes) => {
  var VacancyShifts = sequelize.define("VacancyShifts", {
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
    startDate: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
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
  });
  VacancyShifts.associate = function (models) {
    VacancyShifts.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });
  };

  return VacancyShifts;
};

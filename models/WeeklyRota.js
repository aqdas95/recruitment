"use strict";
module.exports = (sequelize, DataTypes) => {
  var WeeklyRota = sequelize.define(
    "WeeklyRota",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
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
      day: {
        type: DataTypes.ENUM("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"),
        allowNull: true,
        defaultValue: "Mon",
      },
      startTime: {
        type: DataTypes.TIME,
      },
      endTime: {
        type: DataTypes.TIME,
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
      tableName: "WeeklyRota",
    }
  );

  WeeklyRota.associate = function (models) {
    WeeklyRota.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });
  };

  return WeeklyRota;
};

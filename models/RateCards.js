"use strict";
module.exports = function (sequelize, DataTypes) {
  var RateCards = sequelize.define(
    "RateCards",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rateCard: {
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
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "RateCards",
    }
  );

  RateCards.associate = function (models) {
    RateCards.hasMany(models.Hospitals, {
      as: "Hospitals",
      onDelete: "CASCADE",
      foreignKey: "rateCardId",
    });

    RateCards.hasMany(models.RateCardGradeSpecialties, {
      as: "RateCardGradeSpecialties",
      onDelete: "CASCADE",
      foreignKey: "rateCardId",
    });
  };

  return RateCards;
};

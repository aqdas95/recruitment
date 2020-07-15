"use strict";
module.exports = function (sequelize, DataTypes) {
  var RateCardGradeSpecialties = sequelize.define(
    "RateCardGradeSpecialties",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rateCardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "RateCards",
          key: "id",
        },
      },
      gradeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Grades",
          key: "id",
        },
      },
      specialityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Specialities",
          key: "id",
        },
      },
      payRate: {
        type: DataTypes.FLOAT,
      },
      commission: {
        type: DataTypes.FLOAT,
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
      tableName: "RateCardGradeSpecialties",
    }
  );

  RateCardGradeSpecialties.associate = function (models) {
    RateCardGradeSpecialties.belongsTo(models.Grades, {
      as: "Grades",
      onDelete: "CASCADE",
      foreignKey: "gradeId",
    });

    RateCardGradeSpecialties.belongsTo(models.Specialities, {
      as: "Specialities",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });

    RateCardGradeSpecialties.belongsTo(models.RateCards, {
      as: "RateCards     ",
      onDelete: "CASCADE",
      foreignKey: "rateCardId",
    });
  };
  return RateCardGradeSpecialties;
};

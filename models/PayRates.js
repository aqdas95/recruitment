"use strict";
module.exports = function (sequelize, DataTypes) {
  var PayRates = sequelize.define(
    "PayRates",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      payRate: {
        type: DataTypes.FLOAT,
      },
      commission: {
        type: DataTypes.FLOAT,
      },
      hospitalsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Hospitals",
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
      tableName: "PayRates",
    }
  );

  PayRates.associate = function (models) {
    PayRates.belongsTo(models.Hospitals, {
      as: "Hospitals",
      onDelete: "CASCADE",
      foreignKey: "hospitalsId",
    });
    PayRates.belongsTo(models.Grades, {
      as: "Grades",
      onDelete: "CASCADE",
      foreignKey: "gradeId",
    });
    PayRates.belongsTo(models.Specialities, {
      as: "Specialities",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });
    // PayRates.hasOne(models.Hospitals, {as: 'Hospitals', foreignKey: 'hospitalsId'});
    // PayRates.hasOne(models.Grades, {as: 'Grades', foreignKey: 'gradeId'});
    // PayRates.hasOne(models.Specialities, {as: 'Specialities', foreignKey: 'specialityId'});
  };

  return PayRates;
};

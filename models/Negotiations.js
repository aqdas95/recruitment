"use strict";
module.exports = (sequelize, DataTypes) => {
  var Negotiations = sequelize.define(
    "Negotiations",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      jobBroadCastsId: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        references: {
          model: "JobBroadCasts",
          onDelete: "restrict",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      },
      rateAgreed: {
        type: DataTypes.FLOAT,
      },
      additionalComments: {
        type: DataTypes.STRING,
      },
      internalNotes: {
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
    },
    {
      tableName: "Negotiations",
    }
  );

  Negotiations.associate = function (models) {
    Negotiations.belongsTo(models.JobBroadCasts, {
      as: "JobBroadCasts",
      onDelete: "CASCADE",
      foreignKey: "jobBroadCastsId",
    });
  };

  return Negotiations;
};

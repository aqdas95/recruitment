"use strict";
module.exports = function (sequelize, DataTypes) {
  var PaymentTypes = sequelize.define(
    "PaymentTypes",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      payType: {
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
      tableName: "PaymentTypes",
    }
  );

  PaymentTypes.associate = function (models) {
    PaymentTypes.hasOne(models.CandidatesProfile, {
      as: "CandidatesProfile",
      onDelete: "CASCADE",
      foreignKey: "paymentTypeId",
    });
  };

  return PaymentTypes;
};

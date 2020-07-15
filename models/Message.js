"use strict";
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define(
    "Message",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      tableName: "Message",
    }
  );

  Message.associate = function (models) {
    Message.hasMany(models.CandidateNotifications, {
      as: "CandidateNotifications",
      onDelete: "CASCADE",
      foreignKey: "messageId",
    });

    Message.belongsTo(models.Users, {
      as: "Users",
      onDelete: "CASCADE",
      foreignKey: "createdBy",
    });
  };

  return Message;
};

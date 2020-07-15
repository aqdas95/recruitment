"use strict";
module.exports = (sequelize, DataTypes) => {
  var UserSessions = sequelize.define(
    "UserSessions",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      jwtToken: {
        type: DataTypes.STRING,
      },
      lastLoginTime: {
        type: DataTypes.TIME,
      },
      isLogedIn: {
        type: DataTypes.BOOLEAN,
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
      freezeTableName: true,
      tableName: "UserSessions",
    }
  );

  UserSessions.associate = function (models) {
    UserSessions.belongsTo(models.Users, {
      as: "Users",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });
  };

  return UserSessions;
};

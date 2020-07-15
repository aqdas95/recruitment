/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Roles",
          key: "id",
        },
      },
      smsCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      smsCodeSentAt: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tokenSentAt: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      verified: {
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
      deviceToken: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      resetEmailToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      emailTokenSentAt: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      isAndroid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isAgreement: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      isPreferenceSaved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "Users",
    }
  );

  User.associate = function (models) {
    User.hasOne(models.CandidatesProfile, {
      as: "CandidatesProfile",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });

    User.hasOne(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });
    User.hasOne(models.ComplianceProfiles, {
      as: "ComplianceProfiles",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });

    User.hasMany(models.Message, {
      as: "Message",
      onDelete: "CASCADE",
      foreignKey: "createdBy",
    });
  };

  return User;
};

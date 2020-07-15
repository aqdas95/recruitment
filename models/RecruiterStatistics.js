/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var RecruiterStatistics = sequelize.define(
    "RecruiterStatistics",
    {
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
      recruiterProfileId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
      },
      read: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      unread: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      sentToClient: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      toAction: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      shortList: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notIntrested: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pending: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sentAll: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      autoSentToClient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      manualSentToClient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "RecruiterStatistics",
    }
  );

  RecruiterStatistics.associate = function (models) {
    RecruiterStatistics.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancieId",
    });

    RecruiterStatistics.belongsTo(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "recruiterProfileId",
    });
  };

  return RecruiterStatistics;
};

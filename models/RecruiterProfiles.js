/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var RecruiterProfiles = sequelize.define(
    "RecruiterProfiles",
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
      code: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Team",
          key: "id",
        },
      },
      candidateColor: {
        type: DataTypes.STRING,
        allowNull: true,
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
      designation: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      isOnLeave: {
        type: DataTypes.BOOLEAN,
        allowNULL: true,
        defaultValue: false,
      },
      alternateRecruiterId: {
        type: DataTypes.INTEGER,
        allowNULL: true,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
      },
      leaveFrom: {
        type: DataTypes.TIME,
        allowNULL: true,
      },
      leaveTo: {
        type: DataTypes.TIME,
        allowNULL: true,
      },
      autoNumber: {
        type: DataTypes.INTEGER,
        allowNULL: true,
      },
    },
    {
      tableName: "RecruiterProfiles",
    }
  );

  RecruiterProfiles.associate = function (models) {
    RecruiterProfiles.belongsTo(models.RecruiterProfiles, {
      as: "RecruiterProfile",
      onDelete: "CASCADE",
      foreignKey: "alternateRecruiterId",
    });

    RecruiterProfiles.hasMany(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "alternateRecruiterId",
    });

    RecruiterProfiles.belongsTo(models.Users, {
      as: "Users",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });

    RecruiterProfiles.hasMany(models.RecruiterStatistics, {
      as: "RecruiterStatistics",
      onDelete: "CASCADE",
      foreignKey: "recruiterProfileId",
    });

    RecruiterProfiles.hasMany(models.RecruiterCandidates, {
      as: "RecruiterCandidates",
      onDelete: "CASCADE",
      foreignKey: "recruiterId",
    });

    RecruiterProfiles.hasMany(models.RecruiterSpecialities, {
      as: "RecruiterSpecialities",
      onDelete: "CASCADE",
      foreignKey: "recruiterId",
    });
    RecruiterProfiles.belongsTo(models.Team, {
      as: "Team",
      onDelete: "CASCADE",
      foreignKey: "teamId",
    });
  };
  return RecruiterProfiles;
};

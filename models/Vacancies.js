/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Vacancies = sequelize.define(
    "Vacancies",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      autoNumber: {
        type: DataTypes.NUMERIC(50, 0),
      },
      refNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      hospitalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Hospitals",
          key: "id",
        },
      },
      onCallRota: {
        type: DataTypes.STRING,
      },
      additionalInfo: {
        type: DataTypes.TEXT,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      submissionEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gradeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      status: {
        type: DataTypes.ENUM("Active", "Placed", "Closed"),
        defaultValue: "Active",
      },
      startDate: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.TIME,
        allowNull: false,
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
      processed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vacancyType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      checkListRequired: {
        type: DataTypes.BOOLEAN,
      },
      vacancyViaPortal: {
        type: DataTypes.BOOLEAN,
      },
      portalId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Portal",
          key: "id",
        },
      },
      hospitalSubSitesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "HospitalSubSites",
          key: "id",
        },
      },
      contactPersonId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "ContactPerson",
          key: "id",
        },
      },
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Brand",
          key: "id",
        },
      },
    },
    {
      tableName: "Vacancies",
      freezeTableName: true,
    }
  );

  Vacancies.associate = function (models) {
    Vacancies.hasMany(models.JobBroadCasts, {
      as: "JobBroadCasts",
      foreignKey: "vacancieId",
    });

    Vacancies.hasMany(models.RecruiterStatistics, {
      as: "RecruiterStatistics",
      foreignKey: "vacancieId",
    });

    Vacancies.hasMany(models.WeeklyRota, {
      as: "WeeklyRota",
      foreignKey: "vacancieId",
    });

    Vacancies.hasMany(models.VacancyAttachments, {
      as: "VacancyAttachments",
      foreignKey: "vacancieId",
    });

    Vacancies.hasOne(models.JobClose, {
      as: "JobClose",
      foreignKey: "vacancieId",
    });

    Vacancies.hasOne(models.PlacedCandidate, {
      as: "PlacedCandidate",
      foreignKey: "vacancieId",
    });

    Vacancies.belongsTo(models.Hospitals, {
      as: "Hospitals",
      onDelete: "CASCADE",
      foreignKey: "hospitalId",
    });

    Vacancies.belongsTo(models.Users, {
      as: "Users",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });

    Vacancies.belongsTo(models.HospitalSubSites, {
      as: "HospitalSubSites",
      onDelete: "CASCADE",
      foreignKey: "hospitalSubSitesId",
    });
    Vacancies.hasMany(models.VacancyShifts, {
      as: "VacancyShifts",
      foreignKey: "vacancieId",
    });
    Vacancies.hasMany(models.VacancySchedule, {
      as: "VacancySchedule",
      foreignKey: "vacancyId",
    });

    Vacancies.belongsTo(models.Portals, {
      as: "Portals",
      foreignKey: "portalId",
    });
    Vacancies.belongsTo(models.Brands, { as: "Brands", foreignKey: "brandId" });

    Vacancies.belongsTo(models.ContactPerson, {
      as: "ContactPerson",
      foreignKey: "contactPersonId",
    });

    Vacancies.belongsTo(models.Grades, { as: "Grades", foreignKey: "gradeId" });

    Vacancies.belongsTo(models.Specialities, {
      as: "Specialities",
      foreignKey: "specialityId",
    });
  };

  return Vacancies;
};

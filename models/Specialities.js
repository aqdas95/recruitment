/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Specialities = sequelize.define(
    "Specialities",
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
      description: {
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
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "Specialities",
      freezeTableName: true,
    }
  );

  Specialities.associate = function (models) {
    Specialities.hasMany(models.CandidateSpeciality, {
      as: "CandidateSpeciality",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });

    Specialities.hasMany(models.CandidatesRegistrationSpeciality, {
      as: "CandidatesRegistrationSpeciality",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });

    Specialities.hasMany(models.CandidateChangeRequestSpecialities, {
      as: "CandidateChangeRequestSpecialities",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });

    Specialities.hasMany(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });

    Specialities.hasMany(models.PayRates, {
      as: "PayRates",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });

    Specialities.hasMany(models.RateCardGradeSpecialties, {
      as: "RateCardGradeSpecialties",
      onDelete: "CASCADE",
      foreignKey: "specialityId",
    });
  };

  return Specialities;
};

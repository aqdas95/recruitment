/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Grades = sequelize.define('Grades', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
      tableName: 'Grades',
      freezeTableName: true,
    });

  Grades.associate = function (models) {

    Grades.hasOne(models.CandidateGrade, {
      as: 'CandidateGrade',
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });

    Grades.hasMany(models.CandidatesRegistrationGrade, {
      as: 'CandidatesRegistrationGrade',
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });

    Grades.hasMany(models.CandidateChangeRequestSpecialities, {
      as: "CandidateChangeRequestSpecialities",
      onDelete: "CASCADE",
      foreignKey: 'candidateGradeId'
    });

    Grades.hasMany(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });

    Grades.hasMany(models.PayRates, {
      as: "PayRates",
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });

    Grades.hasMany(models.RateCardGradeSpecialties, {
      as: "RateCardGradeSpecialties",
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });

  }
  return Grades;
};

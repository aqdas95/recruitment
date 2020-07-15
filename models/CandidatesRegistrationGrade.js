/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidatesRegistrationGrade = sequelize.define('CandidatesRegistrationGrade', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    candidateRegistrationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesRegistration',
        key: 'id'
      }
    },
    gradeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Grades',
        key: 'id'
      }
    },
    gradeType: {
      type: DataTypes.ENUM("Primary", "Secondary", "Tertiary"),
      allowNull: true,
      defaultValue: 'Primary'
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
    }
  }, {
      tableName: 'CandidatesRegistrationGrade'
    });

  CandidatesRegistrationGrade.associate = function (models) {

    CandidatesRegistrationGrade.belongsTo(models.CandidatesRegistration, {
      onDelete: "CASCADE",
      foreignKey: 'candidateRegistrationId'
    });

    CandidatesRegistrationGrade.belongsTo(models.Grades, {
      as: 'Grades',
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });

    CandidatesRegistrationGrade.hasMany(models.CandidatesRegistrationSpeciality, {
      as: 'CandidatesRegistrationSpeciality',
      onDelete: "CASCADE",
      foreignKey: 'CandidatesRegistrationGradeId'
    });
    
  }

  return CandidatesRegistrationGrade;
};

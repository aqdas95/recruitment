/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidatesRegistrationSpeciality = sequelize.define('CandidatesRegistrationSpeciality', {
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
    CandidatesRegistrationGradeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesRegistrationGrade',
        key: 'id'
      }
    },
    specialityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Specialities',
        key: 'id'
      }
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
      tableName: 'CandidatesRegistrationSpeciality'
    });

    CandidatesRegistrationSpeciality.associate = function (models) {

      CandidatesRegistrationSpeciality.belongsTo(models.CandidatesRegistration, {
      onDelete: "CASCADE",
      foreignKey: 'candidateRegistrationId'
    });

    CandidatesRegistrationSpeciality.belongsTo(models.CandidatesRegistrationGrade, {
      as:'CandidatesRegistrationGrade',
      onDelete: "CASCADE",
      foreignKey: 'CandidatesRegistrationGradeId'
    });
    
    CandidatesRegistrationSpeciality.belongsTo(models.Specialities, {
      as:'Specialities',
      onDelete: "CASCADE",
      foreignKey: 'specialityId'
    });

  }

  return CandidatesRegistrationSpeciality;
};

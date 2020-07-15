/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidateSpeciality = sequelize.define('CandidateSpeciality', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    candidateGradeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidateGrade',
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
      tableName: 'CandidateSpeciality'
    });

  CandidateSpeciality.associate = function (models) {

    CandidateSpeciality.belongsTo(models.CandidatesProfile, {
      onDelete: "CASCADE",
      foreignKey: 'candidateId'
    });

    CandidateSpeciality.belongsTo(models.CandidateGrade, {
      as:'CandidateGrade',
      onDelete: "CASCADE",
      foreignKey: 'candidateGradeId'
    });
    
    CandidateSpeciality.belongsTo(models.Specialities, {
      as:'Specialities',
      onDelete: "CASCADE",
      foreignKey: 'specialityId'
    });

  }

  return CandidateSpeciality;
};

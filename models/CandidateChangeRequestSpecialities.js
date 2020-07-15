/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var CandidateChangeRequestSpecialities = sequelize.define('CandidateChangeRequestSpecialities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
          model: 'Grades',
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
      },
      changeRequestId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'CandidateChangeRequest',
          key: 'id'
        }
      }
    }, {
      tableName: 'CandidateChangeRequestSpecialities'
    });
  
    CandidateChangeRequestSpecialities.associate = function (models) {
      CandidateChangeRequestSpecialities.belongsTo(models.CandidatesProfile, {
        onDelete: "CASCADE",
        foreignKey: 'candidateId'
      });

      CandidateChangeRequestSpecialities.belongsTo(models.CandidateChangeRequest, {
        as: 'CandidateChangeRequest',
        onDelete: "CASCADE",
        foreignKey: 'changeRequestId'
      });

      CandidateChangeRequestSpecialities.belongsTo(models.Specialities, {
        as:'Specialities',
        onDelete: "CASCADE",
        foreignKey: 'specialityId'
      });

      CandidateChangeRequestSpecialities.belongsTo(models.Grades, {
        as:'Grades',
        onDelete: "CASCADE",
        foreignKey: 'candidateGradeId'
      });


    }

    return CandidateChangeRequestSpecialities;
  };
  
/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidateGrade = sequelize.define('CandidateGrade', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
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
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    approvalStatus: {
      type: DataTypes.ENUM('Pending', 'Approved', 'Rejected', 'Default'),
      defaultValue: 'Default'
    },
    approveBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ComplianceProfiles',
        key: 'id'
      }
    },
    AssignTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ComplianceProfiles',
        key: 'id'
      }
    },
    approveDate: {
      allowNull: true,
      type: DataTypes.DATE
  },
  isDeleteOnly:{
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  changeRequestId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidateChangeRequest',
        key: 'id'
      }
    }
  }, {
      tableName: 'CandidateGrade'
    });

  CandidateGrade.associate = function (models) {

    CandidateGrade.belongsTo(models.CandidatesProfile, {
      onDelete: "CASCADE",
      foreignKey: 'candidateId'
    });


    CandidateGrade.belongsTo(models.Grades, {
      as: 'Grades',
      onDelete: "CASCADE",
      foreignKey: 'gradeId'
    });


    CandidateGrade.hasMany(models.CandidateSpeciality, {
      as: 'CandidateSpeciality',
      onDelete: "CASCADE",
      foreignKey: 'candidateGradeId'
    });

    CandidateGrade.belongsTo(models.ComplianceProfiles, {
      as: "ComplianceProfilesAssign",
      onDelete: "CASCADE",
      foreignKey: 'AssignTo'
    });

    CandidateGrade.belongsTo(models.ComplianceProfiles, {
      as: "ComplianceProfiles",
      onDelete: "CASCADE",
      foreignKey: 'approveBy'
    });

    CandidateGrade.belongsTo(models.CandidateChangeRequest, {
      as: "CandidateChangeRequest",
      onDelete: "CASCADE",
      foreignKey: 'changeRequestId'
  });
  }





  return CandidateGrade;
};

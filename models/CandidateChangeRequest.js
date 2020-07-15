module.exports = function (sequelize, DataTypes) {
  var candidateChangeRequest = sequelize.define('CandidateChangeRequest', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    columnName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updatedValue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tableName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    approvalStatus: {
      type: DataTypes.ENUM,
      values: ['Pending', 'Approved', 'Rejected', 'Default'],
      defaultValue: 'Pending'
    },
    approveBy: {
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
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    },
    candidateProfileID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    gradeType: {
      type: DataTypes.ENUM("Primary","Secondary","Tertiary"),
      allowNull: true,
      defaultValue: null
    },
    isGradeChange: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AssignTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ComplianceProfiles',
        key: 'id'
      }
    },
    previousValue:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    }
  }, {
      tableName: 'CandidateChangeRequest'
    });

    candidateChangeRequest.associate = function(models) {

      candidateChangeRequest.belongsTo(models.ComplianceProfiles, {
        as: "ComplianceProfilesApproveBy",
        onDelete: "CASCADE",
        foreignKey: 'approveBy'
      });
      candidateChangeRequest.belongsTo(models.ComplianceProfiles, {
        as: "ComplianceProfiles",
        onDelete: "CASCADE",
        foreignKey: 'candidateProfileID'
      });

      candidateChangeRequest.belongsTo(models.CandidatesProfile, {
        onDelete: "CASCADE",
        foreignKey: 'candidateProfileID'
      });

      candidateChangeRequest.hasMany(models.CandidateChangeRequestSpecialities, {
        as: "CandidateChangeRequestSpecialities",
        onDelete: "CASCADE",
        foreignKey: 'changeRequestId'
      });
  }
  
  return candidateChangeRequest;
}
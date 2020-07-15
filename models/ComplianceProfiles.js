/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var ComplianceProfiles = sequelize.define(
    "ComplianceProfiles",
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
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      code: {
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
      lastActiveStatus: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "ComplianceProfiles",
    }
  );

  ComplianceProfiles.associate = function (models) {
    ComplianceProfiles.belongsTo(models.Users, {
      as: "Users",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });

    ComplianceProfiles.hasMany(models.CandidateComplianceDocuments, {
      as: "CandidateComplianceDocumentsApprovedBy",
      onDelete: "CASCADE",
      foreignKey: "approveBy",
    });

    ComplianceProfiles.hasMany(models.CandidateComplianceDocuments, {
      as: "CandidateComplianceDocumentsAssignTo",
      onDelete: "CASCADE",
      foreignKey: "AssignTo",
    });

    ComplianceProfiles.hasMany(models.CandidateComplianceReferences, {
      as: "CandidateComplianceReferencesApprovedBy",
      onDelete: "CASCADE",
      foreignKey: "approveBy",
    });

    ComplianceProfiles.hasMany(models.CandidateComplianceReferences, {
      as: "CandidateComplianceReferencesAssignTo",
      onDelete: "CASCADE",
      foreignKey: "AssignTo",
    });

    ComplianceProfiles.hasMany(models.CandidateCompliancePoliceCheck, {
      as: "CandidateCompliancePoliceCheckApprovedBy",
      onDelete: "CASCADE",
      foreignKey: "approveBy",
    });

    ComplianceProfiles.hasMany(models.CandidateCompliancePoliceCheck, {
      as: "CandidateCompliancePoliceCheckAssignTo",
      onDelete: "CASCADE",
      foreignKey: "AssignTo",
    });

    ComplianceProfiles.hasMany(
      models.CandidateComplianceDocumentsChangeRequest,
      {
        as: "CandidateComplianceDocumentsChangeRequestApproveBy",
        onDelete: "CASCADE",
        foreignKey: "approveBy",
      }
    );

    ComplianceProfiles.hasMany(
      models.CandidateComplianceReferencesChangeRequest,
      {
        as: "CandidateComplianceReferencesChangeRequestApproveBy",
        onDelete: "CASCADE",
        foreignKey: "approveBy",
      }
    );

    ComplianceProfiles.hasMany(
      models.CandidateCompliancePoliceCheckChangeRequest,
      {
        as: "CandidateCompliancePoliceCheckChangeRequestApproveBy",
        onDelete: "CASCADE",
        foreignKey: "approveBy",
      }
    );

    ComplianceProfiles.hasMany(
      models.CandidateComplianceReferencesChangeRequest,
      {
        as: "CandidateComplianceReferencesChangeRequestAssignTo",
        onDelete: "CASCADE",
        foreignKey: "AssignTo",
      }
    );

    ComplianceProfiles.hasMany(
      models.CandidateCompliancePoliceCheckChangeRequest,
      {
        as: "CandidateCompliancePoliceCheckChangeRequestAssignTo",
        onDelete: "CASCADE",
        foreignKey: "AssignTo",
      }
    );
  };
  return ComplianceProfiles;
};

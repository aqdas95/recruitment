'use strict';
module.exports = (sequelize, DataTypes) => {
    var CandidateCompliancePoliceCheckChangeRequest = sequelize.define('CandidateCompliancePoliceCheckChangeRequest', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        candidateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CandidatesProfile',
                key: 'id'
            }
        },
        DocumentId: {
            type: DataTypes.INTEGER,
            allowNULL: true,
            references: {
                model: 'Documents',
                key: 'id'
            },
        },
        DocumentTypeId: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            references: {
                model: 'DocumentTypes',
                key: 'id'
            },
        },
        startDate: {
            allowNull: true,
            type: DataTypes.DATE
        },
        endDate: {
            allowNull: true,
            type: DataTypes.DATE
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        expiryStatus: {
            type: DataTypes.ENUM('Expired', 'Almost Expired', 'Valid'),
            defaultValue: 'Valid'
        },
        approvalStatus: {
            type: DataTypes.ENUM('Pending', 'Approved', 'Rejected', 'Default'),
            defaultValue: 'Pending'
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
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
        AssignTo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'ComplianceProfiles',
                key: 'id'
            }
        },
    },
        {
            freezeTableName: true,
            tableName: 'CandidateCompliancePoliceCheckChangeRequest'

        });

    CandidateCompliancePoliceCheckChangeRequest.associate = function (models) {

        CandidateCompliancePoliceCheckChangeRequest.belongsTo(models.CandidatesProfile, {
            as: "CandidatesProfile",
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });

        CandidateCompliancePoliceCheckChangeRequest.belongsTo(models.DocumentTypes, {
            as: "DocumentTypes",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        CandidateCompliancePoliceCheckChangeRequest.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfiles",
            onDelete: "CASCADE",
            foreignKey: 'approveBy'
        });


        CandidateCompliancePoliceCheckChangeRequest.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfilesAssign",
            onDelete: "CASCADE",
            foreignKey: 'AssignTo'
        });

        CandidateCompliancePoliceCheckChangeRequest.belongsTo(models.Documents, {
            as: "Documents",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });
    }

    return CandidateCompliancePoliceCheckChangeRequest;
};
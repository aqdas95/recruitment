'use strict';
module.exports = (sequelize, DataTypes) => {
    var CandidateCompliancePoliceCheck = sequelize.define('CandidateCompliancePoliceCheck', {
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
        changeRequestId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'CandidateCompliancePoliceCheckChangeRequest',
                key: 'id'
            }
        },
        isDeleteOnly: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
    },
        {
            freezeTableName: true,
            tableName: 'CandidateCompliancePoliceCheck'

        });

    CandidateCompliancePoliceCheck.associate = function (models) {

        CandidateCompliancePoliceCheck.belongsTo(models.CandidatesProfile, {
            as: "CandidatesProfile",
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });

        CandidateCompliancePoliceCheck.belongsTo(models.DocumentTypes, {
            as: "DocumentTypes",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        CandidateCompliancePoliceCheck.belongsTo(models.Documents, {
            as: "Documents",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });

        CandidateCompliancePoliceCheck.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfilesAssign",
            onDelete: "CASCADE",
            foreignKey: 'AssignTo'
        });

        CandidateCompliancePoliceCheck.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfiles",
            onDelete: "CASCADE",
            foreignKey: 'approveBy'
        });

        CandidateCompliancePoliceCheck.belongsTo(models.CandidateCompliancePoliceCheckChangeRequest, {
            as: "CandidateCompliancePoliceCheckChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'changeRequestId'
        });
    }

    return CandidateCompliancePoliceCheck;
};
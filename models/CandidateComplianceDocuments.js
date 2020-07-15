'use strict';
module.exports = (sequelize, DataTypes) => {
    var CandidateComplianceDocuments = sequelize.define('CandidateComplianceDocuments', {
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
        DocumentId: {
            type: DataTypes.INTEGER,
            allowNULL: false,
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
                model: 'CandidateComplianceDocumentsChangeRequest',
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
            tableName: 'CandidateComplianceDocuments'

        });

    CandidateComplianceDocuments.associate = function (models) {

        CandidateComplianceDocuments.belongsTo(models.CandidatesProfile, {
            as: "CandidatesProfile",
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });

        CandidateComplianceDocuments.belongsTo(models.DocumentTypes, {
            as: "DocumentTypes",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        CandidateComplianceDocuments.belongsTo(models.Documents, {
            as: "Documents",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });

        CandidateComplianceDocuments.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfiles",
            onDelete: "CASCADE",
            foreignKey: 'AssignTo'
        });

        CandidateComplianceDocuments.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfilesAssign",
            onDelete: "CASCADE",
            foreignKey: 'approveBy'
        });

        CandidateComplianceDocuments.belongsTo(models.CandidateComplianceDocumentsChangeRequest, {
            as: "CandidateComplianceDocumentsChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'changeRequestId'
        });

    }

    return CandidateComplianceDocuments;
};
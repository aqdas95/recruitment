'use strict';
module.exports = (sequelize, DataTypes) => {
    var CandidateComplianceDocumentsChangeRequest = sequelize.define('CandidateComplianceDocumentsChangeRequest', {
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
        tableName: 'CandidateComplianceDocumentsChangeRequest'

    });

    CandidateComplianceDocumentsChangeRequest.associate = function (models) {
       
        CandidateComplianceDocumentsChangeRequest.belongsTo(models.CandidatesProfile, {
            as: "CandidatesProfile",
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });

        CandidateComplianceDocumentsChangeRequest.belongsTo(models.DocumentTypes, {
            as: "DocumentTypes",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });


        CandidateComplianceDocumentsChangeRequest.belongsTo(models.Documents, {
            as: "Documents",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });
        
        CandidateComplianceDocumentsChangeRequest.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfiles",
            onDelete: "CASCADE",
            foreignKey: 'approveBy'
        });

        CandidateComplianceDocumentsChangeRequest.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfilesAssign",
            onDelete: "CASCADE",
            foreignKey: 'AssignTo'
        });

      
    }

    return CandidateComplianceDocumentsChangeRequest;
};
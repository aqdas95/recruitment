'use strict';
module.exports = (sequelize, DataTypes) => {
    var CandidateComplianceReferencesChangeRequest = sequelize.define('CandidateComplianceReferencesChangeRequest', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        referenceNo: {
            allowNull: false,
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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subTitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contactNo: {
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
        }
    },
        {
            freezeTableName: true,
            tableName: 'CandidateComplianceReferencesChangeRequest'

        });

    CandidateComplianceReferencesChangeRequest.associate = function (models) {

        CandidateComplianceReferencesChangeRequest.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfilesAssign",
            onDelete: "CASCADE",
            foreignKey: 'AssignTo'
        });

        CandidateComplianceReferencesChangeRequest.belongsTo(models.DocumentTypes, {
            as: "DocumentTypes",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        CandidateComplianceReferencesChangeRequest.belongsTo(models.Documents, {
            as: "Documents",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });

        CandidateComplianceReferencesChangeRequest.belongsTo(models.ComplianceProfiles, {
            as: "ComplianceProfiles",
            onDelete: "CASCADE",
            foreignKey: 'approveBy'
        });


    }

    return CandidateComplianceReferencesChangeRequest;
};
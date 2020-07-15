'use strict';
module.exports = (sequelize, DataTypes) => {
    var DocumentTypes = sequelize.define('DocumentTypes', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },    
        type: {
            type: DataTypes.ENUM('Others', 'Reference', 'PoliceCheck'),
            defaultValue: 'Others'
        },
        multiDoc: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
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
    },{
            freezeTableName: true,
            tableName: 'DocumentTypes'

        });
 

    DocumentTypes.associate = function (models) {
        
        DocumentTypes.hasMany(models.CandidateDocumentsTypeStatus, {
            as: "CandidateDocumentsTypeStatus",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateComplianceDocuments, {
            as: "CandidateComplianceDocuments",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateComplianceReferences, {
            as: "CandidateComplianceReferences",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateCompliancePoliceCheck, {
            as: "CandidateCompliancePoliceCheck",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateComplianceDocumentsChangeRequest, {
            as: "CandidateComplianceDocumentsChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateCompliancePoliceCheckChangeRequest, {
            as: "CandidateCompliancePoliceCheckChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateComplianceReferencesChangeRequest, {
            as: "CandidateComplianceReferencesChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'DocumentTypeId'
        });

        DocumentTypes.hasMany(models.CandidateComplianceStatus, {
            as: "CandidateComplianceStatus",
            onDelete: "CASCADE",
            foreignKey: 'documentTypeId'
        });
    }

    return DocumentTypes;
};
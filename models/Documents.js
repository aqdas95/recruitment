
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Documents = sequelize.define('Documents', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modifiedFileName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '/tmp/'
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
        }
    },
        {
            freezeTableName: true,
            tableName: 'Documents'

        });

    Documents.associate = function (models) {
        Documents.hasMany(models.CandidateComplianceDocuments, {
            as: "CandidateComplianceDocuments",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });


        Documents.hasMany(models.PlacedCandidate, {
            as: "PlacedCandidate",
            onDelete: "CASCADE",
            foreignKey: 'documentId'
        });


        Documents.hasMany(models.CandidateComplianceReferences, {
            as: "CandidateComplianceReferences",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });

        Documents.hasMany(models.CandidateCompliancePoliceCheck, {
            as: "CandidateCompliancePoliceCheck",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });
        
        Documents.hasMany(models.CandidateComplianceDocumentsChangeRequest, {
            as: "CandidateComplianceDocumentsChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });

        Documents.hasMany(models.CandidateCompliancePoliceCheckChangeRequest, {
            as: "CandidateCompliancePoliceCheckChangeRequest",
            onDelete: "CASCADE",
            foreignKey: 'DocumentId'
        });
      

    }
    return Documents;
};
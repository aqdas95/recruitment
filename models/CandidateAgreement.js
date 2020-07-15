'use strict';
module.exports = function (sequelize, DataTypes) {
    var CandidateAgreement = sequelize.define('CandidateAgreement', {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        candidateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CandidatesProfile',
                key: 'id'
            }
        },
        isLicenceAgreementRead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isPrivacyPolicyRead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isSmsSubscribed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isEmailSubscribed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
            tableName: 'CandidateAgreement'
        });


    CandidateAgreement.associate = function (models) {

        CandidateAgreement.belongsTo(models.CandidatesProfile, {
            as: 'CandidatesProfile',
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });

    }


    return CandidateAgreement;
};

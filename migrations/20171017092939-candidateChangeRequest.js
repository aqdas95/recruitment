'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('CandidateChangeRequest', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            columnName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            updatedValue: {
                type: Sequelize.STRING,
                allowNull: false
            },
            tableName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            isGradeChange:
                {
                    type: Sequelize.BOOLEAN,
                    allowNULL: false,
                    model: 'CandidateChangeRequest',
                    onDelete: 'restrict',
                    onUpdate: 'cascade'
                },
            gradeType: {
                type: Sequelize.ENUM,
                values: ['Primary', 'Secondary', 'Tertiary'],
                allowNULL: true,
            },

            candidateProfileID: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'CandidatesProfile',
                    onDelete: 'restrict'
                },
                onUpdate: 'cascade',
                onDelete: 'restrict'
            },
            approvalStatus: {
                type: Sequelize.ENUM,
                values: ['Pending', 'Approved', 'Rejected', 'Default'],
                defaultValue: 'Pending'
            },
            approveBy: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'ComplianceProfiles',
                    onDelete: 'restrict'
                },
                onUpdate: 'cascade',
                onDelete: 'restrict'
            },
            approveDate: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()')
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()')
            },

        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('CandidateChangeRequest');
    }
};

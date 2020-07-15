'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidateAgreement', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidateId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'CandidatesProfile',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      isLicenceAgreementRead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isPrivacyPolicyRead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isSmsSubscribed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isEmailSubscribed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CandidateAgreement');
  }
};
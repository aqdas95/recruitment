'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidateComplianceDocumentsChangeRequest', {
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
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      DocumentId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Documents',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      DocumentTypeId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'DocumentTypes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      expiryStatus: {
        type: Sequelize.ENUM,
        values: ['Expired', 'Almost Expired', 'Valid'],
        defaultValue: 'Valid'
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
          key: 'id'
        }
      },
      approveDate: {
        allowNull: true,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('CandidateComplianceDocumentsChangeRequest');
  }
};

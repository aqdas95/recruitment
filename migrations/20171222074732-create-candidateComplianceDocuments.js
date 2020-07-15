'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidateComplianceDocuments', {
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
      expiryStatus: {
        type: Sequelize.ENUM,
        values: ['Expired', 'Almost Expired', 'Valid','Missing'],
        defaultValue: 'Valid'
      },
      approvalStatus: {
        type: Sequelize.ENUM,
        values: ['Pending', 'Approved', 'Rejected', 'Default'],
        defaultValue: 'Default'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
    return queryInterface.dropTable('CandidateComplianceDocuments');
  }
};

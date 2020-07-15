'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidateComplianceReferencesChangeRequest', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      referenceNo: {
        allowNull: false,
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
        allowNULL: true,
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
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contactNo: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('CandidateComplianceReferencesChangeRequest');
  }
};
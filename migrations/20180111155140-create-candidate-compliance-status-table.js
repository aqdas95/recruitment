'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateComplianceStatus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

       candidateId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'CandidatesProfile',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },

      documentTypeId: {
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
        values: ['Expired', 'Almost Expired', 'Valid','Default'],
        defaultValue: 'Default'
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('CandidateComplianceStatus');
  }
};
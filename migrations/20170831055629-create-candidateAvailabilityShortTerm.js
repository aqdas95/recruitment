'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateAvailabilityShortTerm', {
      id: {
        allowNull: false,
        autoIncrement: false,
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
      availabilityType: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'CandidateAvailabilityType',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      shiftType: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'ShiftAvailabilityType',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },      
      availableDateStart: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      availableDateEnd: {
        allowNull: false,
        type: Sequelize.DATE,
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

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('CandidateAvailabilityShortTerm');
  }
};

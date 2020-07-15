'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidateUnAvailabilityDetails', {
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
    unvailabilityDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    candidateLongTermAvailabilityId: {
      type: Sequelize.INTEGER,
      allowNULL: false,
      references: {
        model: 'CandidateAvailabilityLongTerm',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
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
    return queryInterface.dropTable('CandidateUnAvailabilityDetails');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlacedCandidate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vacancieId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'Vacancies',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
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
      candidateAppliedJobId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'CandidateAppliedJobs',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      recruiterId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'RecruiterProfiles',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
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
    return queryInterface.dropTable('PlacedCandidate');
  }
};

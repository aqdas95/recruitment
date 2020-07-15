'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('CandidateAvailabilityShortTerm', {
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

  down: (queryInterface, Sequelize) => {
    return  queryInterface.dropTable('CandidateAvailabilityShortTerm');
  }
};

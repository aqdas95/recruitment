'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('RecruiterCandidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('RecruiterCandidates');
  }
};
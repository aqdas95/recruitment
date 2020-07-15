'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateStatistics', {
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
      read: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      unread: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      placed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pending: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sentToClient: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      toAction: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      shortList: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      notIntrested: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sentAll: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    return queryInterface.dropTable('CandidateStatistics');
  }
};
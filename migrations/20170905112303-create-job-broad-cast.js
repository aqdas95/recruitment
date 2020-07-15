'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('JobBroadCasts', {
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
      candidateResponce: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      jobRead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      jobClosed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
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
    return queryInterface.dropTable('JobBroadCasts');
  }
};
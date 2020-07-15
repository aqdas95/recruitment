'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateAppliedJobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobBroadCastsId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'JobBroadCasts',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      expectedRate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      completeShiftAvalabe: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      shiftNoes: {
        type: Sequelize.STRING,
        allowNull: true
      },
      callMe: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      messageToRecruiter: {
        type: Sequelize.STRING,
        allowNull: true
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
    return queryInterface.dropTable('CandidateAppliedJobs');
  }
};
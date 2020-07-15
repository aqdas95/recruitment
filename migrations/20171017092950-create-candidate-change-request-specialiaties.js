'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateChangeRequestSpecialities', {
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
      candidateGradeId: { 
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Grades',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      specialityId: { 
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Specialities',
          key: 'id'
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
      },
      changeRequestId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CandidateChangeRequest',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('CandidateChangeRequestSpecialities');
  }
};
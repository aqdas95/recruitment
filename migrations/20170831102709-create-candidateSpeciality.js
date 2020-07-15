'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateSpeciality', {
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
          model: 'CandidateGrade',
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
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('CandidateSpeciality');
  }
};

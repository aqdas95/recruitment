'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidatesRegistrationSpeciality', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidateRegistrationId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'CandidatesRegistration',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      CandidatesRegistrationGradeId: { 
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'CandidatesRegistrationGrade',
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
    return queryInterface.dropTable('CandidatesRegistrationSpeciality');
  }
};

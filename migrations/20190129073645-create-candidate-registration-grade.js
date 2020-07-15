'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidatesRegistrationGrade', {
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
      gradeId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Grades',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      gradeType: {
        type: Sequelize.ENUM,
        values: ['Primary', 'Secondary', 'Tertiary'],
        defaultValue: 'Primary'
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
    return queryInterface.dropTable('CandidatesRegistrationGrade');
  }
};

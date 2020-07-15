'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidateGrade', {
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
    return queryInterface.dropTable('CandidateGrade');
  }
};

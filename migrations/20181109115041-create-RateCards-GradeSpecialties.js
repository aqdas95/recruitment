'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('RateCardGradeSpecialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rateCardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RateCards',
          onDelete: 'restrict'
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
      specialityId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Specialities',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      payRate: {
        type: Sequelize.FLOAT,
        allowNULL: false,
      },
      commission: {
        type: Sequelize.FLOAT,
        allowNULL: false,
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
    return queryInterface.dropTable('RateCardGradeSpecialties');
  }
};
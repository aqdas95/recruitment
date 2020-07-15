'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('VacancySchedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vacancyId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Vacancies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      scheduleStartDateTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      scheduleEndDataTime: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('VacancySchedule');
  }
};

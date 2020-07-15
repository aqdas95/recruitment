'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('VacancyShifts', {
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
            startDate: {
              allowNull: false,
              type: Sequelize.DATE
            },
            startTime: {
              allowNull: false,
              type: Sequelize.TIME
            },
            endTime: {
              allowNull: false,
              type: Sequelize.TIME
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
        down: (queryInterface, Sequelize) => {
          return queryInterface.dropTable('VacancyShifts');
        }
    };
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('WeeklyRota', {
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
            day: {
              type: Sequelize.ENUM,
              values: ['Mon', 'Tue', 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun'],
              defaultValue: 'Mon'
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
          return queryInterface.dropTable('WeeklyRota');
        }
    };
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('VacancyAttachments', {
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
            filePath: {
              type: Sequelize.STRING
              },
              fileName: {
                type: Sequelize.STRING
                },
                fileType: {
                  type: Sequelize.STRING
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
          return queryInterface.dropTable('VacancyAttachments');
        }
    };
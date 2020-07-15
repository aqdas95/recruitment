'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('JobCloses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.STRING
      },
      jobCloseReasonsId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'JobCloseReasons',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('JobCloses');
  }
};
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Specialities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },            
      gradeId: {
        type: Sequelize.INTEGER,
        allowNULL:true,
        references: {
          model: 'Grades',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
       division: {
        type: Sequelize.STRING,
        allowNull: true,        
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
    return queryInterface.dropTable('Specialities');
  }
};

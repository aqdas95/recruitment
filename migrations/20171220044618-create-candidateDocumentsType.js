'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DocumentTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },     
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      detail: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },  
      type: {
        type: Sequelize.ENUM,
        values: ['Others', 'Reference', 'PoliceCheck'],
        defaultValue: 'Others'
      }, 
      multiDoc: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    return queryInterface.dropTable('DocumentTypes');
  }
};

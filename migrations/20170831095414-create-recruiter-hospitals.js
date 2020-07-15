'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('RecruiterHospitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recruiterId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'RecruiterProfiles',
          onDelete: 'restrict'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      hospitalsId:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        references:{
          model: 'Hospitals',
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
    }

    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('RecruiterHospitals');
  }
};
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidatesRegistration', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      forename: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      DOB: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      mobilePhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gmcNo: {
        type: Sequelize.STRING,
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
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('CandidatesRegistration');
  }
};

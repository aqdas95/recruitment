'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidatePreference', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidateId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'CandidatesProfile',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      postCodeDistance: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      preferedLocationPostCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      intrestedHospitals: {
        type: Sequelize.STRING,
        allowNull: true,
      },
        shortTermAvailability: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      longTermAvailability: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    return queryInterface.dropTable('CandidatePreference');
  }
};

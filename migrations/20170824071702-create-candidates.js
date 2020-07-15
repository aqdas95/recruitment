'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CandidatesProfile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      refNo: {
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
      DOB: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      postCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      locationRegion: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mobilePhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gmcNo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      candidateLat: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      candidateLong: {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('CandidatesProfile');
  }
};

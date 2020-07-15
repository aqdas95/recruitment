'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('HospitalSubSites', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            code:{
              type: Sequelize.STRING 
            },
            name: {
              type: Sequelize.STRING
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
              contactTelno: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              contactEmail: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              subSiteLat: {
                type: Sequelize.DOUBLE,
                allowNull: true,
              },
              subSiteLong: {
                type: Sequelize.DOUBLE,
                allowNull: true,
              },
              hospitalId: {
                type: Sequelize.INTEGER,
                allowNULL: false,
                references: {
                  model: 'Hospitals',
                  key: 'id'
                },
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
          return queryInterface.dropTable('HospitalSubSites');
        }
    };
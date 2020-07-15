'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      refNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      source: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hospitalId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Hospitals',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false,
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
      contactForename: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contactTelNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contactEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jobDescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gradeId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Grades',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      specialityId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'Specialities',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      vacancyTimestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fullTimePartTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      noOfVacancy: {
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
    return queryInterface.dropTable('Vacancies');
  }
};

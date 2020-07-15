"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Vacancies", "source"),

      queryInterface.removeColumn("Vacancies", "country"),

      queryInterface.removeColumn("Vacancies", "location"),

      queryInterface.removeColumn("Vacancies", "locationRegion"),

      queryInterface.removeColumn("Vacancies", "contactForename"),

      queryInterface.removeColumn("Vacancies", "contactTelNo"),

      queryInterface.removeColumn("Vacancies", "vacancyTimestamp"),

      queryInterface.removeColumn("Vacancies", "fullTimePartTime"),

      queryInterface.removeColumn("Vacancies", "noOfVacancy"),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};

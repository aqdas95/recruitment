"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex(
      "Vacancies",
      [
        "hospitalId",
        "gradeId",
        "specialityId",
        "userId",
        "contactPersonId",
        "hospitalSubSitesId",
      ],
      { name: "idx_vacancies_composite" }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex("Vacancies", "idx_vacancies_composite");
  },
};

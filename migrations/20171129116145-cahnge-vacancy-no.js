"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Vacancies", "vacancyNo"),

      queryInterface.addColumn("Vacancies", "autoNumber", {
        type: Sequelize.NUMERIC(5, 0),
        allowNULL: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Vacancies", "autoNumber");
  },
};

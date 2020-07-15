"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Vacancies", "additionalInfo", {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Vacancies", "additionalInfo", {
      type: Sequelize.STRING,
    });
  },
};

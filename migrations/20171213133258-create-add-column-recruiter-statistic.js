"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "RecruiterStatistics",
      "recruiterProfileId",
      {
        type: Sequelize.INTEGER,
        allowNULL: false,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "RecruiterStatistics",
      "recruiterProfileId"
    );
  },
};

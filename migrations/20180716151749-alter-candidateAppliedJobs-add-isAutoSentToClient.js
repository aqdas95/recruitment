"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "CandidateAppliedJobs",
      "isAutoSentToClient",
      {
        type: Sequelize.BOOLEAN,
        allowNULL: false,
        defaultValue: false,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "CandidateAppliedJobs",
      "isAutoSentToClient",
      {
        type: Sequelize.BOOLEAN,
        allowNULL: false,
        defaultValue: false,
      }
    );
  },
};

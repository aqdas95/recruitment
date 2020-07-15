"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "CandidateAppliedJobs",
      "createdAtPending",
      {
        type: Sequelize.DATE,
        allowNULL: true,
        defaultValue: null,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "CandidateAppliedJobs",
      "createdAtPending"
    );
  },
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidateAppliedJobs", "totalCharge", {
      type: Sequelize.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidateAppliedJobs", "totalCharge");
  },
};

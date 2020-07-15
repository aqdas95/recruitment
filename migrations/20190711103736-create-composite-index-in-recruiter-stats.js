"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex(
      "RecruiterStatistics",
      ["vacancieId", "recruiterProfileId"],
      { name: "idx_recruiter_stats_composite" }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex(
      "RecruiterStatistics",
      "idx_recruiter_stats_composite"
    );
  },
};

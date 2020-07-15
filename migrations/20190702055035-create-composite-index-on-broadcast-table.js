"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex(
      "JobBroadCasts",
      ["vacancieId", "candidateId", "recruiterId"],
      { name: "idx_job_broadcast_composite" }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex(
      "JobBroadCasts",
      "idx_job_broadcast_composite"
    );
  },
};

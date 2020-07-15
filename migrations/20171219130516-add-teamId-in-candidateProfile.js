"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("RecruiterProfiles", "teamId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: "Teams",
          onDelete: "restrict",
        },
      }),
      queryInterface.addColumn("RecruiterProfiles", "candidateColor", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /// DID NOT WORK
    return Promise.all([
      queryInterface.removeColumn("CandidatesProfile", "teamId"),
      queryInterface.removeColumn("CandidatesProfile", "candidateColor"),
    ]);

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};

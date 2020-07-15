"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        "CandidateAppliedJobs",
        "messageToRecruiter",
        { type: Sequelize.STRING(4096) }
      ),

      queryInterface.changeColumn("Negotiations", "internalNotes", {
        type: Sequelize.STRING(4096),
      }),

      queryInterface.changeColumn("Negotiations", "additionalComments", {
        type: Sequelize.STRING(4096),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      "CandidateAppliedJobs",
      "messageToRecruiter",
      {
        type: 'varchar USING "messageToRecruiter"::varchar',
      }
    );
  },
};

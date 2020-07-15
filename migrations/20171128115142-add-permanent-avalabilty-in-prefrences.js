"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "CandidatePreference",
      "permanentAvailability",
      {
        type: Sequelize.BOOLEAN,
        allowNULL: false,
        model: "CandidatePreference",
        onDelete: "restrict",
        onUpdate: "cascade",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "CandidatePreference",
      "permanentAvailability"
    );
  },
};
